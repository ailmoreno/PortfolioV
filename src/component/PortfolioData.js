import './portfoliostyles.css';

function PortfolioData(props){
    return (
        <div className='t-card'>
            <div className='t-image'>
            <img src ={props.image} alt = "image" className='picture-container'/>
            </div>
            
            <div className='headingv1'>
                <h4>{props.heading}</h4>
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default PortfolioData;