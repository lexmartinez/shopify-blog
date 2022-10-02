import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.primaryBG};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
`

export const Body = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    padding-top: 4.5rem;
    background-color: ${props => props.theme.primaryBG};
  }

  .slick-slide > div {
    padding: 0rem;
    @media (min-width: 768px) {
      padding: 0 1rem;
    }
  }

  *:focus {
    outline: none;
  }
`
