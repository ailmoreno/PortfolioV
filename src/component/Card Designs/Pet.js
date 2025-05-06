import './Pet.css';
import './DesignCo.css';
import phone1 from './coffee.jpg';

function Pet(){
    return (
        <>
        <div className='phone-container'>
            <img src ={phone1} alt = "iphoneimg" className='phone-des'/>
        </div>
        <div className='design'>
            <h1>PetCo</h1>

            <div className='design-paragraph'>
                <p>
                    UNDER CONSTRUCTION
                </p>
            </div>
            <div style={{ borderTop: "3px solid #000000 ", marginLeft: 20, marginRight: 20 }}></div>
            <h2>Introduction</h2>
            <p> N/A </p>
            <h2>User Research</h2>
            <p> N/A </p>
            <h2>Design</h2>
            <p> N/A </p>
            <h2>Reflection</h2>
            <p> N/A
            </p>

            <p>
            N/A
            </p>
        </div>
    </>
    )
}

export default Pet;