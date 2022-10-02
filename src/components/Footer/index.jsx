import React from 'react'
import { Hidden } from 'react-grid-system'
import colors from '@theme/colors'
import {
  ModuleContainer,
  Logo,
  FooterRow,
  ContentCol,
  FooterData,
  FooterField,
  FooterCTA,
  FooterContainer,
  LogoIcon,
  TwitterIcon,
  GithubIcon,
  MailIcon,
  LogoLink,
} from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <ModuleContainer>
        <FooterRow>
          <ContentCol>
            <LogoLink to={'/'} cover bg={colors.persianRed} direction={'right'}>
              <Logo>
                <LogoIcon />
                Red<strong>Knot</strong>
              </Logo>
            </LogoLink>
            <FooterData>
              <Hidden xs sm>
                <FooterField>
                  {'© Copyright 2021 '}
                  <strong>{'redknot.io'}</strong>
                  {' by Lex Martinez - All rights reserved'}
                </FooterField>
              </Hidden>
              <FooterCTA href={'mailto:contact@redknot.io'}>
                <MailIcon />
              </FooterCTA>
              <FooterCTA href={'https://twitter.com/lex0316'} target={'_blank'} rel={'noreferrer'}>
                <TwitterIcon />
              </FooterCTA>
              <FooterCTA
                href={'https://github.com/lexmartinez'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <GithubIcon />
              </FooterCTA>
            </FooterData>
          </ContentCol>
        </FooterRow>
      </ModuleContainer>
    </FooterContainer>
  )
}

export default Footer
