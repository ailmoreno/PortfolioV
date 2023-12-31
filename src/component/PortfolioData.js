import './portfoliostyles.css';

function PortfolioData(props){
    return (
        <div className='t-card'>
            <div className='t-image'>
            <img src ={props.image} alt = "image" className='picture-container'/>
            </div>
            <div className='t-word'>
                <h4>{props.heading}</h4>
                <p>{props.text}</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default PortfolioData;