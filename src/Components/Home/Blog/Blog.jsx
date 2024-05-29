import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { images } from "../../../assets/images";
import "./Blog.scss";
import { blogData } from "./data";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

export default function Blog(props) {

  const  openCity=(evt, cityName)=> {
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
    evt.currentTarget.className += "active";
  }

  
  const option={ 
    autoplayHoverPause:true,
    
    responsive:{
        0:{
            items:1,
        },
        480:{
          items:1,
        },
        1000:{
            items:2,
        }
    } 
  }

  return (
    <div className="blog-container " >
      <div className="container">
        <div className="row title">        
          <div className="col-12">
            <span data-aos="fade-left">Our blogs</span>
            <h4 className="text-start">
              News & Insight from our experts
            </h4>
            <form action="" data-aos="fade-up">
              <label>
                <input type="email" placeholder="Enter Your Email" />
                <input type="submit" value="Get Started" />
              </label>
            </form>
          </div>
          {/* <div className="col-7">
            <p className="all-blog">
              All Blogs <img src={images.BlogArrow} alt="" />
            </p>
          </div> */}
        </div>        
      </div>
      <div className="container">
        
        <div className="row">
          <div className="col-12">          
            <div class="tab">
              <button class="tablinks" onClick={(e)=>openCity(e, 'Viewall')} >View All</button>
              <button class="tablinks" onClick={(e)=>openCity(e, 'design')} >Design</button>
              <button class="tablinks" onClick={(e)=>openCity(e, 'development')}>Development</button>
              <button class="tablinks" onClick={(e)=>openCity(e, 'marketing')}>Marketing</button>
            </div>

            <div id="Viewall" class="tabcontent" style={{display:'block'}}>
              <OwlCarousel className='owl-theme' {...option} loop margin={40} dots={true} autoplaySpeed={500} autoplayTimeout={3000}>
                {
                blogData.map((data) => {
                  return (
                      <div className="container" key={data.id}>
                        <div className="row">
                          <img src={data.img} alt="" />
                        </div>
                        <div className="row">
                          <div className="content">
                            <p className="content-title">{data.title}</p>
                            <p>{data.para}</p>

                            <div className="row">
                              <p className="col-6 author">{data.author}</p>
                              <p className="col-6 date">{data.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  );
                })
                }
              </OwlCarousel>
            </div>

            <div id="design" class="tabcontent">
              <OwlCarousel className='owl-them' {...option} loop margin={40} nav={false} dots={true} autoplaySpeed={5000} autoplayTimeout={3000}>              {
                blogData.map((data) => {
                  return (
                      <div className="container">
                        <div className="row">
                          <img src={data.img} alt="" />
                        </div>
                        <div className="row">
                          <div className="content">
                            <p className="content-title">{data.title}</p>
                            <p>{data.para}</p>

                            <div className="row">
                              <p className="col-6 author">{data.author}</p>
                              <p className="col-6 date">{data.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  );
                })}
              </OwlCarousel>
            </div>

            <div id="development" class="tabcontent">
              <OwlCarousel className='owl-theme' {...option} loop margin={40} nav={false} dots={true} autoplaySpeed={5000} autoplayTimeout={3000}>              {
                blogData.map((data) => {
                  return (
                      <div className="container" key={data.id}>
                        <div className="row">
                          <img src={data.img} alt="" />
                        </div>
                        <div className="row">
                          <div className="content">
                            <p className="content-title">{data.title}</p>
                            <p>{data.para}</p>

                            <div className="row">
                              <p className="col-6 author">{data.author}</p>
                              <p className="col-6 date">{data.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  );
                })}
              </OwlCarousel>
            </div> 

            <div id="marketing" class="tabcontent">
              <OwlCarousel className='owl-theme' {...option} loop margin={40} nav={false} dots={true} autoplaySpeed={5000} autoplayTimeout={3000}>                
                {blogData.map((data) => {
                  return (
                      <div className="container" key={data.id}>
                        <div className="row">
                          <img src={data.img} alt="" />
                        </div>
                        <div className="row">
                          <div className="content">
                            <p className="content-title">{data.title}</p>
                            <p>{data.para}</p>

                            <div className="row">
                              <p className="col-6 author">{data.author}</p>
                              <p className="col-6 date">{data.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>      
      </div>      
    </div>
  );
}
