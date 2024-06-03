import React from 'react';
import './style.scss';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const Stats=()=>{
    const statdata= [
        {   
            id:1,
            img:<img src={require('../../../assets/Home/staticon1.png')} alt="" />,
            suffix:'+',
            number:500,
            prefix:'',
            heading:'Satisfied clients',
        },
        {   
            id:2,
            img:<img src={require('../../../assets/Home/staticon2.png')} alt="" />,
            suffix:'m',
            number:10,
            prefix:'$',
            heading:'Revenue Generated',
        },
        {   
            id:3,
            img:<img src={require('../../../assets/Home/staticon3.png')} alt="" />,
            suffix:'+',
            number:800,
            prefix:'',
            heading:'Project Delivered',
        },
        {   
            id:4,
            img:<img src={require('../../../assets/Home/staticon4.png')} alt="" />,
            suffix:'+',
            number:20,
            prefix:'',
            heading:'Country served ',
        },
        {   
            id:5,
            img:<img src={require('../../../assets/Home/staticon5.png')} alt="" />,
            suffix:'%',
            number:99,
            prefix:'',
            heading:'Success Rate',
        },
    ]
    return(
        <section className='stats-section'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-sm-12 col-12">
                        <div className="statscontent">
                            <h2 className='title'>
                            What sets us apart as the premier option?
                            </h2>
                            <p>
                                Clients and partners trust Techxerro for our unparalleled expertise in branding, data-driven marketing, and cutting-edge software/app development. They choose us for our ability to craft compelling brand identities, captivating digital campaigns, and innovative technological solutions tailored to their unique needs. With our commitment to quality, innovation, and understanding their goals, Techxerro delivers cohesive offerings that drive measurable success.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-12">
                        <div className="row wrapper-row">
                            {
                                statdata.map((obj)=>{
                                    return(
                                        <div className="col-sm-4 col-6" key={obj.id}>
                                            <div className="wrapper">
                                                <div>   
                                                    {obj.img}            
                                                    <h3>
                                                        <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                                        {({ isVisible }) => (
                                                        <div style={{ height: '60px' }}>
                                                            {isVisible ? <CountUp end={obj.number}  enableScrollSpy scrollSpyOnce suffix={`${obj.suffix ? obj.suffix: ''}`} prefix={`${obj.prefix ? obj.prefix: ''}`} /> : null}
                                                        </div>
                                                        )}
                                                        </VisibilitySensor>
                                                    </h3>
                                                    <h6>{obj.heading}</h6>
                                                </div> 
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            

                        </div>
                        
                    </div>                     
                </div>              
            </div>
        </section>
    )
}

export default Stats;