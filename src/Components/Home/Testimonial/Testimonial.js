import "./Testimonial.css";
import TesimonialData from "./Testimonial-Data.js";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

const Testimonial = () => {
  const option = {
    slideTransition: "linear",
    autoplayTimeout: 6000,
    autoplaySpeed: 6000,
    navText: [
      `<svg width="41" height="9" viewBox="0 0 41 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.482353 4.11959C0.28709 4.31485 0.28709 4.63143 0.482353 4.82669L3.66433 8.00868C3.8596 8.20394 4.17618 8.20394 4.37144 8.00868C4.5667 7.81341 4.5667 7.49683 4.37144 7.30157L1.54301 4.47314L4.37144 1.64471C4.5667 1.44945 4.5667 1.13287 4.37144 0.937607C4.17618 0.742345 3.8596 0.742345 3.66433 0.937607L0.482353 4.11959ZM40.5972 3.97314L0.835907 3.97314L0.835907 4.97314L40.5972 4.97314L40.5972 3.97314Z" fill="white"/>
        </svg>`,
      `<svg width="41" height="9" viewBox="0 0 41 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.4837 4.8267C40.679 4.63144 40.679 4.31485 40.4837 4.11959L37.3017 0.937611C37.1065 0.742348 36.7899 0.742348 36.5946 0.937611C36.3994 1.13287 36.3994 1.44946 36.5946 1.64472L39.423 4.47314L36.5946 7.30157C36.3994 7.49683 36.3994 7.81342 36.5946 8.00868C36.7899 8.20394 37.1065 8.20394 37.3017 8.00868L40.4837 4.8267ZM0.368896 4.97314H40.1302V3.97314H0.368896V4.97314Z" fill="white"/>
        </svg>
        `,
    ],
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      1200: {
        items: 2,
      },
    },
  };

  return (
    <>
      <div className="Testimonial pd100" id="#CorporateValues">
        <div className="container">
          {/* <img src={require('../../../assets/pattern-2.png')} className="parlleximg"/> */}
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-12 d-flex ">
              <div>
                <div className="title pt-5">
                  <h2 style={{ fontFamily: "poppins" }}>What People Says </h2>
                  <p>Start your web business journey with our great team.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6 col-12">
              <ul className="Review">
                {/* <li className='opaquetext'>
                                    <h1>What People Says</h1>
                                </li> */}
                <OwlCarousel
                  className="owl-theme"
                  {...option}
                  items={2}
                  loop
                  margin={40}
                  autoplay={true}
                  nav={true}
                  dots={false}
                  autoplaySpeed={400}
                >
                  {TesimonialData.map((obj, index) => {
                    return (
                
                        <li key={obj.id}>
                          <img src={obj.img} />
                          <h3 className="ClientName">{obj.name}</h3>
                          <div className="ClientTitle">{obj.title}</div>
                          <p className="ClientReview">{obj.tesimony}</p>
                        </li>
               
                    );
                  })}
                </OwlCarousel>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
