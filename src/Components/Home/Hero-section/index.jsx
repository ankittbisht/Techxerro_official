import React, { useEffect }  from 'react';
import './style.scss';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const HeroSection = () => {

    const items={
        nav:true,
        navText:
        [`<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.4057 17.3036L1.5957 9.49359L9.4057 1.68359" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
        `,
        `<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.02789 1.06359L8.83789 8.87359L1.02789 16.6836" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `],
        smartSpeed: 100,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',    
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1,
            },
            // breakpoint from 480 up
            480 : {
                items:1,
            },
            // breakpoint from 768 up
            768 : {
                items:1
            },
            1028:{
                items:1
            }
        }
    }

    useEffect(()=>{
        let dots = document.querySelectorAll('.Hero-section .hide-on-mobile .owl-items');
        let numberofSlides = dots.length;

        for(let x=0; x<numberofSlides;x++){   
            console.log(dots[x].className);
            if(dots[x].classList.contains('active')){
                console.log(x+' is the active slide');
            }
        }
    })

    return ( 
        <>
        <section className='hero-sec-wrapper'>
            <div className="container">
                {/* <OwlCarousel className='owl-theme hide-on-mobile' {...items} items={1} loop margin={40} nav={false} dots={false} autoplaySpeed={5000} autoplayTimeout={3000}> */}
                
                <div className="row Hero-section align-items-center">                         
                    <div className="col-sm-6 col-12 pd50 slider-content" style={{color:'#fff', height:'100%',padding:'80px 0px 50px',display:'flex',alignItems:'center'}}>
                        <div>
                            <div className="bannerText">                                
                                <div>
                                    <h6  data-aos="fade-left" data-aos-delay="100">Welcome, we're</h6>
                                    <h2  data-aos="fade-right" data-aos-delay="200">TechXerro</h2>
                                </div>
                            </div>

                            <div className="content align-items-center pb-2" data-aos="fade-left" data-aos-delay="200">
                                <p>Experience One-Stop Brand Empowerment with TechXerro </p>
                            </div>

                            <button className="btn-1" data-aos="fade-up" data-aos-delay="200"><a href="#">Get started</a></button>
                        </div>   
                    </div>

                    {/* <div className="col-sm-6 col-12 d-flex justify-content-center" /> */}
                    <div className="col-sm-6 col-12 d-flex justify-content-end" >
                        <div className='banner-1 mt-2'>
                            <img src={require('../../../assets/logobanner.png')} alt=""  data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200"/>
                        </div>
                        <img src={require('../../../assets/Home/paralleximg.png')} alt="" style={{position:'absolute',bottom:'0',right:'0',width:'43%'}}  data-aos="fade-left" />
                    </div>
                </div>
                
                    

                    {/* <div className='slider-wrapper d-flex align-items-center'>
                        <div className="col-lg-6 col-12 d-flex justify-content-center" >
                            <div className='banner-2'>
                                <img src={require('../../../assets/Home/banner2.png')} alt="" style={{position: 'absolute', width: '40%',height:'90%',top: '0px',left: '20px'}}/>
                            </div>
                        </div>  
                        <div className="col-lg-6 col-12 pd50 slider-content" style={{background:'#fff',color:'#000', height:'85%', width:'55%', position:'absolute',top:'0',right:'0',padding:'50px 100px',display:'flex',alignItems:'center'}}>
                            <div>
                                <div className="bannerText">
                                    <div>
                                        <span className='blueclr'>IT Service Agency</span> 
                                        <h3 style={{color:'#000'}}>Designing is the main part of every company</h3>
                                    </div>
                                </div>

                                <div className="content align-items-center">
                                    <p style={{color:'#000'}}>We partner with startups and other companies that are mission-oriented and want to set new standards for sustainable growth. </p>
                                </div>
                                <button className="btn">Get started</button>
                            </div>    
                        </div>
                    </div>

                    <div className='slider-wrapper d-flex align-items-center'>
                        <div className="col-lg-6 col-12 d-flex justify-content-center" >
                            <div className='banner-1'>
                                <img src={require('../../../assets/Home/banner3.png')} alt=""/> 
                            </div>
                        </div>  
                        <div className="col-lg-6 col-12 pd50 slider-content" style={{background:'#fff',color:'#000', height:'85%', width:'55%', position:'absolute',top:'0',right:'0',padding:'50px 100px',display:'flex',alignItems:'center'}}>
                            <div>
                                <div className="bannerText" >
                                    <div>
                                        <span className='blueclr'>IT Service Agency</span> 
                                        <h3 style={{color:'#000'}}>Digital marketing is the key of bussiness growth</h3>
                                    </div>
                                </div>

                                <div className="content align-items-center">
                                    <p style={{color:'#000'}}>We partner with startups and other companies that are mission-oriented and want to set new standards for sustainable growth. </p>
                                </div>

                                <button className="btn">Get started</button>
                            </div> 
                        </div>
                    </div> */}
                {/*         
                    <div className='slider-wrapper d-flex align-items-center'>
                        <div className="col-lg-6 col-12 d-flex justify-content-center" >
                            <div className='banner-1'>
                                <img src={require('../../img/banner-4.png')} alt=""/> *
                            </div>
                        </div>  
                        <div className="col-lg-6 col-12 pd50 slider-content">
                            
                                <div className="bannerText" >
                                    <div>
                                        <span className='blueclr'>IT Service Agency</span> 
                                        <h3>Web & mobile app development</h3>
                                    </div>
                                </div>

                                <div className="content align-items-center">
                                    <p>We partner with startups and other companies that are mission-oriented and want to set new standards for sustainable growth. </p>
                                </div>

                                <button className="blue-btn">Get started</button>

                        </div>
                    </div> */}

                    {/* <div className='nav-wrapper'></div> */}

                {/* </OwlCarousel>   */}
                        

                {/* <OwlCarousel className='owl-theme hide-on-desktop' items={1} loop margin={40} autoplay={false} dots={true} autoplaySpeed={5000} autoplayTimeout={3000}>
                    {sliderData ? 
                        
                        sliderData.map((speckey)=>{
                            return(
                                <div className="row align-items-center" key={`MHS-${speckey.id}`}>
                                    <div className="col-6">
                                        <div className="bannerText" >
                                            <h2> {speckey.heading}</h2>
                                        </div> 
                                    </div>
                                    <div className="col-6" >
                                        {speckey.banner}
                                    </div>  
                                    <div className="col-12 " ></div>
                                        <div className="content align-items-center">
                                            <a href={speckey.link}>  
                                                <svg width="145" height="89" viewBox="0 0 145 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="44" cy="44.7142" r="43.5" stroke="black"/>
                                                    <path d="M144.354 48.0678C144.549 47.8725 144.549 47.5559 144.354 47.3607L141.172 44.1787C140.976 43.9834 140.66 43.9834 140.464 44.1787C140.269 44.374 140.269 44.6905 140.464 44.8858L143.293 47.7142L140.464 50.5427C140.269 50.7379 140.269 51.0545 140.464 51.2498C140.66 51.445 140.976 51.445 141.172 51.2498L144.354 48.0678ZM44 48.2142H144V47.2142H44V48.2142Z" fill="black"/>
                                                    <rect x="40" y="43.7142" width="8" height="8" fill="#0156FF"/>
                                                </svg>
                                            </a>

                                            <p>{speckey.content}</p>
                                        </div>
                                    
                                </div>
                            )
                        })
                        :
                        <></>
                    }

                </OwlCarousel>   */}
            </div>
        </section>

        </>

     );

}
 
export default HeroSection;