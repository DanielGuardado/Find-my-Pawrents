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
                                <p id='position'>  Team Advisor</p>
                                <img src={Rosemary} alt="d1" className="group-picture" />
                                <div id='test'>
                                    <img src={githubIcon} alt="d1" id="icon" />
                                    <img src={linkedinIcon} alt="d1" id="icon" />
                                </div>
                            </div>
                            <div id='persional-description'>
                                <p><span>Name:  </span> Rosemary Gonzaga</p>
                                    <p><span>Bio: </span> I'm a perpetually curious coder with a weakness for mind-bendy puzzles. My passion for problem-solving began in the laboratory, where I learned how to ask insightful questions and find answers through methodically-executed experiments. Now I turn that curiosity and discipline towards solving problems with a different toolkit: one that includes technologies such as Ruby, Rails, JavaScript, React, Redux, PostgreSQL, CSS, and HTML.
                                                            In a recent project, I combined my passions for data and coding by creating a data visualization with JavaScript and D3.js. In the process, I've been delighted to discover that software development affords as much room for creativity as it does scientific reasoning.
                                                            When I'm not having fun finding and squashing bugs, I'm playing board games, hiking, or cozying up with a good book.  </p>
                                <p><span>Email: </span> </p>
                            
                            </div>
                        </div>
                        <div className='personal-bio'>
                            <div>
                                <p id='position'>  Team Lead</p>
                                <img src={Dan} alt="d1" className="group-picture" />
                                <div id='test'>
                                    <img src={githubIcon} alt="d1" id="icon" />
                                    <img src={linkedinIcon} alt="d1" id="icon" />
                                </div>
                            </div>
                            <div id='persional-description'>
                                <p><span>Name:  </span> Daniel Guardado</p>
                                <p><span>Job Description: </span> The team lead can be considered the owner of the project.  They think high level about the MERN project and monitor the development of its different pieces.  Typically this is the person who came up with the initial application idea as they are in the best position to think about it as a complete product. </p>
                                <p><span>Email: </span> </p>
                            
                            </div>
                        </div>
                        <div className='personal-bio'>
                            <div>
                                <p id='position'>Frontend Lead</p>
                                <img src={Jin} alt="d1" className="group-picture" />
                                <div id='test'>
                                    <img src={githubIcon} alt="d1" id="icon" />
                                    <img src={linkedinIcon} alt="d1" id="icon" />
                                </div>
                            </div>
                            <div id='persional-description'>
                                <p><span>Name:  </span> Jin Lin</p>
                                <p><span>Job Description: </span> The Frontend Lead is responsible for the R of the MERN stack.  While that might only be one letter, we all know by now how integral the frontend architecture of a web app is.  Everything React and Redux related, including any additional libraries, will be the domain of the Frontend Lead.  </p>
                                <p><span>Email: </span> </p>
                            </div>
                        </div>
                        <div className='personal-bio'>
                            <div>
                                <p id='position'>Flex Developer</p>
                                <img src={Lauren} alt="d1" className="group-picture" />
                                <div id='test'>
                                    <img src={githubIcon} alt="d1" id="icon" />
                                    <img src={linkedinIcon} alt="d1" id="icon" />
                                </div>
                            </div>
                            <div id='persional-description'>
                                <p><span>Name:  </span> Lauren Lee</p>
                                <p><span>Job Description: </span> This person would be a flexible member of the team bouncing from the different leads based on need. Where a Lead Assistant focuses either on Management(Team Lead), Frontend (Frontend Lead), or Backend (Backend Lead), the Flex team member would be assigned tasks by the Team Lead from any piece of the project.  This person would then assist the Lead responsible for that one specific piece, and report back to the Team Lead when it is complete. </p>
                                <p><span>Email: </span> </p>
                            </div>
                        </div>
                        <div className='personal-bio'>
                            <div>
                                <p id='position'>Backend Lead</p>
                                <img src={Gabe} alt="d1" className="group-picture" />
                                <div id='test'>
                                    <img src={githubIcon} alt="d1" id="icon" />
                                    <img src={linkedinIcon} alt="d1" id="icon" />
                                </div>
                            </div>
                            <div id='persional-description'>
                                <p><span>Name:  </span> Gabe Byrne</p>
                                <p><span>Job Description: </span> The backend lead is responsible for the N, the E, and the M of the MERN stack.  They will spend the majority of their time organizing the database, building request-response behavior, and working with the Frontend Lead to design the api end-points.  </p>
                                <p><span>Email: </span> </p>
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