import './DesignCo.css';
import phone1 from './DESIGNCO.png';

function DesignCo(){
    return (
        <>
        <div className='phone-container'>
            <img src ={phone1} alt = "iphoneimg" className='phone-des'/>
        </div>
        <div className='design'>
            <h1>Design-A-Thon</h1>

            <div className='design-paragraph'>
                <p>
                    This was a three-day competition event for all university
                    participants online, hosted by Rice University. Each 
                    participant had a prompt to complete within the time limit.

                    My prompt was to create a mobile app based on mental health for college students.
                </p>
            </div>
            <div style={{ borderTop: "3px solid #000000 ", marginLeft: 20, marginRight: 20 }}></div>
            <h2>Introduction</h2>
            <p> My first step was to think of a theme for my mental health app. Most would usually do daily checks, like tracking how much water you drank or how much time you spent studying.
            </p>

            <p>
                I wanted to implement an aspect of that daily check, however, I wanted to focus that on living space.
                As a college student, the last thing I needed was to track how much water I drank or how much time I spent studying. A full day of classes, studying, and work was enough to make me go home and de-compress.  
                
                <br></br>
                <br></br>
                In that case, what does this mean? From personal experience, research, and observation, I realized that having a clean living space helps in making a huge improvement for mental health. 
                Coming home to an unclean space after a full day of chaos for a college student is deliberating to mental health.
                <br></br>
                <br></br>
                I wanted to focus on other indirect aspects. My app is an implementation of daily tasks focused on living space, with a community space, and a marketplace for decorating.
            </p>
            <h2>User Research</h2>           
            <div className='google-docs'>
                <iframe src='https://docs.google.com/presentation/d/1dGSJ86z9Vp04UkbLqNsWWMg2ce9kkZRtjqb6SdL5nxQ/preview' width='50%' height='500px' frameborder='0'></iframe>
            </div>

            <p> Since this was a three-day competition, I went straight into creating the app on Figma skipping the wireframing and prototyping stage. I needed to finish in time to interview a small group of people and create a powerpoint presentation.
                The first theme colors I chose was a mix of pink and purple to emphasize comfort, relaxation, and coziness.
            </p>

            <h2>Design</h2>
            <p> Once the competition ended, I decided to re-do my entire prototype. I changed my theme colors to just be a more muted purple and pink, as I found it could be too harsh on the eyes with the first prototype. </p>
            <div className='figma-docs'>
                <iframe width="350" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlPFc3aJ1iIOqGUjc3q8SWo%2FDesign-A-Thon%3Fkind%3D%26node-id%3D4-20%26t%3DouFjujZ3JF1yJ9GG-1%26scaling%3Dscale-down%26mode%3Ddesign" allowfullscreen></iframe>
            </div>

            <p>
                I also added community page, a "what's popular" page, and a more cohesive progress tracking. The inspo board will still remain similar to a Pinterest board.
                I've since decided to focus on: Cozy, Comfortable, but also modern and simple to use.
            </p>

            <h2>Reflection</h2>
            <p> To this day the app is still a work-in-progress. Since this is a solo project, I've reached out to other resources and gotten the guidance
                of a mentor within the UI/UX field who gives feedback on my progress.
                <br></br>
                <br></br>
                Some of their advice was to simplify the homepage more, and not to overcrowd too many items. 
                Taking this in mind I've began sketching out a more simple design layout. Overall, they deemed it a big
                improvement from the original prototype. 

                My final plan is to create a mobile app and put this on Google Store for more in-depth experience. I plan to use React.Js, CSS, and Java to create the app.
            </p>
        </div>
    
    </>
    )
}

export default DesignCo;