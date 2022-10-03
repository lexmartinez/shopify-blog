import styled, { keyframes } from 'styled-components'
import { Container, Row, Col } from 'react-grid-system'
import { Headline3, Paragraph2, InputStyles, SecondaryCTAStyles } from '@components/Typography'
import CheckSvg from '@assets/check.svg'
import LoaderSvg from '@assets/loader.svg'
import colors from '@theme/colors'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const rotating = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
`

export const ModuleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem 0;
  border-top: 0.2px solid ${({ theme }) => theme.primaryParagraph}6F;
  border-bottom: 0.2px solid ${({ theme }) => theme.primaryParagraph}6F;
`

export const ContentCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`

export const ContentRow = styled(Row)`
  padding-left: 0 !important;
  padding-right: 0 !important;
`

export const Headline = styled(Headline3)`
  margin: 0;
  line-height: 1.2;
  margin-top: 1rem;
  text-align: left;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`

export const Description = styled(Paragraph2)`
  margin-top: 1rem;
  margin-bottom: 3rem;
  text-align: left;
`

export const EmailInput = styled.input`
  ${InputStyles}
  padding: 1rem;
  font-weight: 100;
  font-size: 0.9rem;
  border: 1px solid ${props => props.theme.secondaryParagraph}6F;
  flex: 1;
  flex-grow: 1;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Form = styled.form`
  width: 100%;
  @media (min-width: 768px) {
    width: 90%;
  }
`

export const Button = styled.button`
  ${SecondaryCTAStyles}
  font-weight: 400;
  padding: 1rem 2rem;
  border: 0px solid ${colors.woodland};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background-color: ${colors.woodland};
  border-radius: 2px;
  color: ${props => props.theme.white};
  transition: all 0.25s ease;

  &:hover {
    background-color: ${colors.woodland}E6;
    color: ${props => props.theme.white};
  }
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin-left: 1rem;
    margin-top: 0;
  }

  &.completed {
    background-color: ${colors.sushi};
    border: 0px solid ${colors.sushi};
    color: ${colors.woodland};
    animation: 1s ${fadeIn} ease-out;
  }
`

export const CheckIcon = styled(CheckSvg)`
  width: 1.5rem;
  height: 1.5rem;
`

export const LoaderIcon = styled(LoaderSvg)`
  width: 1.5rem;
  height: 1.5rem;
  animation: 1s ${rotating} ease-out;
`
