import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { contentSettings } from '@config'
import { tagCase } from '@utils/format'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

// import Share from '../Share'
import {
  ModuleContainer,
  ModuleRow,
  ImageCol,
  ContentCol,
  Image,
  Headline,
  Description,
  PostMetadata,
  MetadataField,
  LinkContainer,
  TagsMetadataField,
  Tag,
  PostParagraph,
  PostQuote,
  BlockImage,
  PostHeading,
  PostBulletedItem,
} from './styles'

const Post = props => {
  const { suffix } = contentSettings
  const image = getImage(props?.image)
  return (
    <ModuleContainer>
      <ModuleRow>
        <ContentCol xs={12}>
          <>
            <Headline>{props?.title}</Headline>
            <Description>{props?.description}</Description>
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
          </>
          {/*<Share title={props?.title} description={props?.description} />*/}
        </ContentCol>
      </ModuleRow>
      <ModuleRow>
        <ImageCol xs={12}>
          <Image image={image} />
        </ImageCol>
      </ModuleRow>
      <ModuleRow>
        <ContentCol xs={12} isBody={true}>
          {(props.content || []).map(block => {
            const { type, image: blockImage, language, value } = block
            if (type === 'paragraph' || type === 'bulleted_list_item') {
              const ContentComponent = type === 'paragraph' ? PostParagraph : PostBulletedItem
              return (
                <ContentComponent>
                  {(value || []).map(({ text, href, bold, code, italic }) => {
                    if (!!href) {
                      return (
                        <a href={href} target={'_blank'} rel={'noreferrer'}>
                          {text}
                        </a>
                      )
                    }
                    if (bold || code || italic) {
                      return (
                        <span className={bold ? 'bold' : code ? 'code' : 'italic'}>{text}</span>
                      )
                    }
                    return text
                  })}
                </ContentComponent>
              )
            }
            if (type === 'image') {
              const blockImg = getImage(blockImage)
              return <BlockImage image={blockImg} />
            }
            if (type === 'code') {
              return (
                <SyntaxHighlighter language={language} style={dark}>
                  {(value || []).map(({ text }) => text)}
                </SyntaxHighlighter>
              )
            }
            if (type === 'quote') {
              return <PostQuote>{(value || []).map(({ text }) => text)}</PostQuote>
            }
            if (type === 'heading_1' || type === 'heading_2' || type === 'heading_3') {
              return (
                <PostHeading
                  className={
                    type === 'heading_2' ? 'heading_2' : type === 'heading_3' ? 'heading_3' : ''
                  }
                >
                  {(value || []).map(({ text }) => text)}
                </PostHeading>
              )
            }
            return null
          })}
        </ContentCol>
      </ModuleRow>
    </ModuleContainer>
  )
}

export default Post
