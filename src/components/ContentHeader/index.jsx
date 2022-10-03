import React from 'react'
import { Hidden } from 'react-grid-system'
import colors from '@theme/colors'
import { Headline, TitleRow, ContentCol, CTACol, HeadingCTA, HeadingSize } from './styles'

const ContentHeader = props => {
  return (
    <TitleRow bottom={props?.bottom} top={props?.top}>
      <ContentCol md={10} xs={12}>
        <Headline>{props?.title}</Headline>
      </ContentCol>
      {!!props?.target && !props?.results && (
        <Hidden xs sm>
          <CTACol md={2}>
            <HeadingCTA cover to={props?.target} bg={colors.woodland}>
              Ver todos
            </HeadingCTA>
          </CTACol>
        </Hidden>
      )}
      {!!props?.results && (
        <Hidden xs sm>
          <CTACol md={2}>
            <HeadingSize>{props?.results}</HeadingSize>
          </CTACol>
        </Hidden>
      )}
    </TitleRow>
  )
}

export default ContentHeader
