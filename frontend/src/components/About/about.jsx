import React from 'react'
import NavBar from './../navBar/navBar_container'
import Dan from "./Dan.png";
import Lauren from "./Lauren.png";
import Gabe from "./Gabe.png";
import Jin from "./Jin.png";
import DogPicture from "./about-dog.jpg";
import './about.scss'

const AboutPage = props => {

    return(
        <div>
            <NavBar />
            <div className='about-banner-picture-container'>
                <img src={DogPicture} alt="d1" className="dog-picture" />
            </div>
            <div>
                <div className='about-page-team-message'>
                    <h1>Our Team</h1>
                    <p>We have a team of volunteers that are extremely dedicated to helping animals.</p>
                </div>

                <div className='about-page-main-content-container'>    
                    <div className='group-picture-container'>
                        <div className='personal-bio'>
                            <img src={Dan} alt="d1" className="group-picture" />
                        </div>
                        <div className='personal-bio'>
                            <img src={Jin} alt="d1" className="group-picture" />
                        </div>
                        <div className='personal-bio'>
                            <img src={Lauren} alt="d1" className="group-picture" />
                        </div>
                        <div className='personal-bio'>
                            <img src={Gabe} alt="d1" className="group-picture" />
                        </div>
                    </div>
                  
                </div>
            </div>



            {/* <div id='text'>
                After obtaining a New York State 501(c)3 status in 2020, 
                the organization’s mission has always been to safeguard dogs
                 who have experienced the most severe cases of abuse, neglect,
                  and abandonment. Since its inception, the team has saved 
                  countless sick, injured and abused dogs  from near 
                  death, domestically and abroad. The organization's long-term 
                  goal is to open a true no-kill dog sanctuary with high 
                  quality, in-house veterinary services as well as clean, 
                  spacious enclosures and outdoor space. Through efficient 
                  operations, adequate awareness and public support,
            </div> */}
        </div>
    )


} 


export default AboutPage