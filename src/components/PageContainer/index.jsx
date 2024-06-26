import React from 'react'
import Footer from '@components/Footer'
import NavBar from '@components/NavBar'
import { Container, Body } from './styles'

const PageContainer = props => {
  return (
    <>
      <Body />
      <Container>
        <NavBar breadcrumbs={props.breadcrumbs || []} />
        {props?.children}
        <Footer />
      </Container>
    </>
  )
}

export default PageContainer
