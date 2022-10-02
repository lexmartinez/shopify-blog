const path = require('path')
const axios = require('axios')
const dayjs = require('dayjs')
const uniq = require('lodash/uniq')
const capitalize = require('lodash/capitalize')
const isArray = require('lodash/isArray')
const { createRemoteFileNode } = require('gatsby-source-filesystem')
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

axios.defaults.baseURL = 'https://api.notion.com/v1/'
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.NOTION_API_KEY}`
axios.defaults.headers.common['Notion-Version'] = '2021-08-16'

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@theme': path.resolve(__dirname, 'src/theme'),
      },
    },
  })
}

const POST_NODE_TYPE = 'Post'

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  createNodeId,
  getCache,
  cache,
  store,
  createContentDigest,
}) => {
  if (node.internal.type === 'Notion') {
    const { id, raw, json } = node
    const { properties, children } = { ...JSON.parse(json) }
    const nodeId = createNodeId(`${POST_NODE_TYPE}_${id}`)
    const post = {
      id,
      published: !!properties?.published?.checkbox,
      slug: properties?.slug?.rich_text,
      time: properties?.time?.rich_text,
      description: properties?.description?.rich_text,
      title: (properties?.title?.title || [])[0]?.plain_text,
      type: properties?.type?.select?.name,
      tags: (properties?.tags?.multi_select || []).map(({ name }) => name),
      date: dayjs(properties?.date?.date?.start, 'YYYY-MM-DD').format('MMM DD, YYYY'),
      url: `/${properties?.type?.select?.name}s/${properties?.slug.rich_text}`,
      rawDate: dayjs(properties?.date?.date?.start, 'YYYY-MM-DD').toDate(),
      rawImage: raw?.cover?.external?.url,
      content: (children || []).map(block => {
        const rawTextNode = block[block?.type]?.text
        const textNode = isArray(rawTextNode) ? rawTextNode : [rawTextNode]
        return {
          id: block?.id,
          type: block?.type,
          image: block[block?.type]?.external?.url,
          language: block[block?.type]?.language,
          value: textNode.map(item => ({
            href: item?.href,
            text: item?.plain_text,
            bold: item?.annotations?.bold,
            code: item?.annotations?.code,
            italic: item?.annotations?.italic,
          })),
        }
      }),
    }

    const imageNode = await createRemoteFileNode({
      url: raw?.cover?.external?.url,
      parentNodeId: id,
      createNode,
      createNodeId,
      getCache,
      cache,
      store,
    })

    const content = await Promise.all(
      (post?.content || []).map(async block => {
        if (!!block.image) {
          const blockNode = await createRemoteFileNode({
            url: block.image,
            parentNodeId: block?.id,
            createNode,
            createNodeId,
            getCache,
            cache,
            store,
          })
          return {
            ...block,
            image___NODE: blockNode.id,
          }
        }
        return block
      })
    )

    await createNode({
      ...post,
      image___NODE: imageNode.id,
      id: nodeId,
      postId: post?.id,
      content,
      parent: null,
      children: [],
      internal: {
        type: POST_NODE_TYPE,
        content: JSON.stringify(post),
        contentDigest: createContentDigest(post),
      },
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query AllPosts {
      allPost {
        edges {
          node {
            date
            description
            id
            postId
            published
            rawDate
            rawImage
            slug
            tags
            time
            title
            type
            url
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
            content {
              id
              image {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              language
              type
              value {
                bold
                code
                href
                italic
                text
              }
            }
          }
        }
      }
    }
  `)

  const posts = (queryResults?.data?.allPost?.edges || [])
    .map(({ node }) => node)
    .filter(({ published }) => published)
    .sort((a, b) => (dayjs(a.rawDate).isAfter(dayjs(b.rawDate)) ? -1 : 1))
  const tags = uniq(posts.map(({ tags }) => tags).reduce((a, b) => [...a, ...b], []))
  const types = uniq(posts.map(({ type }) => type))
  const homeTemplate = path.resolve(`src/templates/home.jsx`)
  const postTemplate = path.resolve(`src/templates/post.jsx`)
  const tagTemplate = path.resolve(`src/templates/tag.jsx`)
  const searchTemplate = path.resolve(`src/templates/search.jsx`)

  createPage({
    path: '/',
    component: homeTemplate,
    context: {
      posts,
    },
  })

  createPage({
    path: '/search',
    component: searchTemplate,
    context: {
      posts,
    },
  })

  for (const post of posts) {
    createPage({
      path: `/${post?.type}s/${post?.slug}`,
      component: postTemplate,
      context: {
        post,
      },
    })
  }

  for (const tag of tags) {
    createPage({
      path: `/tags/${tag}`,
      component: tagTemplate,
      context: {
        tag,
        posts: posts.filter(({ tags }) => tags.indexOf(tag) !== -1),
      },
    })
  }

  for (const type of types) {
    createPage({
      path: `/${type}s/all`,
      component: tagTemplate,
      context: {
        tag: `all-${capitalize(type)}s`,
        posts: posts.filter(({ type: postType }) => type === postType),
      },
    })
  }
}
