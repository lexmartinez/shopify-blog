import React from 'react'
import { PageContainer, LandingHero, ContentList, Newsletter, Metadata } from '@components'
import { tagCase } from '@utils/format'

const Tag = ({ pageContext }) => {
  const { posts = [], tag } = pageContext
  return (
    <PageContainer>
      <Metadata titleTemplate={`${tagCase(tag)} · %s`} />
      <LandingHero
        backgroundImage={`https://picsum.photos/seed/${tag}/1024/768`}
        title={tagCase(tag)}
        type={'tag'}
      />
      <ContentList items={posts} />
      <Newsletter />
    </PageContainer>
  )
}

export default Tag
