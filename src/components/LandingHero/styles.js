import styled from 'styled-components'
import { Container, Row, Col } from 'react-grid-system'
import { Headline1, CodeParagraph1, Paragraph1, CodeParagraph3 } from '@components/Typography'

export const ModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  background-image: url('${props => props.backgroundImage}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: ${props => (props.type === 'main' ? 'calc(100vh - 4rem)' : '100vh')};
  margin-bottom: 5rem;
  @media (min-width: 768px) {
    min-height: ${props => (props.type === 'main' ? 'calc(100vh - 4rem)' : '40vh')};
  }
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.bunker}${props => (props.type === 'main' ? '80' : 'CC')};
`

export const InnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-top: 6rem !important;
  width: 100%;
  z-index: 10;
  @media (min-width: 768px) {
    padding-bottom: 6rem !important;
  }
`

export const HeroRow = styled(Row)`
  height: 100%;
  width: 100%;
`

export const HeroCol = styled(Col)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.type === 'main' ? 'flex-end' : 'center')};
  padding-bottom: ${props => (props.type === 'main' ? '3rem' : '0rem')};
`

export const Headline = styled(Headline1)`
  margin: 0;
  font-size: 4rem;
  line-height: 4rem;
  color: ${props => props.theme.white};
  @media (min-width: 768px) {
    text-align: ${props => (props.type === 'main' ? 'left' : 'center')};
  }
`

export const SubHeadline = styled(Paragraph1)`
  margin-top: 1rem;
  color: ${props => props.theme.white};
  @media (min-width: 768px) {
    max-width: ${props => (props.type === 'main' ? '70%' : '100%')};
    text-align: ${props => (props.type === 'main' ? 'left' : 'center')};
  }
`

export const CodeSubHeadline = styled(CodeParagraph1)`
  margin-top: 1rem;
  color: ${props => props.theme.white};
  @media (min-width: 768px) {
    max-width: ${props => (props.type === 'main' ? '70%' : '100%')};
    text-align: ${props => (props.type === 'main' ? 'left' : 'center')};
  }
`

export const Placeline = styled(CodeParagraph3)`
  text-align: 'right';
  color: ${props => props.theme.white};
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  opacity: 0.5;
  @media (min-width: 768px) {
    bottom: 2rem;
    right: 0;
  }
`
