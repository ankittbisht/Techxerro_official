import React, { useEffect, useRef, useState } from "react";
import "./Technologies.scss";
import VerticalSlider from "./Iconslides";  
import backgroundimg1 from '../../../assets/Home/technologies/ecom-min.png';
import backgroundimg2 from '../../../assets/Home/technologies/const-bg-min.jpg';
import backgroundimg3 from '../../../assets/Home/technologies/hospitality-min.jpg';
import backgroundimg4 from '../../../assets/Home/technologies/automotive-min.jpg';
import backgroundimg5 from '../../../assets/Home/technologies/sports-min.jpg';

export default function Technologies(props) {

  const inditems=[
    {
      id:1,
      tabid:'home',
      tablabel:'home-tab',
      backgroundimg:backgroundimg1,
      heading:[<h3>Crafting Your<br/>
      <span>Digital Marketplace</span></h3>],
      para:'we have enhanced online shopping experiences through robust website services, effective branding, and comprehensive IT solutions.',
      logos:[
        {
          logoid:1,
          img:<img src={require('../../../assets/Home/technologies/logo/logo1.png')} alt="Logo 1"/>
        },
        {
          logoid:2,
          img:<img src={require('../../../assets/Home/technologies/logo/logo3.png')} alt="Logo 1"/>
        },
        {
          logoid:3,
          img:<img src={require('../../../assets/Home/technologies/logo/logo4.png')} alt="Logo 1"/>
        },
      ],
      buttonlink:'#',    
    },
    {
      id:2,
      tabid:'construction',
      tablabel:'construction-tab',
      backgroundimg:backgroundimg2,
      heading:[<h3>Building Tomorrow,<br/>
      <span>Your Blueprint to Success</span></h3>],
      para:'For the construction sector, we have delivered tailored website services, strong brand identities, and innovative IT support to streamline project management and operations.',
      logos:[
        {
          logoid:1,
          img:<img src={require('../../../assets/Home/technologies/logo/logo2.png')} alt="Logo 1"/>
        },
      ],
      buttonlink:'#',    
    },
    {
      id:3,
      tabid:'hospitality',
      tablabel:'hospitality-tab',
      backgroundimg:backgroundimg3,
      heading:[<h3><span>Creating Experiences</span>, <br/>One Stay at a Time
      </h3>],
      para:'Creating inviting and functional websites, developed compelling branding strategies, and offered comprehensive IT solutions to elevate guest experiences and streamline administrative processes.',
      logos:[
        {
          logoid:1,
          img:<img src={require('../../../assets/Home/technologies/logo/logo5.png')} alt="Logo 1"/>
        },
      ],
      buttonlink:'#',    
    },
    {
      id:4,
      tabid:'automotive',
      tablabel:'automotive-tab',
      backgroundimg:backgroundimg4,
      heading:[<h3>Driving Innovation <span>Roadmap</span><br/> to Excellence</h3>],
      para:'The automotive industry with cutting-edge websites, distinctive branding, and IT services that enhance customer engagement, improve dealership management, and drive business growth.',
      logos:[
        {
          logoid:1,
          img:<img src={require('../../../assets/Home/technologies/logo/logo6.png')} alt="Logo 1"/>
        },
      ],
      buttonlink:'#',    
    },
    {
      id:5,
      tabid:'Sports',
      tablabel:'Sports-tab',
      backgroundimg:backgroundimg5,
      heading:[<h3><span>Game-Changing</span> <br/>Strategies to  Score</h3>],
      para:'Within the sports industry, we have provided dynamic website services, impactful branding, and advanced IT solutions to engage fans and optimize organizational efficiency.',
      logos:[
        {
          logoid:1,
          img:<img src={require('../../../assets/Home/technologies/logo/logo3.png')} alt="Logo 1"/>
        },
      ],
      buttonlink:'#',    
    }
  ]

  const ulRef = useRef(null);  
  const [activeItem, setActiveItem] = useState(null);

  // useEffect(()=>{
  //   if (ulRef.current) {
  //     const activeElement = ulRef.current.querySelector('li button.active');
  //     ulRef.current.querySelector('li button.active').al
  //     if (activeElement) {
  //       setActiveItem(activeElement.innerText); // or any other property you need
  //     }
  //   }
  // })
  const handleMenuClick =(e)=>{
    e.preventDefault();
    const dataPosition=e.target.dataset.position;

    e.target.parentElement.parentElement.classList.add(`pos${dataPosition}`); 
  
    document.querySelector('.menbar').style.width= e.target.offsetWidth + 'px';
    if(dataPosition==='0'){
      document.querySelector('.menbar').style.left= '0';      
    }
    else if(dataPosition==='100'){
      document.querySelector('.menbar').style.left= '145px';       
    }
    else if(dataPosition==='200'){
      document.querySelector('.menbar').style.left= '280px';       
    }
    else if(dataPosition==='300'){
      document.querySelector('.menbar').style.left= '420px';       
    }
    else if(dataPosition==='400'){
      document.querySelector('.menbar').style.left= '560px';      
    }
    else{
    }
  }

  return (
    <>
    <div className="technologies">
      <div className="container">
        <div className="row my-4 w-100">
          <div className="col-md-6 col-12">
            <h2 className="title" data-aos="fade-down">
              Powering every industry<br/>Powering all disruptors.
            </h2>
          </div>
          <div className="col-md-6 col-12">
              <VerticalSlider/>
          </div>    
        </div> 
        <ul className="nav nav-tabs" id="myTab" role="tablist" ref={ulRef}>
          <div className="menbar"></div>
          <li className="nav-item" role="presentation" onClick={(e)=>handleMenuClick(e)} >
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true" 
              data-position="0"
            >
              E-commerce
            </button>
          </li>
          <li className="nav-item" role="presentation" onClick={(e)=>handleMenuClick(e)}>
            <button
              className="nav-link"
              id="construction-tab"
              data-bs-toggle="tab"
              data-bs-target="#construction"
              type="button"
              role="tab"
              aria-controls="construction"
              aria-selected="false" 
              data-position="100" 
            >
              Construction
            </button>
          </li>
          <li className="nav-item active " role="presentation" onClick={(e)=>handleMenuClick(e)}>
            <button
              className="nav-link"
              id="hospitality-tab"
              data-bs-toggle="tab"
              data-bs-target="#hospitality"
              type="button"
              role="tab"
              aria-controls="hospitality"
              aria-selected="false"
              data-position="200"
            >
              Hospitality
            </button>
          </li>
          <li className="nav-item" role="presentation" onClick={(e)=>handleMenuClick(e)}>
            <button
              className="nav-link"
              id="automotive-tab"
              data-bs-toggle="tab"
              data-bs-target="#automotive"
              type="button"
              role="tab"
              aria-controls="automotive"
              aria-selected="false"
              data-position="300" 
            >
              Automotive
            </button>
          </li>
          <li className="nav-item" role="presentation" onClick={(e)=>handleMenuClick(e)}>
            <button
              className="nav-link"
              id="Sports-tab"
              data-bs-toggle="tab"
              data-bs-target="#Sports"
              type="button"
              role="tab"
              aria-controls="Sports"
              aria-selected="false"
              data-position="400" 
            >
              Sports
            </button>
          </li>
        </ul>

      <div className="tab-content" id="myTabContent">
      {
        inditems.map((obj)=>{
          return(
            <div
              className={obj.id===1 ? "tab-pane fade show active tech-container":"tab-pane fade tech-container"}
              id={obj.tabid}
              role="tabpanel"
              aria-labelledby={obj.tablabel}
              key={obj.id}
            >
              <div className="industrywrapper" style={{background:`url(${obj.backgroundimg})`,backgroundSize:'cover'}}>
                <div className="content">
                  {obj.heading}
                  <p>{obj.para}</p>
                  <div class="logos d-flex">
                    {obj.logos.map((logoobj)=>{
                      return(
                        <div key={logoobj.logoid}>
                          {logoobj.img}
                        </div>
                      )
                    })}
                  </div>
                  <button>Get Started</button>
                </div>
              </div>
            </div>
          )
        })
      }
        {/* <div
          className="tab-pane fade show active tech-container"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="industrywrapper">
            <div className="content">
              <h3>Powering every industry<br/>
              <span>Powering all disruptors.</span></h3>
              <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. </p>
              <div class="logos d-flex">
                <img src={require('../../../assets/techs/logo/logo (1).png')} alt="Logo 1"/>
                <img src={require('../../../assets/techs/logo/logo (3).png')} alt="Logo 3"/>
                <img src={require('../../../assets/techs/logo/logo (4).png')} alt="Logo 4"/>
              </div>
              <button>Get Started</button>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade tech-container"
          id="construction"
          role="tabpanel"
          aria-labelledby="construction-tab"
        >
          
          <div className="industrywrapper">
            <div className="content">
              <h3>Powering every industry<br/>
              <span>Powering all disruptors.</span></h3>
              <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. </p>
              <div class="logos d-flex">
                <img src={require('../../../assets/techs/logo/logo (2).png')} alt="Logo 2"/>
              </div>
              <button>Get Started</button>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade tech-container"
          id="hospitality"
          role="tabpanel"
          aria-labelledby="hospitality-tab"
        >
          
          <div className="industrywrapper">
            <div className="content">
              <h3>Powering every industry<br/>
              <span>Powering all disruptors.</span></h3>
              <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. </p>
              <div class="logos d-flex">
                <img src={require('../../../assets/techs/logo/logo (1).png')} alt="Logo 1"/>
                <img src={require('../../../assets/techs/logo/logo (2).png')} alt="Logo 2"/>
                <img src={require('../../../assets/techs/logo/logo (3).png')} alt="Logo 3"/>
                <img src={require('../../../assets/techs/logo/logo (4).png')} alt="Logo 4"/>
              </div>
              <button>Get Started</button>
            </div>
          </div>
        </div>
        
        <div
          className="tab-pane fade tech-container"
          id="automotive"
          role="tabpanel"
          aria-labelledby="automotive-tab"
        >       
        <div className="industrywrapper">
          <div className="content">
            <h3>Powering every industry<br/>
            <span>Powering all disruptors.</span></h3>
            <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. </p>
            <div class="logos d-flex">
              <img src={require('../../../assets/techs/logo/logo (1).png')} alt="Logo 1"/>
              <img src={require('../../../assets/techs/logo/logo (2).png')} alt="Logo 2"/>
              <img src={require('../../../assets/techs/logo/logo (3).png')} alt="Logo 3"/>
              <img src={require('../../../assets/techs/logo/logo (4).png')} alt="Logo 4"/>
            </div>
            <button>Get Started</button>
          </div>
        </div>   
        </div>

        <div
          className="tab-pane fade tech-container"
          id="Sports"
          role="tabpanel"
          aria-labelledby="Sports-tab"
        >       
          <div className="industrywrapper">
            <div className="content">
              <h3>Powering every industry<br/>
              <span>Powering all disruptors.</span></h3>
              <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. </p>
              <div class="logos d-flex">
                <img src={require('../../../assets/techs/logo/logo (1).png')} alt="Logo 1"/>
                <img src={require('../../../assets/techs/logo/logo (2).png')} alt="Logo 2"/>
                <img src={require('../../../assets/techs/logo/logo (3).png')} alt="Logo 3"/>
                <img src={require('../../../assets/techs/logo/logo (4).png')} alt="Logo 4"/>
              </div>
              <button>Get Started</button>
            </div>
          </div>   
    </div>*/}
      </div>
      </div>
    </div>
    </>
  );
}
