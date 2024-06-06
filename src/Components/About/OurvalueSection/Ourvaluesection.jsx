import React from "react";
import './style.scss';

const Ourvaluesection = () => {
    return(
        <>
        <section className="our-value-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="stickydiv">
                            <h4><span>Our</span> Vision</h4>
                            <p>In today's hyper-competitive marketplace, we at TechXerro share a profound vision - to empower every business, regardless of size or budget, to transform into a formidable brand. We believe that every enterprise deserves an equal opportunity to thrive, and that's precisely what fuels our relentless pursuit.</p>
                            <button className="btn-white d-flex gap-4 align-items-center justify-content-center">
                                Schedule a call
                                <svg
                                    width="17"
                                    height="9"
                                    viewBox="0 0 17 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M16.3536 4.85355C16.5488 4.65829 16.5488 4.34171 16.3536 4.14645L13.1716 0.964467C12.9763 0.769205 12.6597 0.769205 12.4645 0.964467C12.2692 1.15973 12.2692 1.47631 12.4645 1.67157L15.2929 4.5L12.4645 7.32843C12.2692 7.52369 12.2692 7.84027 12.4645 8.03553C12.6597 8.2308 12.9763 8.2308 13.1716 8.03554L16.3536 4.85355ZM-4.37114e-08 5L16 5L16 4L4.37114e-08 4L-4.37114e-08 5Z"
                                    fill="black"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="boxshade">
                            <h4>Democratizing Brand Excellence</h4>
                            <p>For too long, small businesses have been overshadowed by big players with massive budgets. Our vision is to level that playing field, making top-notch branding, marketing, and consulting affordable for companies of any size. We envision success determined by passion and execution, not finances.</p>
                            <p>At TechXerro, we know building a brand goes beyond just visuals. It's about crafting a compelling story, forging emotional connections, and delivering exceptional experiences. Our vision is to guide you through that transformative journey as your steadfast partner, with our comprehensive service suite.</p>    
                        </div>
                        <div className="boxshade">
                            <h4>One-Stop Brand Empowerment</h4>
                            <p>Whether reinvigorating your online presence, amplifying marketing, or navigating business consulting - we're your one-stop brand empowerment hub. Our vision is to relieve that burden, allowing you to focus on your core strengths while we elevate your brand.</p>
                            <p>At our core is a commitment to deeply understanding your unique challenges and tailoring solutions aligned with your goals. We envision a world where businesses feel empowered, supported and confident to soar above the competition, leaving a lasting impression on customers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* old design delete if today is 15-06-2024 */}
        {/* <section className="our-value-section">
            <div className="container">
                <div className="row pb-5">
                    <div className="col-xl-3 col-12">
                        <h4><span>Our</span> Vision</h4>
                    </div>
                    <div className="col-xl-9 col-12">
                        <p>In today's hyper-competitive marketplace, we at TechXerro share a profound vision - to empower every business, regardless of size or budget, to transform into a formidable brand. We believe that every enterprise deserves an equal opportunity to thrive, and that's precisely what fuels our relentless pursuit.</p>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-7">
                        <h4 data-aos="fade-right" >Democratizing Brand Excellence</h4>
                        <p  data-aos="fade-left">For too long, small businesses have been overshadowed by big players with massive budgets. Our vision is to level that playing field, making top-notch branding, marketing, and consulting affordable for companies of any size. We envision success determined by passion and execution, not finances.</p>
                        <p className="pb-4"  data-aos="fade-right">At TechXerro, we know building a brand goes beyond just visuals. It's about crafting a compelling story, forging emotional connections, and delivering exceptional experiences. Our vision is to guide you through that transformative journey as your steadfast partner, with our comprehensive service suite.</p>    
                    
                        <h4 data-aos="fade-left">One-Stop Brand Empowerment</h4>
                        <p data-aos="fade-right">Whether reinvigorating your online presence, amplifying marketing, or navigating business consulting - we're your one-stop brand empowerment hub. Our vision is to relieve that burden, allowing you to focus on your core strengths while we elevate your brand.</p>
                        <p data-aos="fade-left">At our core is a commitment to deeply understanding your unique challenges and tailoring solutions aligned with your goals. We envision a world where businesses feel empowered, supported and confident to soar above the competition, leaving a lasting impression on customers.</p>
                    </div>
                    <div className="col-xl-7 col-lg-5 ">
                        <img src={require('../../../assets/visionimg1.png')} alt="" id="vission1" />
                    </div>
                </div>
            </div>
        </section> */}
        </>
    )
}

export default Ourvaluesection;