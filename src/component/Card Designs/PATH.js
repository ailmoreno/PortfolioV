import './PATH.css';
import './DesignCo.css';
import phone1 from './coffee.jpg';

function PATH(){
    return (
        <>
        <div className='phone-container'>
            <img src ={phone1} alt = "iphoneimg" className='phone-des'/>
        </div>
        <div className='design'>
            <h1>PATH</h1>

            <div className='design-paragraph'>
                <p>
                    A six-week summer apprenticeship where I worked with a non-profit
                    organization in meeting all their design needs. 

                    This was done in a team, consisting of 7 people. PATH's mission is to
                    end homelessness for individuals, families, and communities. They work 
                    to build affordable housing and providing support services throughout California.
                    <br></br>
                    <br></br>
                    https://tinyurl.com/PATH-2023
                </p>
            </div>
            <div style={{ borderTop: "3px solid #000000 ", marginLeft: 20, marginRight: 20 }}></div>
            <h2>Introduction</h2>
            <p> 
                UX Researcher: Doan Duong <br></br>
                UX Designer: Shuchang (Tony) Liu <br></br>
                Visual Designer: Justin Alinas <br></br>
                Web Builder: Aileen Moreno <br></br>
                Content Strategist: Evelyn Chen, Dia Bhalothia <br></br>
                Marketing Strategist: Roland Noy <br></br>

                <br></br>
                We also worked under a mentor, a Visual Designer named Tarrea Talbert. 
                Given the challenges faced by users in navigating PATH's website, we aimed
                to redesign it into a more intuitive, user-centric platform that effectively
                communicates its mission and facilities.
            </p>
            <h2>User Research</h2>
            <p> Our team conducted competitive analysis along with a full website
                audit per PATH's request. We also created a survey in order to engage with PATH's target audience.
                PATH prioritized graphics such as donation posters or hiring volunteers. We mainly worked with our visual designer, Justin Alinas.
                <br></br>
                <br></br>
                Our team created a <a href="https://docs.google.com/document/d/1HaYEkle5LPYwrhHYHpf_mMbYUOw9cE0aU9mrH3zAuxw/edit?usp=sharing" target='_blank'>competitive analysis</a> to compare PATH's social medias with 6 other nonprofits: <br></br>
                1. Feeding for America <br></br>
                2. United Way Worldwide <br></br>
                3. Direct Relief <br></br>
                4. Goodwill Industries <br></br>
                5. YMCA <br></br>
                6. Habitat for Humanity <br></br>

                Our team used this anaylsis to compare PATH's performance. We found that a common pattern between 
                these 6 nonprofit organizations was brand recognition, along with their audience having a closer look of their behind-the-scene work.
                <br></br>
                <br></br>
                We also did an audit on their website, we found that: <br></br>
                <br></br>
                1. Visual Performance 
                    <li>Slow Image Refresh Rate: 
                        The slow refreshing rate of images could affect the user experience.
                        Optimizing and perhaps compressing the images or making use of caching
                        might help improve this.
                    </li>
                <br></br>
                2. User Experience (UX) and User Interface Design (UI) <br></br>
                <div className='indent'>
                    <li>
                        Link Redundancy: Two different blocks lead to the same "Make a Donation"
                        page. This could cause confusion for users who might think they signify
                        two distinct projects. A clear distinction or label would be helpful,
                        or alternatively, considering using a single, more prominent block for donations.
                    </li>
                    <li>
                        Order of Content: It is advisable to present the "Making it Home" project
                        introduction before the donation option. This helps users understand the 
                        project better and might incentivize them to donate. The current ordering might
                        seem too direct or assuming without adequate context first.
                    </li>
                    <li>
                        About Page Layout: The current multi-color layout appears informal. 
                        To increase clarity and professionalism:
                        <div className='indent-further'>
                            <li>Divide the content into distinct blocks. </li>
                            <li>Consistency in color scheme for similar topics/sections can be employed. </li>
                            <li>Use different colors sparingly, mainly for emphasis rather than structure. </li>
                        </div>
                    </li>
                    <li>
                        Color Diversity and Clarity: While having a diverse color scheme,
                        as compared to the UCSD Pre-Dental Society's homepage, adds vibrancy, it comes at a cost:
                        <div className='indent-further'>
                            <li>Confusion in Information Hierarchy: The current clustering of various
                                colored blocks disrupts the visual flow, making it hard for users to determine
                                which information is of prime importance.
                            </li>
                        </div>
                    </li>
                </div>
                <br></br>
                3. Recommendations <br></br>
                <div className='indent'>
                    <li>Clearer Visual Hierarchy: Design the homepage in a way
                        that guides the users' eyes to the most crucial information first.
                        Use consistent color and design elements to differentiate sections or topics.
                    </li>
                    <li>Improve Consistency: If there are similar themes or projects,
                        ensure that they are presented in a consistent manner. This makes
                        it easier for users to understand and navigate the website.
                    </li>
                    <li>Optimize Visual Perfomance: Consider techniques like lazy
                        loading for images or using optimized image formats to 
                        ensure quicker load times.
                    </li>
                </div>

                <br></br>Conclusion: <br></br> 
                PATH's website has a good mission and objective, however, to 
                ensure maximum engagement and understanding from visitors it's essential the
                website offers a clear, concise, and optimized user experience. The aforementioned points highlight
                areas of improvement that can help achieve this goal.
            </p>
            <h2>Design</h2>
            <p> PATH primarily gave us the responsibility to design graphics/posters for
                their upcoming social event. While we didn't get a chance to take redesign
                ideas into action, here are some redesign ideas we layout:
                <br></br>
                <br></br>
                1. Simplified and Streamlined Layout: <br></br>
                2. Navigation Improvements: <br></br>
                3. Storytelling and engagement: <br></br>
                4. Improved Donation Process: <br></br>
                5. Visual Enhancements: <br></br>
                6. Improved "About" Page: <br></br>
                7. Clear Calls to Action (CTA): <br></br>
                8. Mobile Responsiveness: <br></br>
                9. Community Engagement: <br></br>
                10. Feedback and Interaction: <br></br>

                <br></br> <br></br>
                We took a look at their social media postings to see how they were advertising
                their job opportunities.

                <br></br><br></br>
                Problems: <br></br>
                1. "We're Hiring" on title page not easily distinguishable to
                audience, even with the red rectangle background. <br></br>
                2. Doesn't present their logo to establish identity. <br></br>
                3. The red background for description page is too bright making it 
                uncomfortable for the audience to read the white text. <br></br>
                4. Location, job description, and "full-time" is not organized to make
                it easy for the audience to read. <br></br>

                <br></br><br></br>
                Title Page Changes: <br></br>
                1. Added PATH logo to add identity to posting. <br></br>
                2. An increased font size of "We're Hiring" to make it easily
                noticeable for viewers. <br></br>
                3. Moved image to make the post less distracting for viewers, but
                continued to add personality to the post. <br></br>
                4. Added PATH information to make information more accessible. <br></br>

                <br></br><br></br>
                Description Page Changes: <br></br>
                1. Fixed organization by:
                <div className='indent'>
                    <li>
                        Increasing font size and bolding location to make it easier to know the location.
                    </li>
                    <li>
                        Added hierarchy to job titles and descriptions to help viewers a brief
                        idea of what jobs are offered.
                    </li>
                    <li>
                        Added a legend with icons to make it easier for the viewer to understand
                        potential add-ons and what the job offers.
                    </li>
                </div>

            </p>
            <h2>Reflection</h2>
            <p> 
                The most challenging part for our team was user research, as
                PATH wanted everything done privately. Our team added website redesign
                as our side project in hopes of presenting the redesign proposal to PATH.
                They considered it, but wanted to focus more on graphic design.
            </p>

            <p>
                Our team created a private preliminary survey in hopes of conducting user interviews
                and A/B test in order to understand the target audience. This would also help us in our main graphic design
                projects as we would utilize that information to create engaging posts. However, there was not enough time to 
                review with the organization within a six-week apprenticeship.
            </p>
        </div>
    </>
    )
}

export default PATH;