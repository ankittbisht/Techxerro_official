import React from "react";
import "./style.scss";

const ContactUs = () => {
  return (
    <>
      <section className="contact-wrapper">
        <section className="contact-banner">
          <div className="container">
            <div className="row">
              <div className= "col-sm-6 col-md-7 col-lg-7">
                <h3 >
                  Let's chat about your new project
                </h3>
                <p >
                  send us a quick email at solutions@techxerro.com
                </p>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-5 ">
                <div className="contact-info">
                  <span >
                    Prefer to talk?
                  </span>
                  <p >
                    +91-9876543210
                  </p>
                </div>
                <div className="contact-info">
                  <span >
                    Our Office address
                  </span>
                  <p>
                    A-28, Sector 4,
                    <br />
                    Noida, Uttar Pradesh,
                    <br />
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
              <div className="col-xl-6 col-lg-4">
                <div className="consult-card">
                  <div>
                    <img
                      src={require("../../../assets/consultimg.png")}
                      alt=""
                      
                    />
                    <h3 >
                      Free 30min consultation
                    </h3>
                    <p >
                      Have a new project in mind? Schedule a 30-minute discovery
                      call or fill out the quick form, and together we'll
                      explore the possibilities.
                    </p>
                    <button
                      className="btn-white d-flex gap-4 align-items-center justify-content-center"
                    
                    >
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
              </div>
              <div className="col-xl-6 col-lg-4 offset-lg-4 offset-xl-0" >
                <form>
                  <div
                    className="d-flex gap-2"
                   
                  >
                    <div>
                      <label>
                        Name
                        <input type="text" placeholder="Your Name" />
                      </label>
                    </div>
                    <div>
                      <label>
                        Email
                        <input type="text" placeholder="Your Email" />
                      </label>
                    </div>
                  </div>
                  <div
                    className="d-flex gap-2"
                    
                  >
                    <div>
                      <label>
                        Mobile
                        <input type="text" placeholder="Phone No.  " />
                      </label>
                    </div>
                    <div>
                      <label>
                        Estimated Budget
                        <input type="text" placeholder="Select One" />
                      </label>
                    </div>
                  </div>
                  <div
                    className="d-flex gap-2"
                   
                  >
                    <div>
                      <label>
                        Organisation
                        <input type="text" placeholder="XYZ" />
                      </label>
                    </div>
                    <div>
                      <label>
                        Industry
                        <input type="text" placeholder="Industry" />
                      </label>
                    </div>
                  </div>
                  <div >
                    <label>
                      Project Summary
                      <textarea
                        placeholder="Project Brief"
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                      ></textarea>
                    </label>
                  </div>
                  <input type="submit" value="Send "  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default ContactUs;
