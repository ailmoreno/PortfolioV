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
                    This was a three-day competition event for all university
                    participants online, hosted by Rice University. Each 
                    participant had a prompt to complete within the time limit.

                    My prompt was to create a mobile app based on mental health
                </p>
            </div>
            <div style={{ borderTop: "3px solid #000000 ", marginLeft: 20, marginRight: 20 }}></div>
            <h2>Introduction</h2>
            <p> Hello </p>
            <h2>User Research</h2>
            <p> Hello </p>
            <h2>Design</h2>
            <p> Hello </p>
            <h2>Reflection</h2>
            <p> After the end of the competition, I decided to refine my prototype in my free time. 
                The app is still a work-in-progress, and with the guide of a mentor with experience in
                the UI/UX field, I was able to get feedback and guidance.
            </p>

            <p>
                Some of their advice was to simplify the homepage more, and not to overcrowd too many items. 
                Taking this in mind I've began sketching out a more simple design layout. However overall, they deemed it a big
                improvement from the original prototype. 

                My final plan is to create a mobile app and put this on Google play for more in-depth back-end coding experience. I plan to use React.Js, CSS, and Java to create the app.
            </p>
        </div>
    </>
    )
}

export default Pet;