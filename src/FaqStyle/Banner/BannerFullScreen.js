import React from 'react'
import './BannerFullScreen.css'
import ScrollIcon from './assets/scroll.png'

const BannerFullScreen = ({children, className, backGroundImg}) => {
    console.log(backGroundImg)
    return (
        <header className={"fs-banner-container " + className}>
            <div className="fs-background-image">
                <div className="fs-banner-info">
                    {children}
                </div>
            </div>
            <a className="btn-scroll" href="#main">
                <span>Scroll Down</span>
                <img className="scroll-icon" src={ScrollIcon} alt="Scroll" />
            </a>
        </header>
    )
}

export default BannerFullScreen
