import React from "react";
import './style.scss';

const ServAvail = () =>{
    return(
        <section className="serviceavail">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center title">
                        <h3>Our services are available for</h3>
                        <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque <br/>lorem. Tempus at odio libero cras eget est vestibulum vel nisi. </p>
                    </div>
                </div>
                <div className="row serv-card-wrapper">
                    <div className="col-3">
                        <div className="business-card" data-aos="flip-up"  data-aos-delay="100" data-aos-anchor-placement="bottom-bottom" >
                            <img src={require('../../../assets/busicon1.png')} alt="" />
                            <p><b>Startups</b></p>
                            <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. Tempus at odio libero cras eget est vestibulum vel nisi. </p>     
                        </div>                   
                    </div>
                    <div className="col-3">
                        <div className="business-card" data-aos="flip-up"  data-aos-delay="200" data-aos-anchor-placement="bottom-bottom" >
                            <img src={require('../../../assets/busicon2.png')} alt="" />
                            <p><b>Small Business</b></p>
                            <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. Tempus at odio libero cras eget est vestibulum vel nisi. </p>     
                        </div>                   
                    </div>
                    <div className="col-3">
                        <div className="business-card" data-aos="flip-up" data-aos-delay="300"data-aos-anchor-placement="bottom-bottom"  >
                            <img src={require('../../../assets/busicon3.png')} alt="" />
                            <p><b>Mid Enterprises</b></p>
                            <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. Tempus at odio libero cras eget est vestibulum vel nisi. </p>     
                        </div>                   
                    </div>
                    <div className="col-3">
                        <div className="business-card" data-aos="flip-up" data-aos-delay="400"  data-aos-anchor-placement="bottom-bottom" >
                            <img src={require('../../../assets/busicon4.png')} alt="" />
                            <p><b>Enterprises</b></p>
                            <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. Tempus at odio libero cras eget est vestibulum vel nisi. </p>     
                        </div>                   
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServAvail;