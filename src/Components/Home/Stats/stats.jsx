import React from 'react';
import './style.css';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const Stats=()=>{
    return(
        <section className='stats-section'>
            <div className="container">
                <div className="d-flex gap-5" style={{justifyContent:'space-between'}}>
                    <div className="wrapper">
                        <div>   
                            <img src={require('../../../assets/Home/staticon1.png')} alt="" />                
                            <h3>
                                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                {({ isVisible }) => (
                                <div style={{ height: '60px' }}>
                                    {isVisible ? <CountUp end={1000} suffix='+' /> : null}
                                </div>
                                )}
                                </VisibilitySensor>
                            </h3>
                            <h6>Satisfied clients</h6>
                        </div> 
                    </div>
                    <div className="wrapper">
                        <div>
                            <img src={require('../../../assets/Home/staticon2.png')} alt="" />     
                            <h3>                                
                                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                {({ isVisible }) => (
                                <div style={{ height: '60px' }}>
                                    {isVisible ? <CountUp end={10} prefix="$" suffix='m' /> : null}
                                </div>
                                )}
                                </VisibilitySensor>
                                </h3>
                            <h6>Revenue Generated For clients</h6>
                        </div>

                    </div>
                    <div className="wrapper">
                        <div>
                            <img src={require('../../../assets/Home/staticon3.png')} alt="" />     
                            <h3>                                
                                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                {({ isVisible }) => (
                                <div style={{ height: '60px' }}>
                                    {isVisible ? <CountUp end={800} suffix='+' /> : null}
                                </div>
                                )}
                                </VisibilitySensor>
                            </h3>
                            <h6>Projects delivered</h6>
                        </div>

                    </div>
                    <div className="wrapper">
                        <div>
                            <img src={require('../../../assets/Home/staticon4.png')} alt="" />     
                            <h3>
                                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                {({ isVisible }) => (
                                <div style={{ height: '60px' }}>
                                    {isVisible ? <CountUp end={20}  suffix='+' /> : null}
                                </div>
                                )}
                                </VisibilitySensor>
                            </h3>
                            <h6>Countries served</h6>
                        </div>

                    </div>
                    <div className="wrapper">
                        <div>
                            <img src={require('../../../assets/Home/staticon5.png')} alt="" />     
                            <h3>                                
                                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                {({ isVisible }) => (
                                <div style={{ height: '60px' }}>
                                    {isVisible ? <CountUp end={99} suffix='%' /> : null}
                                </div>
                                )}
                                </VisibilitySensor>
                            </h3>
                            <h6>Success score</h6>
                        </div>

                    </div>
                </div>                
            </div>
        </section>
    )
}

export default Stats;