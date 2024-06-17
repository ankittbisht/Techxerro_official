import React, { useRef } from "react";
import "./CurvedCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "../../../assets/images";

export default function CurvedCarousel(props) {
  const ulRef = useRef();
  const swiperRef = useRef();
  const swiperRef2 = useRef();

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

  const workItems = [
    {
      id:1,
      img:images.workweb1,
      background:'#EDE8DD',
      heading: 'Fractile',
      para:' Crafting engaging visuals, driving brand recognition and engagement.'
    },
    {
      id:2,
      img:images.work2,
      background:'container4',
      heading: 'Ovate Textile',
      para:'Creating memorable brand identities, capturing essence.'
    },
    {
      id:3,
      img:images.workweb3,
      background:'container5',
      heading: 'Pegasus Drone',
      para:'Crafting visuals, bringing brands to life creatively with precision.'
    },
    {
      id:4,
      img:images.work2,
      background:'container2',
      heading: 'Website Design',
      para:' Crafting user-friendly interfaces, delivering memorable digital experiences effectively.'
    },
    {
      id:5,
      img:images.work1,
      background:'container1',
      heading: 'Logo Design',
      para:'Creating memorable brand identities, capturing essence.'
    },
    {
      id:6,
      img:images.work4,
      background:'container4',
      heading: 'Social media design',
      para:' Crafting engaging visuals, driving brand recognition and engagement.'
    },
    {
      id:3,
      img:images.work5,
      background:'container5',
      heading: 'Graphic Designing',
      para:'Crafting visuals, bringing brands to life creatively with precision.'
    },
    {
      id:4,
      img:images.work2,
      background:'container2',
      heading: 'Website Design',
      para:' Crafting user-friendly interfaces, delivering memorable digital experiences effectively.'
    },
  ]

  return (
    <div className="curved-wrapper">
      <div className="container">
        <div className="row mx-auto">
          <h2 className="title" style={{ textAlign: "left" }}>
            Our <span style={{color:'#EC1A1A'}}>Work</span>
          </h2>
          <h2 className="text-left title">
          Crafting 360° Value: Empowering Clients' Evolution
          </h2>
            <ul className="nav nav-tabs" id="myTab" role="tablist" ref={ulRef}>
              <li className="nav-item" role="presentation" onClick={(e)=>handleMenuClick(e)} >
                <button
                  className="nav-link active"
                  id="graphic-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#graphic"
                  type="button"
                  role="tab"
                  aria-controls="graphic"
                  aria-selected="true" 
                  data-position="0"
                >
                   Graphics
                </button>
              </li>
              <li className="nav-item" role="presentation" onClick={(e)=>handleMenuClick(e)}>
                <button
                  className="nav-link"
                  id="development-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#development"
                  type="button"
                  role="tab"
                  aria-controls="development"
                  aria-selected="false" 
                  data-position="100" 
                >
                  Development
                </button>
              </li>              
          </ul>
        </div>
      
      </div>

      

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active tech-container"
          id='graphic'
          role="tabpanel"
          aria-labelledby="graphic-tab"
        >
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="CurvedSwiper"
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={800}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {
              workItems.map((obj)=>{
                return(
                  
                  <SwiperSlide 
                  className={obj.background} 
                  key={obj.id} style={{background:`${obj.background}`}}>
                    <div className="container">
                      <div className="row">
                        <img src={obj.img} alt="" />
                      </div>
                      <div className="row">
                        <div className="content animate__animated animate__fadeInUp">
                          <h5>{obj.heading}</h5>
                          <p>
                            {obj.para}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }   
            <div className="custom-nav">
              <button
                className="btn-prev"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <svg
                  width="29"
                  height="37"
                  viewBox="0 0 29 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4057 13.38L8.5957 21.19L16.4057 29"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                className="btn-next"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <svg
                  width="29"
                  height="37"
                  viewBox="0 0 29 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5943 13.38L20.4043 21.19L12.5943 29"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>               
          </Swiper>     
        </div>  
        <div
          className="tab-pane fade tech-container"
          id='development'
          role="tabpanel"
          aria-labelledby='development-tab'
        >  
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="CurvedSwiper"
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={800}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
            onBeforeInit={(swiper) => {
              swiperRef2.current = swiper;
            }}
          >
            {
              workItems.map((obj)=>{
                return(
                  
                  <SwiperSlide className={obj.background} key={obj.id}>
                    <div className="container">
                      <div className="row">
                        <img src={obj.img} alt="" />
                      </div>
                      <div className="row">
                        <div className="content animate__animated animate__fadeInUp">
                          <h5>{obj.heading}</h5>
                          <p>
                            {obj.para}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }   
            <div className="custom-nav">
              <button
                className="btn-prev"
                onClick={() => swiperRef2.current?.slidePrev()}
              >
                <svg
                  width="29"
                  height="37"
                  viewBox="0 0 29 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4057 13.38L8.5957 21.19L16.4057 29"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                className="btn-next"
                onClick={() => swiperRef2.current?.slideNext()}
              >
                <svg
                  width="29"
                  height="37"
                  viewBox="0 0 29 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5943 13.38L20.4043 21.19L12.5943 29"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>       
          </Swiper>      
        </div>  
      </div>  
    </div>
  );
}
