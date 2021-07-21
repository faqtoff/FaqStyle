import React from 'react'
import './Navbar.css'
import logo from './assets/home.svg'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="Icono" className="logo" />
                <ul className="nav-list">
                    <li className="nav-item">Cursos</li>
                    <li className="nav-item">Se Profesor</li>
                    <li className="nav-item">Contactanos</li>
                    <li className="nav-item">Ingresa</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
