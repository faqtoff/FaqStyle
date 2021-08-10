import React from 'react'
import AlertPage from './AlertPage'
import CardPage from './CardPage'
import FaqFooter from '../FaqStyle/FaqFooter/FaqFooter'
import FormPage from './FormPage'
import ModalPage from './ModalPage'
import NavbarPage from './NavbarPage'
import ProgresBarPage from './ProgresBarPage'
import ButtonPage from './ButtonPage'


const DocsPage = () => {

  return (
    <div className="container">
      <AlertPage />
      <FormPage />
      <ButtonPage />
      <CardPage />
      <ModalPage />
      <NavbarPage />
      <ProgresBarPage />
      <FaqFooter />
    </div>
  )
}

export default DocsPage
