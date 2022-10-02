import React from 'react'
import take from 'lodash/take'
import {
  PageContainer,
  LandingHero,
  FeaturedContent,
  // ContentGrid,
  ContentList,
  Newsletter,
  Metadata,
} from '@components'

const Home = ({ pageContext }) => {
  const { posts = [] } = pageContext
  const featured = posts[Math.floor(Math.random() * posts.length)]
  return (
    <PageContainer>
      <Metadata />
      <LandingHero
        backgroundImage={'/caba-2018.JPG'}
        title={'The red knot'}
        subtitle={'A place to discover interesting stuff, one knot at time'}
        code={true}
        place={'M, Buenos Aires, Argentina - 2018'}
      />
      <FeaturedContent {...featured} />
      {/* TODO: WHEN CONTENT IS ENOUGTH ENABLE CONTENT GRID WITH SOME SELECTION] */}
      {/*<ContentGrid title={"Today's trending"} items={posts} />*/}
      <ContentList title={'Latest Articles'} target={'/articles/all'} items={take(posts, 3)} />
      <Newsletter />
    </PageContainer>
  )
}

export default Home
