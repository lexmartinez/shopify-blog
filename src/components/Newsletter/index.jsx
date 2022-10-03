import React, { useState, useRef } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import {
  MainContainer,
  ModuleContainer,
  ContentRow,
  ContentCol,
  FormContainer,
  EmailInput,
  Headline,
  Description,
  Form,
  Button,
  CheckIcon,
  LoaderIcon,
} from './styles'

const Newsletter = () => {
  const emailRef = useRef(null)
  const [email, setEmail] = useState('')
  const [result, setResult] = useState()

  const handleSubmit = async e => {
    e.preventDefault()
    setResult({})
    const response = await addToMailchimp(email)
    setResult(response)
    setTimeout(() => {
      setResult()
      setEmail('')
      if (emailRef && emailRef.current) {
        emailRef.current.value = ''
      }
    }, 2000)
  }

  return (
    <MainContainer>
      <ModuleContainer>
        <ContentRow>
          <ContentCol offset={{ md: 2 }} md={8}>
            <Headline>{'¡Únete a nuestra newsletter!'}</Headline>
            <Description>
              {
                'Únete a nuestra comunidad y recibe notificaciones con los artículos y tutoriales más recientes en tu correo electrónico. Nada de spam, solo contenido relevante, lo prometemos.'
              }
            </Description>
            <Form onSubmit={handleSubmit}>
              <FormContainer>
                <EmailInput
                  ref={emailRef}
                  id={'outlined-email-input'}
                  label={'Email'}
                  type={'email'}
                  name={'email'}
                  autoComplete={'email'}
                  variant={'outlined'}
                  placeholder={'Correo Electrónico'}
                  onChange={e => setEmail(e.target.value)}
                />
                <Button
                  className={result?.result ? 'completed' : ''}
                  label={'Submit'}
                  type={'submit'}
                  disabled={!!result?.result || !email}
                >
                  {!result ? 'Unirse' : !!result?.result ? <CheckIcon /> : <LoaderIcon />}
                </Button>
              </FormContainer>
            </Form>
          </ContentCol>
        </ContentRow>
      </ModuleContainer>
    </MainContainer>
  )
}

export default Newsletter
