import React from 'react'
import { PageContainer, Post, Newsletter, Metadata } from '@components'

const PostTemplate = ({ pageContext }) => {
  const post = pageContext?.post
  return (
    <PageContainer
      breadcrumbs={[
        { label: 'Artículos & Tutoriales', target: '/articles/all' },
        { label: post.title },
      ]}
    >
      <Metadata
        article={true}
        title={`${post?.title} · ${pageContext?.siteTitle}`}
        description={post?.description}
        image={post?.rawImage}
      />
      <Post {...post} />
      <Newsletter />
    </PageContainer>
  )
}

export default PostTemplate
