import React from 'react'
import styled from 'styled-components'
import lowerCase from 'lodash/lowerCase'
import includes from 'lodash/includes'
import isEmpty from 'lodash/isEmpty'
import { tagCase } from '@utils/format'
import { PageContainer, ContentList, ContentGrid, Newsletter, Metadata } from '@components'
import { Headline2 } from '@components/Typography'

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`

const Search = props => {
  const { posts = [] } = props?.pageContext
  const params = new URLSearchParams(props?.location?.search)
  const term = params.get('q')
  const shuffled = posts.sort(() => 0.5 - Math.random())

  const results = posts.filter(({ title, description, tags }) => {
    return (
      includes(lowerCase(title), lowerCase(term)) ||
      includes(lowerCase(description), lowerCase(term)) ||
      includes(
        tags.map(el => lowerCase(tagCase(el))),
        lowerCase(term)
      )
    )
  })

  return (
    <PageContainer>
      <Metadata titleTemplate={`Results for ${term} · %s`} />
      {!isEmpty(results) ? (
        <ContentList items={results} title={`Results for ${term}`} searchMode={true} />
      ) : (
        <>
          <EmptyState>
            <Headline2>{`No results found for ${term}`}</Headline2>
          </EmptyState>
          <ContentGrid
            title={'But this may interest you ...'}
            target={'/articles/all'}
            items={shuffled.slice(0, 4)}
          />
        </>
      )}
      <Newsletter />
    </PageContainer>
  )
}

export default Search
