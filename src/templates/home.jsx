import React from 'react'
import take from 'lodash/take'
import {
  PageContainer,
  // LandingHero,
  FeaturedContent,
  // ContentGrid,
  ContentList,
  Newsletter,
  Metadata,
} from '@components'

const Home = ({ pageContext }) => {
  const { posts = [], siteTitle, shortDescription } = pageContext
  const featured =
    posts.find(({ featured }) => featured) || posts[Math.floor(Math.random() * posts.length)]
  return (
    <PageContainer>
      <Metadata titleTemplate={`${siteTitle} · ${shortDescription}`} />
      {/*<LandingHero
        backgroundImage={'/shopping-cart.jpg'}
        title={'The red knot'}
        subtitle={'A place to discover interesting stuff, one knot at time'}
        code={true}
        place={'Photo by Nataliya Vaitkevich'}
      />*/}
      <br />
      <FeaturedContent {...featured} />
      {/* TODO: WHEN CONTENT IS ENOUGTH ENABLE CONTENT GRID WITH SOME SELECTION] */}
      {/*<ContentGrid title={"Today's trending"} items={posts} />*/}
      {posts.length > 1 && (
        <ContentList
          title={'Artículos & Tutoriales'}
          target={'/articles/all'}
          items={take(
            posts.filter(({ featured }) => !featured),
            4
          )}
        />
      )}
      <Newsletter />
    </PageContainer>
  )
}

export default Home
