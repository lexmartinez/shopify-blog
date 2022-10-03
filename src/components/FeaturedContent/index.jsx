import React from 'react'
import colors from '@theme/colors'
import { getImage } from 'gatsby-plugin-image'
import { contentSettings } from '@config'
import { tagCase } from '@utils/format'
import {
  ModuleContainer,
  ModuleRow,
  ImageCol,
  ContentCol,
  Image,
  Headline,
  Description,
  FeaturedLabel,
  PostMetadata,
  MetadataField,
  LinkContainer,
  TagsMetadataField,
  Tag,
} from './styles'

const FeaturedContent = props => {
  const { suffix } = contentSettings
  const image = getImage(props?.image)
  return (
    <ModuleContainer>
      <ModuleRow>
        <ImageCol xs={12}>
          <LinkContainer cover to={props?.url} bg={colors.woodland}>
            <Image image={image} />
          </LinkContainer>
        </ImageCol>
      </ModuleRow>
      <ModuleRow>
        <ContentCol xs={12}>
          <FeaturedLabel>Artículo Destacado</FeaturedLabel>
          <LinkContainer cover to={props?.url} bg={colors.woodland}>
            <Headline>{props?.title}</Headline>
            <Description>{props?.description}</Description>
          </LinkContainer>
          <PostMetadata>
            <MetadataField>
              <span>{props?.date}</span>
              {` - ${props?.time} ${suffix[props?.type]}`}
            </MetadataField>
            <TagsMetadataField>
              {(props?.tags || []).map((tag, index) => {
                return (
                  <LinkContainer to={`/tags/${tag}`} key={index}>
                    <Tag>{`#${tagCase(tag)}`}</Tag>
                  </LinkContainer>
                )
              })}
            </TagsMetadataField>
          </PostMetadata>
        </ContentCol>
      </ModuleRow>
    </ModuleContainer>
  )
}

export default FeaturedContent
