import React from 'react';
import './style.scss';
import aboutLogo from '../../../assets/aboutlogo.png';

const AboutLogo = () => {
    return(
        <>
        <section className="aboutlogo">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <img src={aboutLogo} alt=""/>
                    </div>
                    <div className="col-lg-6 col-12 d-flex align-items-center">
                        <div >
                            <h2>What Does Our Logo Represents</h2>
                            <p>At the core of all technology lies the fundamental language of binary - a world shaped by 0s and 1s. Our logo ingeniously pays homage to this digital foundation by deriving the stylized "T" from the binary digit "1". The "X" with the superscript "0" represents the mathematical concept that any number raised to the power of zero equals 1.</p>
                            <p>By seamlessly blending the digital "1" from binary equations with the mathematical principle of "X^0 = 1," our logo encapsulates the fusion of technology and mathematical concepts. It embodies our mission to harness the power of both realms, creating innovative solutions that push boundaries and transcend the ordinary. Every time you see our logo, remember the story it tells – a tale of digital prowess intertwined with mathematical elegance, rooted in the very essence of how technology operates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutLogo;

