import styled from 'styled-components'
import { Container, Row, Col } from 'react-grid-system'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Headline3, Paragraph2, Paragraph3, SecondaryCTAStyles } from '@components/Typography'
import { GatsbyImage } from 'gatsby-plugin-image'

export const ModuleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
`

export const ContentRow = styled(Row)`
  padding-left: 0 !important;
  padding-right: 0 !important;
`

export const ItemRow = styled(ContentRow)`
  padding: 2rem 0;
`

export const ContentCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding-left: 0rem !important;
    padding-right: 0rem !important;
  }
`

export const Headline = styled(Headline3)`
  margin: 0;
  line-height: 1.2;
  margin-top: 1rem;
  @media (min-width: 768px) {
    margin-top: 0;
  }
  &:hover {
    color: ${props => props.theme.primaryHeadingHover};
  }
`

export const Description = styled(Paragraph2)`
  margin-top: 1rem;
`

export const PostMetadata = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-bottom: 1rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const MetadataField = styled(Paragraph3)`
  font-weight: 300;
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  line-height: 1rem;
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
  color: ${props => props.theme.persianRed};
  font-weight: 400;
  padding-left: 0;

  &:hover {
    color: ${props => props.theme.primaryHeadingHover};
  }

  @media (min-width: 768px) {
    padding-left: 0.3rem;
  }
`

export const ImageCol = styled(Col)`
  @media (min-width: 768px) {
    padding-left: 0rem !important;
    padding-right: 0rem !important;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  width: 100%;
  @media (min-width: 768px) {
    padding-right: 3rem !important;
  }
`

export const Image = styled(GatsbyImage)`
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
`

export const LinkContainer = styled(AniLink)`
  text-decoration: none;
`

export const CardContainer = styled.div``

export const LoadMoreButton = styled.div`
  ${SecondaryCTAStyles}
  width: 100%;
  padding: 1rem 0;
  border: 1px solid ${props => props.theme.primaryHeading};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  &:hover {
    border: 1px solid ${props => props.theme.primaryHeadingHover};
    color: ${props => props.theme.primaryHeadingHover};
  }
`

export const ButtonCol = styled(Col)``
