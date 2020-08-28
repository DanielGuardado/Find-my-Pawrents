import React from 'react'
import NavBar from './../navBar/navBar_container'
import Dan from "./Dan.png";
import Lauren from "./Lauren.png";
import Gabe from "./Gabe.png";
import Jin from "./Jin.png";
import Rosemary from "./Rosemary.png";
import DogPicture from "./about-dog.jpg";
import githubIcon from "./githubIcon.png";
import linkedinIcon from "./linkedinIcon.png";
import './about.scss'

const AboutPage = props => {

    return(
        <div>
            <NavBar />
            <div id='about-page-main-container'>
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
                            <div>
                                <p id='position'>  Team Lead</p>
                                <img src={Dan} alt="d1" className="group-picture" />
                                <div id='test'>
                                    <a href="https://github.com/DanielGuardado" target="_blank" >
                                        <img src={githubIcon} alt="d1" id="icon" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/daniel-guardado-106867197/" target="_blank" >
                                        <img src={linkedinIcon} alt="d1" id="icon" />
                                    </a>
                                </div>
                            </div>
                            <div id='persional-description'>
                                <p><span>Name:  </span> Daniel Guardado</p>
                                {/* <p><span>Job Description: </span> The team lead can be considered the owner of the project.  They think high level about the MERN project and monitor the development of its different pieces.  Typically this is the person who came up with the initial application idea as they are in the best position to think about it as a complete product. </p> */}
                                <p><span>Job Description: </span> Dan is our highly motivated and resourceful Team Lead. He always encouraged our team, communicated effectively, and delegated tasks to each member to achieve daily goals. He developed a high level work plan and monitored the development of different pieces our MERN stack projects coming together. </p>
                                <p><span>Email: </span> danguardado217@gmail.com</p>
                            
                            </div>
                        </div>
                        <div className='personal-bio'>
                            <div>
                                <p id='position'>Frontend Lead</p>
                                <img src={Jin} alt="d1" className="group-picture" />
                                <div id='test'>
                                    <a href="https://github.com/jlin2235" target="_blank">
                                        <img src={githubIcon} alt="d1" id="icon" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/jlin2235/" target="_blank">
                                        <img src={linkedinIcon} alt="d1" id="icon" />
                                    </a>
                                </div>
                            </div>
                            <div id='persional-description'>
                                <p><span>Name:  </span> Jin Lin</p>
                                {/* <p><span>Job Description: </span> The Frontend Lead is responsible for the R of the MERN stack.  While that might only be one letter, we all know by now how integral the frontend architecture of a web app is.  Everything React and Redux related, including any additional libraries, will be the domain of the Frontend Lead.  </p> */}
                                <p><span>Job Description: </span> Jin is our super innovative and adaptable Frontend Lead. He was responsible for the R of the MERN stack. While it might only be one letter, we all know by now how integral the frontend architecture of a web app is. Everything React and Redux related, including any additional libraries, is the domain of the Frontend Lead.</p>
                                <p><span>Email: </span> jlin2235@gmail.com </p>
                            </div>
                        </div>
                        <div className='personal-bio'>
                            <div>
                                <p id='position'>Flex Developer</p>
                                <img src={Lauren} alt="d1" className="group-picture" />
                                <div id='test'>
                                    <a href="https://github.com/hyunalee625" target="_blank">
                                        <img src={githubIcon} alt="d1" id="icon" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/lauren-hyuna-lee/" target="_blank">
                                        <img src={linkedinIcon} alt="d1" id="icon" />
                                    </a>
                                </div>
                            </div>
                            <div id='persional-description'>
                                <p><span>Name:  </span> Lauren Lee</p>
                                {/* <p><span>Job Description: </span> This person would be a flexible member of the team bouncing from the different leads based on need. Where a Lead Assistant focuses either on Management(Team Lead), Frontend (Frontend Lead), or Backend (Backend Lead), the Flex team member would be assigned tasks by the Team Lead from any piece of the project.  This person would then assist the Lead responsible for that one specific piece, and report back to the Team Lead when it is complete. </p> */}
                                    <p><span>Job Description: </span> Lauren is our enthusiastic and persistentt Flex Developer. She was the flexible member of the team who supported her team members to keep the workflow smooth. Lauren jumped on any piece of the project in the backend and frontend whenever necessary.</p>
                                <p><span>Email: </span> laurenlee0625@gmail.com</p>
                            </div>
                        </div>
                        <div className='personal-bio'>
                            <div>
                                <p id='position'>Backend Lead</p>
                                <img src={Gabe} alt="d1" className="group-picture" />
                                <div id='test'>
                                    <a href="https://github.com/ByrneGR" target="_blank">
                                        <img src={githubIcon} alt="d1" id="icon" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/gabrielbyrne/" target="_blank">
                                        <img src={linkedinIcon} alt="d1" id="icon" />
                                    </a>
                                </div>
                            </div>
                            <div id='persional-description'>
                                <p><span>Name:  </span> Gabriel Byrne</p>
                                <p><span>Job Description: </span> Gabe is our problem solving master and detail oriented Backend Lead. He was in charge of the N, E, and M of the MERN stack. Gabe spent the majority of his time organizing the database, building request-response behavior, and working with the Frontend Lead to design the api end-points.</p>
                                <p><span>Email: </span> byrnegr@gmail.com</p>
                            </div>
                        </div>
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