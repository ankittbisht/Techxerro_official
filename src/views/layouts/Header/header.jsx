import React, { useState } from "react";
import { images } from "../../../assets/images";
import "./header.scss";
import { Link } from "react-router-dom";
import { ServiceMenuList } from "./menulist.jsx";

const Header = () => {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isAppointmentOpen, setisAppointmentOpen] = useState(false);
  const [isLeftMenu, setIsLeftMenu] = useState(false);
  const [menuOpen, setmenuOpen] = useState(false);
  const [menuOpenAbout, setmenuOpenAbout] = useState(false);
  const [openAboutusDropdrown, setOpenAboutusDropdrown]= useState(false);

  const openCity = (evt, cityName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  const dropdownHandler=(e)=>{
    e.preventDefault();
    setOpenAboutusDropdrown(!openAboutusDropdrown);
  }

  const closeAllMenu = () => {
    setIsCompanyOpen(false);
    setIsServiceOpen(false);
    setisAppointmentOpen(false);
    setIsLeftMenu(false);
  };

  const handleMenu = (e) => {
    e.preventDefault();
    // console.log(e.target.nextElementSibling.style);
    // e.target.nextElementSibling.classList.toggle("d-flex");
    setmenuOpen(!menuOpen);
    if (menuOpenAbout === true) {
      setmenuOpenAbout(!menuOpenAbout);
    } else {
    }
  };

  const handleAboutMenu = (e) => {
    e.preventDefault();
    // console.log(e.target.nextElementSibling.style);
    // e.target.nextElementSibling.classList.toggle("d-flex");
    setmenuOpenAbout(!menuOpenAbout);
    if (menuOpen === true) {
      setmenuOpen(false);
    } else {
    }

    console.log(menuOpen);
  };

  //sidemenu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav>
        <div className="desktop-menu container">
          <div className="row align-items-center">
            <div className="col-3 d-flex gap-lg-3 gap-xxl-4 align-items-center p-0">
              <button className="sidemenu" onClick={toggleMenu}>
                <svg
                  width="35"
                  height="11"
                  viewBox="0 0 35 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.65918"
                    width="34.9854"
                    height="1.88072"
                    fill="white"
                  />
                  <rect
                    y="8.55859"
                    width="34.9854"
                    height="1.88072"
                    fill="#EC1A1A"
                  />
                </svg>
              </button>
              <div className={`sidemenu1 ${isOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={closeMenu}>
                  <svg
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.732794"
                      y1="1.31955"
                      x2="13.7328"
                      y2="15.3195"
                      stroke="white"
                      stroke-width="2"
                    ></line>
                    <line
                      x1="13.7809"
                      y1="0.624695"
                      x2="1.78087"
                      y2="15.6247"
                      stroke="white"
                      stroke-width="2"
                    ></line>
                  </svg>
                </button>

                {/* Menu content goes here */}
                <ul>
                  <li>
                    <h6>Prefer to talk?</h6>
                    +91-9876543210
                  </li>
                  <li>
                    <h6>Our Office address</h6>
                    A-28, Sector 4, Noida,
                    <br />
                    Uttar Pradesh, India
                  </li>
                  <li>
                    {" "}
                    <h6>
                      send us a quick email at
                    </h6>solutions@techxerro.com{" "}
                  </li>
                  <li>
                    {" "}
                    <h6>
                      {" "}
                      Let's chat about your new project send us a quick email at
                    </h6>
                    solutions@techxerro.com
                  </li>
                  {/* Add more menu items as needed */}
                </ul>
                <div class="social-icons">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-facebook"></i>
                  </a>
                </div>
              </div>
              <a href="/">
                <img src={images.Logo} className="logo" alt="" />
              </a>
            </div>

            {/* Menu */}
            <div className="col-xl-7 col-md-9 d-flex align-items-center justify-content-md-start justify-content-sm-end">
              <ul className="menu d-flex align-items-center mb-0 gap-4 p-0">
                <li>
                  <Link to ="/">Home</Link>
                </li>
                <li className="drop-menu">
                  <a
                    className="d-flex align-items-center justify-content-center gap-2"
                    onClick={(e) => handleAboutMenu(e)}
                  >
                    About us
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.3902 5.7154L9.84025 1.26527C9.94325 1.16235 10 1.02495 10 0.878448C10 0.731945 9.94325 0.594548 9.84025 0.491622L9.51261 0.163901C9.29911 -0.0493492 8.95212 -0.0493492 8.73895 0.163901L5.00207 3.90078L1.26105 0.159754C1.15804 0.0568284 1.02072 -3.92497e-07 0.874302 -3.98897e-07C0.727717 -4.05304e-07 0.590401 0.0568284 0.487312 0.159754L0.159754 0.487475C0.0567465 0.590483 -3.18131e-08 0.727799 -3.82169e-08 0.874301C-4.46208e-08 1.0208 0.0567464 1.1582 0.159754 1.26113L4.61386 5.7154C4.7172 5.81857 4.85516 5.87524 5.00183 5.87491C5.14906 5.87524 5.28695 5.81857 5.3902 5.7154Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <div
                    className="dropdown row"
                    style={{
                      display: `${menuOpenAbout ? "flex" : "none"}`,
                      height: "375px",
                    }}
                  >
                    <div
                      className="col-7 d-flex "
                      style={{ justifyContent: "space-around" }}
                    >
                      <ul>
                        <li>
                          <a href="/about">
                            <div className="menutitle">Who We Are</div>
                            <div className="menusubtitle">
                              Get to know about us
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="/team">
                            <div className="menutitle">Our Team</div>
                            <div className="menusubtitle">
                              Get to know team behind Techxerro
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="/about#corporate-values">
                            <div className="menutitle">Corporate Values</div>
                            <div className="menusubtitle">
                              Check out Techxerro's Values
                            </div>
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="/career">
                            <div className="menutitle">Career</div>
                            <div className="menusubtitle">
                              Find Opportunities
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="/about#service-avail">
                            <div className="menutitle">Why TechXerro</div>
                            <div className="menusubtitle">
                              Understanding the "why"
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-5 p-0">
                      <div className="info">
                        <svg
                          width="15"
                          height="17"
                          viewBox="0 0 15 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={(e) => handleAboutMenu(e)}
                          style={{
                            position: "absolute",
                            top: "5%",
                            right: "5%",
                          }}
                        >
                          <line
                            x1="0.732794"
                            y1="1.31955"
                            x2="13.7328"
                            y2="15.3195"
                            stroke="white"
                            stroke-width="2"
                          />
                          <line
                            x1="13.7809"
                            y1="0.624695"
                            x2="1.78087"
                            y2="15.6247"
                            stroke="white"
                            stroke-width="2"
                          />
                        </svg>
                        <h6>
                          Your one-stop brand empowerment hub, leveling the
                          playing field with tailored strategies and a
                          commitment to your success.
                        </h6>
                        <button className="d-flex align-items-center btnwhite">
                          <a href="/contact">
                            Get In touch
                            <svg
                              width="27"
                              height="34"
                              viewBox="0 0 27 34"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0943 9.88L17.9043 17.69L10.0943 25.5"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="drop-menu">
                  <a
                    className="d-flex align-items-center justify-content-center gap-2"
                    href="#"
                    onClick={(e) => handleMenu(e)}
                  >
                    Services
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.3902 5.7154L9.84025 1.26527C9.94325 1.16235 10 1.02495 10 0.878448C10 0.731945 9.94325 0.594548 9.84025 0.491622L9.51261 0.163901C9.29911 -0.0493492 8.95212 -0.0493492 8.73895 0.163901L5.00207 3.90078L1.26105 0.159754C1.15804 0.0568284 1.02072 -3.92497e-07 0.874302 -3.98897e-07C0.727717 -4.05304e-07 0.590401 0.0568284 0.487312 0.159754L0.159754 0.487475C0.0567465 0.590483 -3.18131e-08 0.727799 -3.82169e-08 0.874301C-4.46208e-08 1.0208 0.0567464 1.1582 0.159754 1.26113L4.61386 5.7154C4.7172 5.81857 4.85516 5.87524 5.00183 5.87491C5.14906 5.87524 5.28695 5.81857 5.3902 5.7154Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <div className="dropdown row" style={{display: `${menuOpen ? "flex" : "none"}`, height: "420px",}}>
                    <div className="col-5 p-0">
                      <div className="service-info info">
                        <h2>Our Services</h2>
                          <div className="tab">
                            {
                              ServiceMenuList.map((obj)=>{
                                return(
                                  <button className="tablinks" onClick={(e) => openCity(e, obj.menuid)} key={obj.id}>
                                    {obj.menu}
                                  </button>
                                )
                              })
                            }   
                        </div>
                      </div>
                    </div>
                    <div className="col-7" style={{ padding: "0 80px" }}>
                      <div className="col-11 d-flex justify-content-end pt-5">
                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={(e) => handleMenu(e)} >
                          <line x1="0.732794" y1="1.31955" x2="13.7328" y2="15.3195" stroke="black" stroke-width="2" />
                          <line x1="13.7809" y1="0.624695" x2="1.78087" y2="15.6247" stroke="black" stroke-width="2" />
                        </svg>
                      </div>

                      <hr style={{ color: "#00000030", opacity: "1",width: "95%",}}/>

                      <div className="d-flex" style={{ padding: "0px", gap: "90px" }}>
                        {
                          ServiceMenuList.map((obj)=>{    
                            return(
                              <div id={obj.menuid} className="tabcontent" key={obj.id} style={{style: `${obj.menuid==='Enterpriseitsolution' ? 'block': 'none'}`}}>
                                <ul className="servicelist">
                                  { obj.submenu.map((submenuobj)=>{
                                    return(
                                      <>
                                        <li className="d-flex gap-3" key={submenuobj.id}>
                                          <div className="menutitle">{submenuobj.submenu}</div>
                                        </li>
                                      </>
                                    )
                                  })}                                
                                </ul>      
                              </div>
                            )                         
                          })
                        }                                     
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#corporate-values">Portfolio</a>
                </li>
                <li>
                  <a href="/contact">Contact us</a>
                </li>
                <li>
                  <a href="/blogs">Blog</a>
                </li>
                <li>
                  <a href="/technology">Tech</a>
                </li>
              </ul>
            </div>

            <div className="col-xl-2 col-md-12  col-2 d-xl-flex justify-content-end d-lg-none">
              <button className="d-flex align-items-center btnwhite">
                <a href="contact">
                  Get In touch
                  <svg
                    width="27"
                    height="34"
                    viewBox="0 0 27 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0943 9.88L17.9043 17.69L10.0943 25.5"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="mobile container">
          <div className="row">
            <div className="col-3 d-flex justify-contents-start">
              <img src={images.Logo} alt="" id="mobilelogo" />
            </div>
            <div className="col-6"></div>
            <div className="col-3 d-flex justify-content-end">
              <button className="sidemenu">
                <svg
                  width="35"
                  height="18"
                  viewBox="0 0 35 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.65918"
                    width="34.9854"
                    height="1.88072"
                    fill="white"
                  />
                  <rect
                    y="8.55859"
                    width="34.9854"
                    height="1.88072"
                    fill="white"
                  />
                  <rect
                    y="16.65918"
                    width="34.9854"
                    height="1.88072"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="menulist" >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <img src={images.Logo} className="logo" alt="" />
                <ul style={{padding:'0px 0 10px 0 ', listStyleType:'none',color:'#fff'}}> 
                  <li>
                    <Link to ="/">Home</Link>
                  </li>
                  <li>
                    <span 
                    // onClick={(e)=>dropdownHandler(e)}
                    >About Us &nbsp;
                      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7.5 7L13 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </span>
                    {/* <ul style={{ display:`${openAboutusDropdrown ? 'block' : 'none'}`,padding:'5px 10px',fontSize:'24px', listStyleType:'none',color:'#fff'}}>
                      <li>Who We are</li>
                      <li>Our Team</li>
                      <li>Corporate Values</li>
                      <li>Career</li>
                      <li>Why Techxerro</li>
                    </ul> */}
                  </li>
                  <li>
                    <a href="/">Services&nbsp;
                      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7.5 7L13 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#corporate-values">Portfolio</a>
                  </li>
                  <li>
                    <a href="/contact">Contact us</a>
                  </li>
                  <li>
                    <a href="/blogs">Blog</a>
                  </li>
                  <li>
                    <a href="/technology">Tech</a>
                  </li>
                </ul>

                <div className="close">
                  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="45" cy="45" r="45" fill="white" fill-opacity="0.65"/>
                    <line x1="25.9092" y1="61.9739" x2="61.9782" y2="25.9049" stroke="black" stroke-width="3" stroke-linecap="round"/>
                    <line x1="61.9783" y1="64.0957" x2="25.9093" y2="28.0267" stroke="black" stroke-width="3" stroke-linecap="round"/>
                  </svg>

                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
