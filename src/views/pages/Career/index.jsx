import React, { useEffect } from "react";
import './style.scss';
import { images } from "../../../assets/images";

const Career = () =>{

    // useEffect(()=>{
        
    //     document.querySelectorAll(".accordion-item").forEach((item) => {
    //         item.querySelector(".accordion-item-header").addEventListener("click", () => {
    //           if (item.classList.contains("open")) {
    //             item.classList.remove("open");
    //           } 
    //           else {
    //             item.classList.add("open");
    //           }
    //         });
    //     });
    // })

    return(
        <>
                <section className="carreer-main-head">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-12">
                                             
                            </div>
                            <div className="col-sm-8 col-12" style={{height:'350px', display:'flex', alignItems:'end'}}>      
                                <div>               
                                    <h2>We are growing. <br/>Join the team</h2>
                                    <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem.</p>
                                    <button className="btn-white d-flex gap-4 align-items-center">Join the Team 
                                    <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.3536 4.85355C16.5488 4.65829 16.5488 4.34171 16.3536 4.14645L13.1716 0.964467C12.9763 0.769205 12.6597 0.769205 12.4645 0.964467C12.2692 1.15973 12.2692 1.47631 12.4645 1.67157L15.2929 4.5L12.4645 7.32843C12.2692 7.52369 12.2692 7.84027 12.4645 8.03553C12.6597 8.2308 12.9763 8.2308 13.1716 8.03554L16.3536 4.85355ZM-4.37114e-08 5L16 5L16 4L4.37114e-08 4L-4.37114e-08 5Z" fill="black"/>
                                    </svg>
                                    </button>
                                </div>                          
                            </div>
                        </div>
                    </div>
                </section>
                <section className="training-section">
                    <div className="container">
                        <div className="row pb-5">
                            <div className="col-4 d-flex align-items-start">
                                <div>
                                    <h4>Techxerro culture</h4>                     
                                </div>
                            </div>
                            <div className="col-8"> 
                            <p>                    
                                If you join Antaeus team, we promise to make you feel special. It means you share the same passion for travel with us. From our side, it means we entrust you with great things to come!
                            </p>  
                                    
                            </div>
                        </div>
                        <div className="row  pt-5">
                            <div className="col-6">
                                <img src={require('../../../assets/carreerimg1.png')} alt="" />
                            </div>
                            <div className="col-6 d-flex">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <div className="g-wrapper">
                                            <h2>1</h2>
                                            <p>A true team: No matter what, we always offer our services and solve any problem that may arise as one TEAM</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="g-wrapper">
                                            <h2>2</h2>
                                            <p>Innovators: Just like airplanes, we lose value if we remain idle. Together we visualize and create the future of business and marine travel</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="g-wrapper">
                                            <h2>3</h2>
                                            <p>Risk takers: The Company empowers its people to take reasonable risks anytime</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="g-wrapper">
                                            <h2>4</h2>
                                            <p>Casual look & business attitude: Flexible working times, casual attire and a people-centered philosophy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="vacancy-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <h3>Job Openings</h3>
                                <p>Check our openings and send us your CV. Even with no openings available, send it anyway. We are always on the lookout for new talents!</p>
                                <br/>
                            </div>
                        </div>    
                        <div className="row">
                            <div className="row" style={{padding:'0 15px', width:'100%'}}>
                                <div className="col-4">
                                    <p>Position</p>
                                </div>
                                <div className="col-3">
                                    <p>Location</p>
                                </div>
                                <div className="col-5">
                                    <p>Type</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item"> 
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <div className="row" style={{padding:'0 0px', width:'100%'}}>                                            
                                                <div className="col-4">
                                                    <p>Graphic & UI/UX designer</p>
                                                </div>
                                                <div className="col-3">
                                                    <p>Delhi NCR</p>
                                                </div>
                                                <div className="col-5">
                                                    <p>Full time</p>
                                                </div>
                                            </div>
                                        </button>                                        
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <h6>Job description</h6>
                                                    </div>
                                                    <div className="col-6">
                                                        <p>We are looking for a developer to build and implement a functional web application. You will work with other developers throughout the development life cycle. In this role, you should be a team player with a keen eye for detail and problem-solving skills. If you also have experience in API development and popular coding languages (e.g. JavaScript), we’d like to meet you. Your goal will be to build an efficient Web Application that serves user needs. | Type of work: Full-time in-house</p>
                                                        <p><b>Responsibilities:</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <div class="accordion-item"> 
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            <div className="row" style={{padding:'0 0px', width:'100%'}}>                                            
                                                <div className="col-4">
                                                    <p>Graphic & UI/UX designer</p>
                                                </div>
                                                <div className="col-3">
                                                    <p>Delhi NCR</p>
                                                </div>
                                                <div className="col-5">
                                                    <p>Full time</p>
                                                </div>
                                            </div>
                                        </button>                                        
                                        <div id="collapseTwo" class="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <h6>Job description</h6>
                                                    </div>
                                                    <div className="col-6">
                                                        <p>We are looking for a developer to build and implement a functional web application. You will work with other developers throughout the development life cycle. In this role, you should be a team player with a keen eye for detail and problem-solving skills. If you also have experience in API development and popular coding languages (e.g. JavaScript), we’d like to meet you. Your goal will be to build an efficient Web Application that serves user needs. | Type of work: Full-time in-house</p>
                                                        <p><b>Responsibilities:</b></p>
                                                        <ul>
                                                            <li>Development front-end and back-end of a Web Application</li>
                                                            <li>Testing of said applications</li>
                                                        </ul>
                                                        <p><b>Requirements::</b></p>
                                                        <ul>
                                                            <li>Bachelor’s degree in Computer Engineering</li>
                                                            <li>Good knowledge of Web technologies (HTML, CSS, JavaScript).</li>    
                                                            <li>Good knowledge of .net Core, C#</li>
                                                            <li>Minimum 2 to 3-year experience</li>
                                                    
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                    <div class="accordion-item"> 
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            <div className="row" style={{padding:'0 0px', width:'100%'}}>                                            
                                                <div className="col-4">
                                                    <p>Graphic & UI/UX designer</p>
                                                </div>
                                                <div className="col-3">
                                                    <p>Delhi NCR</p>
                                                </div>
                                                <div className="col-5">
                                                    <p>Full time</p>
                                                </div>
                                            </div>
                                        </button>                                        
                                        <div id="collapseThree" class="accordion-collapse collapse " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <h6>Job description</h6>
                                                    </div>
                                                    <div className="col-6">
                                                        <p>We are looking for a developer to build and implement a functional web application. You will work with other developers throughout the development life cycle. In this role, you should be a team player with a keen eye for detail and problem-solving skills. If you also have experience in API development and popular coding languages (e.g. JavaScript), we’d like to meet you. Your goal will be to build an efficient Web Application that serves user needs. | Type of work: Full-time in-house</p>
                                                        <p><b>Responsibilities:</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                     
                                </div>
                            </div>            
                        </div>         
                    </div>
                </section>
                {/* <section className="query-section ">
                    <div className="container">
                        <div className="row">                    
                            <div className="col-12 text-center">
                                <h3>Benefits & Wellness</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                    <div class="accordion-item">
                                    <div class="accordion-item-header">
                                        <span class="accordion-item-header-title">What do I need to know before contacting you?</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down accordion-item-header-icon">
                                        <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                    <div class="accordion-item-description-wrapper">
                                        <div class="accordion-item-description">
                                        <hr/>
                                        <p>This is the description for Accordion Item 1. This is the description for Accordion Item 1.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="accordion-item">
                                    <div class="accordion-item-header">
                                        <span class="accordion-item-header-title">What do I need to know before contacting you?</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down accordion-item-header-icon">
                                        <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                    <div class="accordion-item-description-wrapper">
                                        <div class="accordion-item-description">
                                        <hr/>
                                        <p>This is the description for Accordion Item 2. This is the description for Accordion Item 2. This is the description for Accordion Item 2. This is the description for Accordion Item 2.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="accordion-item">
                                    <div class="accordion-item-header">
                                        <span class="accordion-item-header-title">What do I need to know before contacting you?</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down accordion-item-header-icon">
                                        <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                    <div class="accordion-item-description-wrapper">
                                        <div class="accordion-item-description">
                                        <hr/>
                                        <p>This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3.</p>
                                        </div>
                                    </div>
                                    </div> 
                            </div>
                            <div className="col-6">
                                    <div class="accordion-item">
                                        <div class="accordion-item-header">
                                            <span class="accordion-item-header-title">Do you have any reviews from satisfied customers?</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down accordion-item-header-icon">
                                            <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                        <div class="accordion-item-description-wrapper">
                                            <div class="accordion-item-description">
                                            <hr/>
                                            <p>This is the description for Accordion Item 1. This is the description for Accordion Item 1.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                    <div class="accordion-item-header">
                                        <span class="accordion-item-header-title">What do I need to know before contacting you?</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down accordion-item-header-icon">
                                        <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                    <div class="accordion-item-description-wrapper">
                                        <div class="accordion-item-description">
                                        <hr/>
                                        <p>This is the description for Accordion Item 2. This is the description for Accordion Item 2. This is the description for Accordion Item 2. This is the description for Accordion Item 2.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="accordion-item">
                                    <div class="accordion-item-header">
                                        <span class="accordion-item-header-title">What do I need to know before contacting you?</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down accordion-item-header-icon">
                                        <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                    <div class="accordion-item-description-wrapper">
                                        <div class="accordion-item-description">
                                        <hr/>
                                        <p>This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3.</p>
                                        </div>
                                    </div>
                                    </div> 
                                
                            </div>
                        </div>
                    </div>
                </section> */}
        </>

    )
}

export default Career;