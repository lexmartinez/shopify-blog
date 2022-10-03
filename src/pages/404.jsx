import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { PageContainer, ContentGrid, Newsletter, Metadata } from '@components'
import { Headline2 } from '@components/Typography'

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`

const NotFound = props => {
  const data = useStaticQuery(graphql`
    query NotFound {
      site {
        siteMetadata {
          title
          shortDescription
        }
      }
      allPost {
        edges {
          node {
            date
            id
            postId
            published
            rawDate
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
          }
        }
      }
    }
  `)

  const posts = (data?.allPost?.edges || [])
    .map(({ node }) => node)
    .filter(({ published }) => published)
    .sort(() => 0.5 - Math.random())

  const siteTitle = data?.site?.siteMetadata?.title
  const shortDescription = data?.site?.siteMetadata?.shortDescription
  return (
    <PageContainer>
      <Metadata title={`${siteTitle} · ${shortDescription}`} />
      <EmptyState>
        <Headline2>{'Vaya! No hemos encontrado la página que buscas.'}</Headline2>
      </EmptyState>
      <ContentGrid
        title={'Pero esto puede interesarte ...'}
        target={'/articles/all'}
        items={posts.slice(0, 4)}
      />
      <Newsletter />
    </PageContainer>
  )
}

export default NotFound
