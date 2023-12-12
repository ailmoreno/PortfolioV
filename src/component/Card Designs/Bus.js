import './Bus.css';
import './DesignCo.css';
import phone1 from './coffee.jpg';

function Bus(){
    return (
        <>
        <div className='phone-container'>
            <img src ={phone1} alt = "iphoneimg" className='phone-des'/>
        </div>
        <div className='design'>
            <h1>Growing Startups</h1>

            <div className='design-paragraph'>
                <p>
                    Most of my official work with startup companies consisted of a variety of skillsets such as 
                    video editing, filming, graphic design, website re-design, and general marketing.

                    I've worked with SPAWNS3D, a small family-owned Etsy store that sells 3D models.
                    I currently work with CLICS, a B2B company, as a Marketing Coordinator.
                </p>
            </div>
            <div style={{ borderTop: "3px solid #000000 ", marginLeft: 20, marginRight: 20 }}></div>
            <h2>Working with: CLICS</h2>
            <p>
                Working with CLICS has allowed me to get a first-hand view into the corporate world.
                Focusing on the design aspect, CLICS gave me a project of creating a card design for their 
                tutorial page. They wanted a simple, modern, and intuitive design for new consumers using their product. 
                <h3 className='heading-3'>User Research</h3>
                As a Marketing Coordinator, I have first-hand experience with the audience demographic and goal.
                In this case, all I had to do was design around my acquired knowledge. The demographic is 
                hairstylists and hair companies.

                I found that most of the demographic preferred something that is convenient, quick, and usable, especially considering that
                most of their work day tends to be busy as it is.
                <br></br><br></br>
                Keeping all of this in mind, I also cross-referenced with other platforms and image references to see how their interfaces worked and looked.  
                After looking at many resources, the one that stood out to me was: <br></br><br></br>

                1. Video Platforms (Landscape Videos) <br></br>
                <div className='indent'>
                    <li>
                        Many of CLICS competitors had articles as their tutorial. This was not what the company is looking for, and instead 
                        wanted a card interface with a preview image of their video. With a few more meetings I was able to note down their ideal interface.
                        This included: Timestamps, Image preview, Description, Header, and Mobile + Desktop versions.
                    </li>
                </div>
                <br></br>
                CLICS own unique app design was also my main source of inspiration, along with their original tutorial page since it gave me an idea of what layout they were looking for. 

                <br></br><br></br>
                Once I got all this information down, I started my wireframing using Figma. The reason I chose Figma was because of its 
                ability to turn designs into code with their built-in dev tool. This was a great tool for CLICS software team.

                <h3 className='heading-3'>Design</h3>
                The first thing I did was 
                <h3 className='heading-3'>Reflection</h3>
                This is still going through the feedback stage due to internal processes. However, for my first corporate experience in this type of setting 
                I am very glad I got to create UI/UX design work. 
            </p>
            <h2>Working with: SPAWNS3D</h2>
            <p> 
                SPAWNS3D was the first business I did work for. They're a family-owned Etsy Store who has been slowly
                increasing in audience. They asked for a website design so they could have their own platform. 
                My theme focused on readability, usability, and modern.

                The program I used was Figma to create a prototype.

                <h3 className='heading-3'>User Research</h3>

                <h3 className='heading-3'>Design</h3>
                <h3 className='heading-3'>Reflection</h3>
            </p>
        </div>
    </>
    )
}

export default Bus;