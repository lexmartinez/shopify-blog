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

  return (
    <PageContainer>
      <Metadata />
      <EmptyState>
        <Headline2>{"Sorry, we can't tie that knot"}</Headline2>
      </EmptyState>
      <ContentGrid
        title={'But this may interest you ...'}
        target={'/articles/all'}
        items={posts.slice(0, 4)}
      />
      <Newsletter />
    </PageContainer>
  )
}

export default NotFound
