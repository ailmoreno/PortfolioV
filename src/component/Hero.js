/*import React from 'react';
import ReactDOM from 'react-dom';*/
import './HeroStyles.css';
import HeroSect from "./onsenJapan.png";

function Hero() {
    return (
        <>
        <div className='hero'>
            <img src ={HeroSect} alt = "heroimg" className='hero-container'/>
            <div className='hero-text'>
                <h1>Hi there</h1>
                <p>
                    I'm Aileen, a full-time student with experience in Marketing and Finance with a passion in front-end and back-end programming.
                    Outside of work, I enjoy mystery shows, reading, and exploring new cafes.
                </p>

                <p>
                    This page is currently under construction.
                </p>
            </div>
        </div>

        </>
    )
}

export default Hero;