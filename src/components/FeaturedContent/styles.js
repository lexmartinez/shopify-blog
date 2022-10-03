import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-grid-system'
import { Headline1, Paragraph1, Paragraph2 } from '@components/Typography'
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
  @media (min-width: 768px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
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
`

export const FeaturedLabel = styled(Paragraph2)`
  margin-top: 1.5rem;
  color: ${props => props.theme.woodland};
  font-weight: 500;
`

export const PostMetadata = styled.div`
  display: flex;
  flex-direction: column;

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
