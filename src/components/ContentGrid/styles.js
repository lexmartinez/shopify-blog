import styled from 'styled-components'
import { Container, Row, Col } from 'react-grid-system'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Headline4, Paragraph3, CTAStyles } from '@components/Typography'
import LeftArrow from '@assets/arrow-left.svg'

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

export const ContentCol = styled(Col)`
  @media (min-width: 768px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`

export const Headline = styled(Headline4)`
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

export const PostMetadata = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`

export const TagMetadata = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-top: 0.5rem;
`

export const MetadataField = styled(Paragraph3)`
  font-weight: 300;
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  line-height: 1rem;

  span {
    text-transform: capitalize;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    padding-right: 3rem !important;
  }
`

export const Image = styled(GatsbyImage)`
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    max-height: 30vh;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-right: 2rem;
`

export const LinkContainer = styled(AniLink)`
  text-decoration: none;
`

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin: 0 1rem;
    margin-top: 1.5rem;
  }
`

export const PaginationButton = styled.div`
  ${CTAStyles}
  cursor: pointer;
  font-size: 0.85rem;
  line-height: 1.2;
  &:hover {
    color: ${props => props.theme.primaryHeadingHover};
  }
  &.left {
    margin-right: 1rem;
  }
  &.right {
    margin-left: 1rem;
  }
`

export const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);
`

export const TagsMetadataField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const Tag = styled(MetadataField)`
  padding: 0.3rem 0.5rem;
  padding-left: 0;
  color: ${props => props.theme.woodland};
  font-weight: 400;

  &:hover {
    color: ${props => props.theme.primaryHeadingHover};
  }
`
