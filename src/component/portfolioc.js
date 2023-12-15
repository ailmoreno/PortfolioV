import './portfoliostyles.css';
import PortfolioData from './PortfolioData.js';
import Trip1 from '../component/disneysea.jpg';
import { Link } from 'react-router-dom';
import Design1 from '../component/DESIGNCO.png';

const portfolioc = () => {
    return(
        <>
        <div className='portfolio'>
            <h1>Portfolio Projects</h1>

            <div className='tripcard'>
                <Link to= '/Design' style={{ textDecoration: 'none' }}>
                    <PortfolioData
                        image = {Design1}
                        heading = 'Design-a-Thon'
                        text = 'Three-day competition hosted by Rice University for all college students.'
                    />
                </Link>

                <Link to= '/Petco' style={{ textDecoration: 'none' }}>
                    <PortfolioData
                    image = {Trip1}
                    heading = 'PetCo'
                    text = 'A personal project re-design of the current PetCo app.'
                    />
                </Link>
            </div>

            <div className='tripcard2'>
                <Link to= '/PATH' style={{ textDecoration: 'none' }}>
                    <PortfolioData
                        image = {Trip1}
                        heading = 'PATH'
                        text = 'A six-week apprenticeship working with a non-profit organization targeting homelessness.'
                    />
                </Link> 

                <Link to= '/Business' style={{ textDecoration: 'none' }}>
                    <PortfolioData
                        image = {Trip1}
                        heading = 'Business Startups'
                        text = 'Projects with my current employment, and other small businesses that I have worked with.'
                    />
                </Link>
            </div>
            
        </div>
        
        </>
    )
}

export default portfolioc;

/*<div className='tripcard'>
                <div className='t-card'>
                    <div className='Design-a-thon'>
                        <img src ={port1} alt = "designimg" className='picture-container'/>
                        <h4>Hello</h4>
                        <p>Discover the world of my projects</p>
                    </div>

                    <div className='PATH'>
                        <img src ={port1} alt = "pathimg" className='picture-container'/>
                        <h4>Hello</h4>
                        <p>Discover the world of my projects</p>
                    </div>

                    <div className='PETCO'>
                        <img src ={port1} alt = "petimg" className='picture-container'/>
                        <h4>Hello</h4>
                        <p>Discover the world of my projects</p>
                    </div>
                </div>

            </div>*/