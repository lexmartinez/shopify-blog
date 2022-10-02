import React, { useState } from 'react'
import slice from 'lodash/slice'
import { getImage } from 'gatsby-plugin-image'
import ContentHeader from '@components/ContentHeader'
import { contentSettings } from '@config'
import { tagCase } from '@utils/format'
import {
  ModuleContainer,
  ItemRow,
  ImageCol,
  ContentCol,
  Headline,
  Description,
  PostMetadata,
  MetadataField,
  ImageContainer,
  Image,
  LinkContainer,
  CardContainer,
  TagsMetadataField,
  LoadMoreButton,
  ButtonCol,
  Tag,
} from './styles'

const PER_PAGE_ITEMS = 4

const ContentList = props => {
  const { suffix } = contentSettings
  const [items, setItems] = useState(slice(props?.items, 0, PER_PAGE_ITEMS))

  const onLoadMore = () => {
    const newLength = items.length + PER_PAGE_ITEMS
    setItems(slice(props?.items, 0, newLength))
  }

  const showLoadMore =
    (props?.items || []).length > PER_PAGE_ITEMS && (props?.items || []).length > items.length

  return (
    <ModuleContainer>
      {!!props?.title && (
        <ContentHeader
          title={props?.title}
          target={props?.target}
          bottom={'1rem'}
          top={props.searchMode ? '3rem' : '0'}
          results={
            props?.searchMode
              ? `Showing ${items.length} results of ${(props?.items || []).length}`
              : undefined
          }
        />
      )}
      {(items || []).map((item, index) => {
        const image = getImage(item?.image)
        return (
          <CardContainer key={index}>
            <ItemRow>
              <ImageCol xs={12} md={4} lg={2} offset={{ lg: 0.5 }}>
                <LinkContainer to={item?.url} fade>
                  <ImageContainer>
                    <Image image={image} />
                  </ImageContainer>
                </LinkContainer>
              </ImageCol>
              <ContentCol xs={12} md={7.5} lg={8} offset={{ md: 0.5 }}>
                <LinkContainer to={item?.url} fade>
                  <Headline>{item?.title}</Headline>
                  <Description>{item?.description}</Description>
                </LinkContainer>
                <PostMetadata>
                  <MetadataField>{`${item?.date} - ${item?.time} ${
                    suffix[item?.type]
                  }`}</MetadataField>
                  <TagsMetadataField>
                    {(item?.tags || []).map((tag, index) => {
                      return (
                        <LinkContainer to={`/tags/${tag}`} key={index}>
                          <Tag>{`#${tagCase(tag)}`}</Tag>
                        </LinkContainer>
                      )
                    })}
                  </TagsMetadataField>
                </PostMetadata>
              </ContentCol>
            </ItemRow>
          </CardContainer>
        )
      })}
      {showLoadMore && (
        <ItemRow>
          <ButtonCol>
            <LoadMoreButton onClick={onLoadMore}>Show more</LoadMoreButton>
          </ButtonCol>
        </ItemRow>
      )}
    </ModuleContainer>
  )
}

export default ContentList
