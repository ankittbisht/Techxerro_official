import React from "react";
import logo1 from '../../../assets/Home/Logo/Group 323.png';
import colorlogo1 from '../../../assets/Home/Logo/colorlogo/mnm.png';
import logo2 from '../../../assets/Home/Logo/Group 324.png';
import colorlogo2 from '../../../assets/Home/Logo/colorlogo/allsports.png';
import logo3 from '../../../assets/Home/Logo/Group 325.png';
import colorlogo3 from '../../../assets/Home/Logo/colorlogo/pegasus.png';
import logo4 from '../../../assets/Home/Logo/Group 326.png';
import colorlogo4 from '../../../assets/Home/Logo/colorlogo/okc.png';
import logo5 from '../../../assets/Home/Logo/Group 329.png';
import colorlogo5 from '../../../assets/Home/Logo/colorlogo/fractile.png';
import logo6 from '../../../assets/Home/Logo/Group 330.png';
import colorlogo6 from '../../../assets/Home/Logo/colorlogo/lslogo.png';
import logo7 from '../../../assets/Home/Logo/Group 331.png';
import colorlogo7 from '../../../assets/Home/Logo/colorlogo/vitilogistics.png';
import logo8 from '../../../assets/Home/Logo/Group 332.png';
import colorlogo8 from '../../../assets/Home/Logo/colorlogo/suhasystem.png';
import logo9 from '../../../assets/Home/Logo/Group 334.png';
import colorlogo9 from '../../../assets/Home/Logo/colorlogo/viti.png';
import logo10 from '../../../assets/Home/Logo/Group 335.png';
import colorlogo10 from '../../../assets/Home/Logo/colorlogo/flashmuscle.png';
import './style.scss'; 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Marqueelogo = () =>{
    const logos=[
        {
            id:1,
            logo:logo1,
            hoverlogo:colorlogo1,
        },
        {
            id:2,
            logo:logo2,
            hoverlogo:colorlogo2,
        },
        {
            id:3,
            logo:logo3,
            hoverlogo:colorlogo3,
        },
        {
            id:4,
            logo:logo4,
            hoverlogo:colorlogo4,
        },
        {
            id:5,
            logo:logo5,
            hoverlogo:colorlogo5,
        },
        {
            id:6,
            logo:logo6,
            hoverlogo:colorlogo6,
        },
        {
            id:7,
            logo:logo7,
            hoverlogo:colorlogo7,
        },
        {
            id:8,
            logo:logo8,
            hoverlogo:colorlogo8,
        },
        {
            id:9,
            logo:logo9,
            hoverlogo:colorlogo9,
        },
        {
            id:10,
            logo:logo10,
            hoverlogo:colorlogo10,
        },
    ]
 
    return(
        <>
            <div className="marquee d-flex gap-3 align-items-center" >
                <div className="marqueewrapper">
                    {logos.map((obj)=>{
                        return(
                            <div key={obj.id} className="logitem">
                                <LazyLoadImage src={obj.logo} alt="" className="logo" effect="blue"/>
                                <LazyLoadImage src={obj.hoverlogo} alt="" className="hoverlogo"  effect="blue"/>
                            </div>
                        )
                    })}
                </div>
                <div className="marqueewrapper">
                    {logos.map((obj)=>{
                        return(
                            <div key={obj.id} className="logitem">
                                <LazyLoadImage src={obj.logo} alt="" className="logo" effect="blue"/>
                                <LazyLoadImage src={obj.hoverlogo} alt="" className="hoverlogo" effect="blue"/>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </>
    )
}
export default Marqueelogo