import React from 'react'
import { PageContainer, Post, Newsletter, Metadata } from '@components'

const PostTemplate = ({ pageContext }) => {
  const post = pageContext?.post
  return (
    <PageContainer>
      <Metadata
        article={true}
        title={post?.title}
        description={post?.description}
        image={post?.rawImage}
      />
      <Post {...post} />
      <Newsletter />
    </PageContainer>
  )
}

export default PostTemplate
