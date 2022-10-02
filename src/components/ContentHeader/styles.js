import styled from 'styled-components'
import { Row, Col } from 'react-grid-system'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Headline2, CTAStyles } from '@components/Typography'

export const ContentCol = styled(Col)`
  @media (min-width: 768px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`

export const CTACol = styled(ContentCol)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const TitleRow = styled(Row)`
  padding-left: 0 !important;
  padding-right: 0 !important;
  border-top: 0.2px solid ${({ theme }) => theme.primaryParagraph}6F;
  border-bottom: 0.2px solid ${({ theme }) => theme.primaryParagraph}6F;
  margin-bottom: ${({ bottom }) => bottom || '0px'};
  margin-top: ${({ top }) => top || '0px'};
`

export const Headline = styled(Headline2)`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`

export const HeadingCTA = styled(AniLink)`
  ${CTAStyles}
`

export const HeadingSize = styled.p`
  ${CTAStyles}
`
