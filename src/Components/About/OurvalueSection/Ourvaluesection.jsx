import React from "react";
import './style.scss';

const Ourvaluesection = () => {
    return(
        <>
        <section className="our-value-section">
            <div className="container">
                <div className="row pb-5">
                    <div className="col-3">
                        <h4 data-aos="fade-right"><span>Our</span> Vision</h4>
                    </div>
                    <div className="col-9">
                        <p  data-aos="fade-left">In today's hyper-competitive marketplace, we at TechXerro share a profound vision - to empower every business, regardless of size or budget, to transform into a formidable brand. We believe that every enterprise deserves an equal opportunity to thrive, and that's precisely what fuels our relentless pursuit.</p>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 ">
                        <h4 data-aos="fade-right" >Democratizing Brand Excellence</h4>
                        <p  data-aos="fade-left">For too long, small businesses have been overshadowed by big players with massive budgets. Our vision is to level that playing field, making top-notch branding, marketing, and consulting affordable for companies of any size. We envision success determined by passion and execution, not finances.</p>
                        <p className="pb-4"  data-aos="fade-right">At TechXerro, we know building a brand goes beyond just visuals. It's about crafting a compelling story, forging emotional connections, and delivering exceptional experiences. Our vision is to guide you through that transformative journey as your steadfast partner, with our comprehensive service suite.</p>    
                    
                        <h4 data-aos="fade-left">One-Stop Brand Empowerment</h4>
                        <p data-aos="fade-right">Whether reinvigorating your online presence, amplifying marketing, or navigating business consulting - we're your one-stop brand empowerment hub. Our vision is to relieve that burden, allowing you to focus on your core strengths while we elevate your brand.</p>
                        <p data-aos="fade-left">At our core is a commitment to deeply understanding your unique challenges and tailoring solutions aligned with your goals. We envision a world where businesses feel empowered, supported and confident to soar above the competition, leaving a lasting impression on customers.</p>
                    </div>
                    <div className="col-7">
                        <img src={require('../../../assets/visionimg1.png')} alt="" id="vission1"  data-aos="fade-left"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Ourvaluesection;