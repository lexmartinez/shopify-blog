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
  ListContainer,
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
              ? `Resultados ${items.length} de ${(props?.items || []).length}`
              : undefined
          }
        />
      )}
      <ListContainer>
        {(items || []).map((item, index) => {
          const image = getImage(item?.image)
          return (
            <CardContainer key={index}>
              <ItemRow>
                <ImageCol xs={12} md={6} lg={3}>
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
                    <MetadataField>
                      <span>{item?.date}</span>
                      {` - ${item?.time} ${suffix[item?.type]}`}
                    </MetadataField>
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
      </ListContainer>
      {showLoadMore && (
        <ItemRow>
          <ButtonCol>
            <LoadMoreButton onClick={onLoadMore}>Ver m&aacute;s</LoadMoreButton>
          </ButtonCol>
        </ItemRow>
      )}
    </ModuleContainer>
  )
}

export default ContentList
