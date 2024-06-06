import React from "react";
import './style.scss';

const Banner=(props)=>{
    return(
            <section className="banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-12" style={{height:'100%', display:'grid', alignItems:'center'}} >
                            <h4 >{props.subtitle}</h4>            
                            <p>{props.subtitlepara}</p>
                        </div>
                        <div className="col-md-7 col-12" style={{height:'100%', display:'flex', alignItems:'end'}}>      
                            <div>               
                                <h2 >{props.title}</h2>
                                <p  >{props.para}</p> 
                            </div>                          
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Banner;