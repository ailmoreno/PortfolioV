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
                    I'm Aileen, a full-time Marketing Coordinator with a passion in UI/UX design and front-end development.
                    I specialize in marketing, illustrations, content creation, and UI/UX work. I'm also well-versed in a variety of design softwares and programming languages. 

                    This simple website has been created using React.Js with the languages HTML, CSS, and JavaScript.
                </p>

                <p>
                    Outside of work, I enjoy mystery shows, reading, and exploring new cafes.
                </p>
            </div>
        </div>

        </>
    )
}

/*const rootElement = document.getElementById("root");
ReactDOM.render(<Hero />, rootElement);

                <p> 
                    I'm Aileen, a full-time Marketing Coordinator with a passion in UI/UX design and front-end development.

                    Outside of work, I enjoy mystery shows, reading, and exploring new cafes.
                    This simple website has been created by me using React.Js with the languages HTML, CSS, and JavaScript.
                </p>*/
export default Hero;