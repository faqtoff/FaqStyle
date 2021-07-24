import React from 'react'
import AlertPage from './AlertPage'
import CardPage from './CardPage'
import FaqFooter from '../FaqStyle/FaqFooter/FaqFooter'
import FormPage from './FormPage'
import ModalPage from './ModalPage'
import NavbarAside from '../FaqStyle/Navbar/NavbarAside'
import NavbarPage from './NavbarPage'
import ProgresBarPage from './ProgresBarPage'
import ButtonPage from './ButtonPage'


import home from '../assets/icons/home.svg'
import componentes from "../assets/icons/stacked-files.svg"

const DocsPage = () => {
    return (
        <>
            
    <div className="full-container">
      <NavbarAside> 
        <span className='m-2'>FaqStyle</span>
        <a className='m-2' href="#home"><img src={home} alt="Inicio" />Inicio</a>
        <a href="#works"><img src={componentes} alt="works" />Formularios</a>
        <a href="#works"><img src={componentes} alt="works" />Componentes</a>
        <ul className='mt-0'>
          <li className='m-2'><a href="#works">Alerts </a></li>
          <li className='m-2'><a href="#works">Buttons</a></li>
          <li className='m-2'><a href="#works">Buttons Group</a></li>
          <li className='m-2'><a href="#works">Card</a></li>
          <li className='m-2'><a href="#works">Carousel</a></li>
          <li className='m-2'><a href="#works">Dropdowns</a></li>
          <li className='m-2'><a href="#works">List Group</a></li>
          <li className='m-2'><a href="#works">Modal</a></li>
          <li className='m-2'><a href="#works">Navbar</a></li>
          <li className='m-2'><a href="#works">Progress</a></li>
        </ul>
      </NavbarAside>
      <div className="main-container">

        <FormPage />
        <AlertPage />
        <ButtonPage />
        <CardPage />
        <ModalPage />
        <NavbarPage />
        <ProgresBarPage />
        <FaqFooter />
      </div>
    </div>
        </>
    )
}

export default DocsPage
