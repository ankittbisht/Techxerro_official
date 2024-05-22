import React from "react";
import './style.scss';

const ContactUs = ()=>{
    return(
        <>
        <section className="contact-wrapper">
            <section className="contact-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <h3 data-aos="fade-up" data-aos-delay="100">Let's chat about your new project</h3>
                            <p data-aos="fade-up" data-aos-delay="300">send us a quick email at hello@transparenthouse.com</p>
                        </div>
                        <div className="col-5 ">
                            <div className="contact-info">
                                <span data-aos="fade-left" data-aos-delay="100">Prefer to talk?</span>
                                <p data-aos="fade-right" data-aos-delay="100">+91-9876543210</p>
                            </div>
                            <div className="contact-info">
                                <span data-aos="fade-left" data-aos-delay="100">Our Office address</span>
                                <p data-aos="fade-right" data-aos-delay="100">A-28, Sector 4,<br/>
                                    Noida, Uttar Pradesh,<br/>
                                    India
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section className="contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="consult-card">
                                <div>
                                    <img src={require('../../../assets/consultimg.png')} alt="" data-aos="fade-down" data-aos-delay="100"/>
                                    <h3 data-aos="fade-left" data-aos-delay="100">Free 30min consultation</h3>
                                    <p data-aos="fade-right" data-aos-delay="100">Have a new project in mind? Schedule a 30-minute discovery call or fill out the quick form, and together we'll explore the possibilities.</p>
                                    <button className="btn-white d-flex gap-4 align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="100">
                                        Schedule a call 
                                        <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.3536 4.85355C16.5488 4.65829 16.5488 4.34171 16.3536 4.14645L13.1716 0.964467C12.9763 0.769205 12.6597 0.769205 12.4645 0.964467C12.2692 1.15973 12.2692 1.47631 12.4645 1.67157L15.2929 4.5L12.4645 7.32843C12.2692 7.52369 12.2692 7.84027 12.4645 8.03553C12.6597 8.2308 12.9763 8.2308 13.1716 8.03554L16.3536 4.85355ZM-4.37114e-08 5L16 5L16 4L4.37114e-08 4L-4.37114e-08 5Z" fill="black"/>
                                        </svg>

                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6" >
                            <form>
                                <div className="d-flex gap-2"  data-aos="fade-left" data-aos-delay="100">
                                    <div>
                                        <label>Name
                                            <input type="text"  placeholder="Your Name"/>
                                        </label>                                        
                                    </div>
                                    <div>
                                        <label>Email
                                            <input type="text"  placeholder="Your Email"/>
                                        </label>                                        
                                    </div>
                                </div>
                                <div className="d-flex gap-2"  data-aos="fade-left" data-aos-delay="100">
                                    <div>
                                        <label>Mobile
                                            <input type="text"  placeholder="Phone No.  "/>
                                        </label>                                        
                                    </div>
                                    <div>
                                        <label>Estimated Budget
                                            <input type="text"  placeholder="Select One"/>
                                        </label>                                        
                                    </div>
                                </div>
                                <div className="d-flex gap-2"  data-aos="fade-left" data-aos-delay="100">
                                    <div>
                                        <label>Organisation
                                            <input type="text"  placeholder="XYZ"/>
                                        </label>                                        
                                    </div>
                                    <div>
                                        <label>Industry
                                            <input type="text"  placeholder="Industry"/>
                                        </label>                                        
                                    </div>
                                </div>
                                <div  data-aos="fade-left" data-aos-delay="100">
                                    <label>
                                        <textarea placeholder="Project Brief" name="" id="" cols="30" rows="5"></textarea>
                                    </label>
                                </div>
                                <input type="submit" value="Send " data-aos="fade-up"/>

                            </form>
                        </div>
                    </div>
                </div>
            </section>             
        </section>
        </>
    )
}
export default ContactUs;