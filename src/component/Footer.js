import './FooterStyles.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>Aileen Moreno</h1>
                    <p>Preferred Methods of Contact</p>
                    <p>If using phone number on resume, please text</p>
                </div>
                <div>
                    <a href = 'https://www.linkedin.com/in/aileen-moreno-2a776a216/' target='_blank'
                    rel = 'noopener noreferrer'>
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                    <a href = 'mailto: ailmoren@hotmail.com' target='_blank'
                    rel = 'noopener noreferrer'>
                        <i className= 'fa-regular fa-envelope'></i>
                    </a>
                    <i className='fa-solid fa-phone fa-xs'></i>
                </div>
            </div>
        </div>
    )
}



export default Footer;