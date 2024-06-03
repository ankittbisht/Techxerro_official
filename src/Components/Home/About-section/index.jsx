import React from "react";
import aboutimg from '../../../assets/Home/aboutimg2.png';
import './style.scss';

const AboutSection = () =>{
    
//     const anonymizeName=(name) =>{
//         // Generate a random string of 10 characters as an anonymized name
//         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//         let anonymized = '';
//         for (let i = 0; i < 10; i++) {
//         anonymized += characters.charAt(Math.floor(Math.random() * characters.length));
//         }
//         return anonymized;
//   }
    return(
        <section className="about-section">
            <div className="about-company container"  style={{position:'relative'}}>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12 d-flex align-items-center">
                        {/* <div style={{position:"absolute",fontSize:'300px',opacity:'0.1',fontWeight:'600',zIndex:'0',top:'-50px',left:'-100px'}}>About <div style={{position:"absolute",right:'-80px',top:'75px',fontSize:'80px'}}>Us</div></div> */}
                            
                        <div className="content" style={{position:"relative",zIndex:'1'}}>
                            <h3 data-aos="fade-left" data-aos-delay="100">Who we are</h3>
                            {/* <h1>{anonymizeName('ankit')}</h1> */}
                            <p> At Techxerro, we're redefining what it means to be a creative, IT, and marketing agency. We're a multidisciplinary tour de force, bringing together a diverse team of storytellers, designers, developers, and marketing masterminds who thrive on pushing boundaries and delivering game-changing solutions.</p>
                            <p>Our approach is simple yet powerful – we dive deep to understand your unique business challenges, goals, and audiences, then craft tailored strategies that not only capture attention but drive real results. From stunning web design to cutting-edge digital marketing campaigns and robust IT solutions, we're your one-stop shop for all things digital.</p>
                            <p>But what truly sets us apart is our obsessive commitment to collaboration, working hand-in-hand with our clients as partners united by a shared vision of success. If you're ready to elevate your online presence and unlock new realms of possibility, join us on this journey.</p>


                            <button className="btn-1 mt-2"  data-aos="fade-left" data-aos-delay="100"><a href="about">Learn More</a></button>
                        </div>
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12 about-com-img d-flex justify-content-end">
                        <img src={aboutimg} alt="whatwedo" data-aos="fade-left" data-aos-delay="200"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;