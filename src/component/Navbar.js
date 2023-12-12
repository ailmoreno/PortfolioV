import { Component } from 'react';
/*import { MenuItems } from './MenuItems';*/
import './Navbar.css';
import reactLogo from './LogoDesign.png';


class Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({ clicked:!this.state.clicked})
    }
    render () {
        return(
            <nav className='NavbarItems'>
                <img src ={reactLogo} alt = "logo" className='navbar-logo'/>

                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' :'nav-menu' }>
                    <li>
                        <a className='nav-home' href="/PortfolioV/">
                        <i className="fa-solid fa-house"></i>
                        Home</a>
                    </li>
                </ul>
            </nav>
        );
    };
};

export default Navbar;