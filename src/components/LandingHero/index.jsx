import React from 'react'
import {
  InnerContainer,
  ModuleContainer,
  CodeSubHeadline,
  Overlay,
  HeroRow,
  HeroCol,
  Headline,
  SubHeadline,
  Placeline,
} from './styles'

const LandingHero = props => {
  return (
    <ModuleContainer backgroundImage={props?.backgroundImage} type={props?.type || 'main'}>
      <Overlay>
        <InnerContainer>
          <HeroRow>
            <HeroCol xs={12} type={props?.type || 'main'}>
              <Headline type={props?.type || 'main'}>{props?.title}</Headline>
              {props?.subtitle && !props.code && (
                <SubHeadline type={props?.type || 'main'}>{props?.subtitle}</SubHeadline>
              )}
              {props?.subtitle && !!props.code && (
                <CodeSubHeadline type={props?.type || 'main'}>{props?.subtitle}</CodeSubHeadline>
              )}
            </HeroCol>
            {props?.place && <Placeline>{props?.place}</Placeline>}
          </HeroRow>
        </InnerContainer>
      </Overlay>
    </ModuleContainer>
  )
}

export default LandingHero
