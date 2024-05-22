import React from "react";
import './style.scss';

const Banner=(props)=>{
    return(
            <section className="banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-12" style={{height:'100%', display:'flex', alignItems:'center'}} >
                            <h3 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" >{props.subtitle}</h3>                          
                        </div>
                        <div className="col-sm-8 col-12" style={{height:'100%', display:'flex', alignItems:'end'}}>      
                            <div>               
                            <h2  data-aos="fade-left" data-aos-delay="100">{props.title}</h2>
                            <p  data-aos="fade-right" data-aos-delay="200">{props.para}</p> 
                            </div>                          
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Banner;