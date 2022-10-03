import styled, { css } from 'styled-components'

export const Headline1 = styled.h1`
  font-family: 'Merriweather', serif;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 2.5rem;
  color: ${props => props.theme.primaryHeading};

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 3rem;
  }
`

export const Headline2 = styled.h2`
  font-family: 'Merriweather', serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2rem;
  color: ${props => props.theme.primaryHeading};
`

export const Headline3 = styled.h3`
  font-family: 'Merriweather', serif;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.8rem;
  color: ${props => props.theme.primaryHeading};
`

export const Paragraph1Styles = css`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 300;
  color: ${props => props.theme.primaryParagraph};
`

export const Paragraph1 = styled.p`
  ${Paragraph1Styles}
`

export const CodeParagraph1 = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 300;
  color: ${props => props.theme.primaryParagraph};
`

export const Paragraph2Styles = css`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 300;
  color: ${props => props.theme.secondaryParagraph};
`

export const Paragraph2 = styled.p`
  ${Paragraph2Styles}
`

export const Paragraph3 = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.8rem;
  line-height: 1;
  font-weight: 300;
  color: ${props => props.theme.secondaryParagraph};
`

export const CodeParagraph3 = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 300;
  color: ${props => props.theme.secondaryParagraph};
`

export const InputStyles = css`
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  line-height: 1;
  font-weight: 400;
  color: ${props => props.theme.secondaryParagraph};
`

export const CTAStyles = css`
  font-family: 'Merriweather', serif;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 200;
  color: ${props => props.theme.primaryParagraph};

  &:hover {
    color: ${props => props.theme.secondaryParagraph};
  }
`

export const SecondaryCTAStyles = css`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 300;
  color: ${props => props.theme.primaryParagraph};

  &:hover {
    color: ${props => props.theme.secondaryParagraph};
  }
`

export const Headline4 = styled.h4`
  font-family: 'Merriweather', serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.4rem;
  color: ${props => props.theme.primaryHeading};
`

export const CodeSnippetStyles = css`
  font-family: 'Roboto Mono', monospace;
`
