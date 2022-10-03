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
  YoutubeIcon,
  MailIcon,
  InstagramIcon,
  LogoLink,
} from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <ModuleContainer>
        <FooterRow>
          <ContentCol>
            <LogoLink to={'/'} cover bg={colors.woodland} direction={'right'}>
              <Logo>
                <LogoIcon />
                Guia<strong>Shopify</strong>
              </Logo>
            </LogoLink>
            <FooterData>
              <Hidden xs sm>
                <FooterField>
                  {'© Copyright 2022 '}
                  <strong>{'guiashopify.co'}</strong>
                  {' - Todos los derechos reservados'}
                </FooterField>
              </Hidden>
              <FooterCTA href={'mailto:hola@guiashopify.co'}>
                <MailIcon />
              </FooterCTA>
              <FooterCTA
                href={'https://www.youtube.com/c/GuiaShopify'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <YoutubeIcon />
              </FooterCTA>
              <FooterCTA
                href={'https://twitter.com/guiashopify'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <TwitterIcon />
              </FooterCTA>
              <FooterCTA
                href={'https://instagram.com/guiashopify'}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <InstagramIcon />
              </FooterCTA>
            </FooterData>
          </ContentCol>
        </FooterRow>
      </ModuleContainer>
    </FooterContainer>
  )
}

export default Footer
