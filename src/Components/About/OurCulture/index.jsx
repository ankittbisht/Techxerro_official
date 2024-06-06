import React from "react";
import './style.scss';
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css'; 

const Ourculture = () =>{
    const option={ 
        slideTransition: 'ease',
        autoplayTimeout: 2000,
        autoplaySpeed: 1000,
        navText:
        [
        `<svg width="41" height="9" viewBox="0 0 41 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.482353 4.11959C0.28709 4.31485 0.28709 4.63143 0.482353 4.82669L3.66433 8.00868C3.8596 8.20394 4.17618 8.20394 4.37144 8.00868C4.5667 7.81341 4.5667 7.49683 4.37144 7.30157L1.54301 4.47314L4.37144 1.64471C4.5667 1.44945 4.5667 1.13287 4.37144 0.937607C4.17618 0.742345 3.8596 0.742345 3.66433 0.937607L0.482353 4.11959ZM40.5972 3.97314L0.835907 3.97314L0.835907 4.97314L40.5972 4.97314L40.5972 3.97314Z" fill="white"/>
        </svg>`,
        `<svg width="41" height="9" viewBox="0 0 41 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.4837 4.8267C40.679 4.63144 40.679 4.31485 40.4837 4.11959L37.3017 0.937611C37.1065 0.742348 36.7899 0.742348 36.5946 0.937611C36.3994 1.13287 36.3994 1.44946 36.5946 1.64472L39.423 4.47314L36.5946 7.30157C36.3994 7.49683 36.3994 7.81342 36.5946 8.00868C36.7899 8.20394 37.1065 8.20394 37.3017 8.00868L40.4837 4.8267ZM0.368896 4.97314H40.1302V3.97314H0.368896V4.97314Z" fill="white"/>
        </svg>
        `],
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                dots:true,
            },

            600:{
                items:3,
                dots:true,
            },
            1200:{
                items:3,
                dots:true,
            },
            1300:{
                items:5,
                dots:true,
            }
        }
    }
    return(
        <>
        <section className="ourculture" id="corporate-values">
            <div className="container">
                <div className="row pb-2">
                    <div className="col-12 title">
                        <h2>Our <span style={{color:'#B70909'}}>Culture</span></h2>
                        <p>At TechXerro, our culture is built on innovation, collaboration, and a relentless commitment to <br/> client success. Our team to deliver exceptional brand empowerment solutions</p>
                    </div>
                </div>                
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <OwlCarousel className='owl-theme' {...option} loop margin={40} autoplay={true} nav={false} dots={true} autoplaySpeed={400} >
                            <div className="items">
                                <img src={require('../../../assets/culture/1.png')} alt="" />
                            </div>
                            <div className="items">
                                <img src={require('../../../assets/culture/2.png')} alt="" />
                            </div>
                            <div className="items">
                                <img src={require('../../../assets/culture/3.png')} alt="" />
                            </div>
                            <div className="items">
                                <img src={require('../../../assets/culture/4.png')} alt="" />
                            </div>
                            <div className="items">
                                <img src={require('../../../assets/culture/5.png')} alt="" />
                            </div>
                            <div className="items">
                                <img src={require('../../../assets/culture/7.jpg')} alt="" />
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
        {/* <section className="ourculture" id="corporate-values">
        <div className="container">
            <div className="row pb-5">
                <div className="col-12 text-center title">
                    <h3 data-aos="fade-right">Our culture</h3>
                    <p data-aos="fade-left">Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque <br/>lorem. Tempus at odio libero cras eget est vestibulum vel nisi. </p>
                </div>
            </div>
            <div className="row culture-img">
                <div className="col-4">
                    <img src={require('../../../assets/cultureimg1.png')} alt="" />
                    <h4>Lorem ipsum dolor sit amet consectetur. Facilisis</h4>
                    <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. </p>
                </div>
                <div className="col-4 pt-5">
                    <img src={require('../../../assets/cultureimg2.png')} alt="" />
                    <h4>Lorem ipsum dolor sit amet consectetur. Facilisis</h4>
                    <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. </p>
                </div>
                <div className="col-4" style={{paddingTop:'6rem'}}>
                    <img src={require('../../../assets/cultureimg3.png')} alt="" />
                    <h4>Lorem ipsum dolor sit amet consectetur. Facilisis</h4>
                    <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. </p>
                </div>
            </div>
        </div>
    </section> */}
    </>
    )
}

export default Ourculture;
