import React from 'react'
import { PageContainer, LandingHero, ContentList, Newsletter, Metadata } from '@components'
import { tagCase } from '@utils/format'

const Tag = ({ pageContext }) => {
  const { posts = [], tag, title, siteTitle } = pageContext
  return (
    <PageContainer breadcrumbs={title ? [{ label: title }] : []}>
      <Metadata titleTemplate={`${title || tagCase(tag)} · %s · ${siteTitle}`} />
      <LandingHero
        backgroundImage={`https://picsum.photos/seed/${tag}/1024/768`}
        title={title || tagCase(tag)}
        type={'tag'}
      />
      <ContentList items={posts} />
      <Newsletter />
    </PageContainer>
  )
}

export default Tag
