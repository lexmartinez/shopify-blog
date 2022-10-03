import styled from 'styled-components'
import { Container, Row, Col } from 'react-grid-system'
import { Paragraph3, Paragraph1 } from '@components/Typography'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import LogoSvg from '@assets/shopping-bag.svg'
import MailSvg from '@assets/mail.svg'
import TwitterSvg from '@assets/twitter.svg'
import InstagramSvg from '@assets/instagram.svg'
import YoutubeSvg from '@assets/youtube.svg'

export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.footerBG}80;
  width: 100%;
  display: flex;
`

export const ModuleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0;
`

export const ContentCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
    align-items: center;
  }
`

export const FooterRow = styled(Row)`
  padding-left: 0 !important;
  padding-right: 0 !important;
`

export const FooterData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FooterField = styled(Paragraph3)`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`

export const Logo = styled(Paragraph1)`
  color: ${props => props.theme.woodland};
  margin: 0;
  display: flex;
  align-items: center;
`

export const FooterCTA = styled.a`
  cursor: pointer;
  margin-left: 2rem;
  color: ${props => props.theme.primaryHeading};

  &:hover {
    color: ${props => props.theme.primaryHeadingHover};
  }
`

export const LogoIcon = styled(LogoSvg)`
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.5rem;
`

export const TwitterIcon = styled(TwitterSvg)`
  width: 1rem;
  height: 1rem;
`

export const InstagramIcon = styled(InstagramSvg)`
  width: 1rem;
  height: 1rem;
`

export const MailIcon = styled(MailSvg)`
  width: 1rem;
  height: 1rem;
`

export const YoutubeIcon = styled(YoutubeSvg)`
  width: 1rem;
  height: 1rem;
`

export const LogoLink = styled(AniLink)`
  text-decoration: none;
`
