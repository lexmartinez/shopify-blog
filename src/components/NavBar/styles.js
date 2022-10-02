import styled, { keyframes } from 'styled-components'
import { Container, Row, Col } from 'react-grid-system'
import { Paragraph3, Paragraph1, Headline3, CTAStyles } from '@components/Typography'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import LogoSVG from '@assets/knot.svg'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const NavBarContainer = styled.div`
  background-color: ${({ theme }) => theme.footerBG}${({ solid }) => (solid ? '' : 'F2')};
  width: 100%;
  display: flex;
  position: fixed;
  transition: 1s;
  top: 0;
  left: 0;
  z-index: 999;
`

export const ModuleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 2rem !important;

  @media (min-width: 768px) {
    padding: 1rem 5rem !important;
  }
`

export const ContentCol = styled(Col)`
  display: flex;
  flex-direction: row;
  padding-left: 0 !important;
  padding-right: 0 !important;
  align-items: center;
  justify-content: space-between;
`

export const NavBarRow = styled(Row)`
  padding-left: 0 !important;
  padding-right: 0 !important;
`

export const NavBarData = styled.div`
  display: flex;
  flex-direction: row;
`

export const NavBarField = styled(Paragraph3)``

export const Logo = styled(Paragraph1)`
  color: ${props => props.theme.persianRed};
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 0;
  display: flex;
  align-items: center;
`

export const NavBarCTA = styled(Paragraph3)`
  cursor: pointer;
  margin-left: 2rem;

  &:hover {
    color: ${props => props.theme.persianRed};
  }
`

export const SearchModule = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  animation: 0.5s ${fadeIn} ease-out;
  background-color: ${props => props.theme.primaryBG};
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoLink = styled(AniLink)`
  text-decoration: none;
`

export const Headline = styled(Headline3)``

export const SearchCol = styled(Col)`
  display: flex;
  flex-direction: column;
  padding-left: 0 !important;
  padding-right: 0 !important;
`

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 0.2px solid ${({ theme }) => theme.primaryParagraph}6F;
`

export const SearchInput = styled.input`
  ${CTAStyles}
  width: 100%;
  border: 0;
  padding: 1rem;
  background: transparent;
`

export const LogoIcon = styled(LogoSVG)`
  width: 2.2rem;
  height: 2.2rem;
  margin-right: 0.5rem;
`
