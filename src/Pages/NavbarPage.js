import React from 'react'
import Navbar from '../FaqStyle/Navbar/Navbar'

const NavbarPage = () => {
    return (
        <div className='container'>
            <h2>Navbar</h2>
            <div className="container-fluid mb-5">
                <Navbar name='nav-1'>
                    <ul>
                        <li><a href="#">Cursos</a></li>
                        <li><a href="#">Se Profesor</a></li>
                        <li><a href="#">Contactanos</a></li>
                        <li><a href="#">Ingresa</a></li>
                    </ul>
                </Navbar>
            </div>
            <div className="container-fluid mb-5">
                <Navbar name='nav-2' className='bg-gray-900 color-white'>
                    <ul className='bg-gray-900'>
                        <li><a href="#" className='color-white'>Cursos</a></li>
                        <li><a href="#" className='color-white'>Se Profesor</a></li>
                        <li><a href="#" className='color-white'>Contactanos</a></li>
                        <li><a href="#" className='color-white'>Ingresa</a></li>
                    </ul>
                </Navbar>
            </div>
            <div className="container-fluid mt-5">
                <Navbar name='nav-3' className='navbar-shadow'>
                    <ul>
                        <li><a href="#">Cursos</a></li>
                        <li><a href="#">Se Profesor</a></li>
                        <li><a href="#">Contactanos</a></li>
                        <li><a href="#">Ingresa</a></li>
                    </ul>
                </Navbar>
            </div>
            <div className="container-fluid mt-5">
                <Navbar name='nav-4' className='navbar-shadow bg-blue'>
                    <ul className='bg-blue'>
                        <li><a href="#">Cursos</a></li>
                        <li><a href="#">Se Profesor</a></li>
                        <li><a href="#">Contactanos</a></li>
                        <li><a href="#">Ingresa</a></li>
                    </ul>
                </Navbar>
            </div>
        </div>
    )
}

export default NavbarPage
