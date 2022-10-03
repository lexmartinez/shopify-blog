import styled, { css } from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-grid-system'
import {
  Headline1,
  Paragraph1,
  Paragraph2,
  CodeSnippetStyles,
  Headline2,
  Paragraph1Styles,
} from '@components/Typography'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const LinkContainer = styled(AniLink)`
  text-decoration: none;
`

export const ModuleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 5rem;
  padding-top: 5rem;
`

export const Image = styled(GatsbyImage)`
  display: flex;
  height: 20rem;
  width: 100%;
  object-fit: cover;
  object-position: center center;

  @media (min-width: 768px) {
    height: 30rem;
  }
`

export const ModuleRow = styled(Row)`
  padding-left: 0 !important;
  padding-right: 0 !important;
`

export const ImageCol = styled(Col)`
  @media (min-width: 768px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`

export const ContentCol = styled(Col)`
  margin-top: ${props => (props.isBody ? '2rem' : '0')};
  @media (min-width: 768px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  pre {
    padding: 1.3rem !important;
    border-radius: 0.2rem;
    margin: 2rem 0;
  }
`

export const Headline = styled(Headline1)`
  margin: 0;
  margin-top: -0.7rem;
  line-height: 1.2;
  &:hover {
    color: ${props => props.theme.primaryHeadingHover};
  }
`

export const Description = styled(Paragraph1)`
  margin-top: 1rem;
  font-weight: 500;
`

export const FeaturedLabel = styled(Paragraph2)`
  margin-top: 1.5rem;
  color: ${props => props.theme.woodland};
  font-weight: 500;
`

export const PostMetadata = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const MetadataField = styled(Paragraph2)`
  font-weight: 300;
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  line-height: 1rem;

  span {
    text-transform: capitalize;
  }
`

export const TagsMetadataField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 0.5rem;

  @media (min-width: 768px) {
    justify-content: flex-end;
    padding-top: 0;
  }
`

export const Tag = styled(MetadataField)`
  padding: 0.3rem 0.5rem;
  color: ${props => props.theme.woodland};
  font-weight: 400;
  padding-left: 0;

  &:hover {
    color: ${props => props.theme.primaryHeadingHover};
  }

  @media (min-width: 768px) {
    padding-left: 0.3rem;
  }
`

const RichTextStyles = css`
  span {
    &.bold {
      font-weight: 400;
    }
    &.code {
      ${CodeSnippetStyles}
      font-size: 0.8rem;
      font-weight: 400;
      padding: 0.02rem 0.2rem;
      padding-bottom: 0.08rem;
      line-height: 0.9;
      border-radius: 0.2rem;
      color: ${props => props.theme.white};
      background-color: ${props => props.theme.abbey}BF;
    }
    &.italic {
      font-style: italic;
    }
  }
  a {
    color: ${props => props.theme.woodland};
    &:hover {
      color: ${props => props.theme.primaryHeadingHover};
    }
  }
`

export const PostParagraph = styled.p`
  ${Paragraph1Styles}
  ${RichTextStyles}
`

export const PostBulletedItem = styled.li`
  ${Paragraph1Styles}
  ${RichTextStyles}
  margin-bottom: 0.5rem;
`

export const BlockImage = styled(GatsbyImage)`
  display: flex;
  object-fit: cover;
  object-position: center center;
  margin: 2rem 0;
`

export const PostQuote = styled(PostParagraph)`
  border-left: 0.2rem solid ${props => props.theme.primaryParagraph}BF;
  padding-left: 0.5rem;
`

export const PostHeading = styled(Headline2)`
  &.heading_2 {
    font-size: 1.8rem;
    line-height: 1.8rem;
  }
  &.heading_3 {
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
`
