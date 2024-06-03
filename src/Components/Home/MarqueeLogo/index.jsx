import React from "react";
import logo1 from '../../../assets/Home/Logo/Group 323.png';
import logo2 from '../../../assets/Home/Logo/Group 324.png';
import logo3 from '../../../assets/Home/Logo/Group 325.png';
import logo4 from '../../../assets/Home/Logo/Group 326.png';
import logo5 from '../../../assets/Home/Logo/Group 329.png';
import logo6 from '../../../assets/Home/Logo/Group 330.png';
import logo7 from '../../../assets/Home/Logo/Group 331.png';
import logo8 from '../../../assets/Home/Logo/Group 332.png';
import logo9 from '../../../assets/Home/Logo/Group 334.png';
import logo10 from '../../../assets/Home/Logo/Group 335.png';
import './style.scss';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Marqueelogo = () =>{
    const logos=[
        {
            id:1,
            logo:logo1,
        },
        {
            id:2,
            logo:logo2,
        },
        {
            id:3,
            logo:logo3,
        },
        {
            id:4,
            logo:logo4,
        },
        {
            id:5,
            logo:logo5,
        },
        {
            id:6,
            logo:logo6,
        },
        {
            id:7,
            logo:logo7,
        },
        {
            id:8,
            logo:logo8,
        },
        {
            id:9,
            logo:logo9,
        },
        {
            id:10,
            logo:logo10,
        },
    ]

    const options={
        nav:false,
        loop:true,
        items:9,
        autoplay:true,
        // slideTransition: 'linear',        
        autoplayTimeout: 2000, // Speed of the scroll 
        smartSpeed: 1000, // Transition speed
        autoplayHoverPause: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            },
            1300:{
                items:7
            },
            1440:{
                items:9
            }
        }
    }
    return(
        <>
            <div className="marquee d-flex gap-3 align-items-center" >
                <div className="marqueewrapper">
                    {logos.map((obj)=>{
                        return(
                            <div key={obj.id} className="logitem">
                                <img src={obj.logo} alt="" />
                            </div>
                        )
                    })}
                </div>
                <div className="marqueewrapper">
                    {logos.map((obj)=>{
                        return(
                            <div key={obj.id} className="logitem">
                                <img src={obj.logo} alt="" />
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </>
    )
}
export default Marqueelogo