import React from "react";
import { images } from "../../../assets/images";
import "./style.scss";

const TechnologiesPage = () => {
  return (
    <>
      <section className="bannersection">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h2 data-aos="fade-right" data-aos-delay="100">
                  Technology we use
                </h2>
                <p data-aos="fade-left" data-aos-delay="100">
                  we leverage cutting-edge technology to drive innovation and
                  deliver top-notch solutions. By utilizing advanced tools such
                  as artificial intelligence, machine learning, and cloud
                  computing, we enhance productivity and tailor our services to
                  meet our clients' needs. Our tech-driven approach ensures we
                  stay ahead in a rapidly evolving digital landscape, fostering
                  growth and achieving excellence in every project.
                </p>

                <button
                  className="btn-red"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Let's Talk
                </button>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <img
                src={images.techimgbanner}
                alt=""
                width="750px"
                data-aos="fade-left"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          background:
            "linear-gradient(58.63deg, #151618 31.7%, #FF0000 128.34%)",
          padding: "100px 0",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 data-aos="fade-left" data-aos-delay="100">
                Your Digital ally
              </h3>
              <p data-aos="fade-right" data-aos-delay="100">
                As your digital ally, we harness cutting-edge technology to
                drive innovation and deliver tailored solutions.we enhance
                productivity and ensure excellence in every project, staying
                ahead in a rapidly evolving digital landscape.
              </p>
              <br />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center" data-aos="fade-up">
              <svg
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.62416 13.1519C3.13595 13.1519 0.297852 10.3138 0.297852 6.82557C0.297852 3.33736 3.13595 0.499268 6.62416 0.499268C10.1124 0.499268 12.9505 3.33736 12.9505 6.82557C12.9505 10.3138 10.1124 13.1519 6.62416 13.1519ZM19.1358 6.82557C19.1358 3.33736 21.9739 0.499268 25.4617 0.499268C28.9503 0.499268 31.788 3.33736 31.788 6.82557C31.788 10.3138 28.9499 13.1519 25.4617 13.1519C21.9739 13.1515 19.1358 10.3138 19.1358 6.82557ZM20.6238 6.82557C20.6238 9.49343 22.7942 11.6638 25.4617 11.6638C28.1296 11.6638 30.3003 9.49343 30.3003 6.82557C30.3003 4.15806 28.1299 1.98736 25.4617 1.98736C22.7946 1.98736 20.6238 4.15771 20.6238 6.82557ZM32.0496 39.2409L22.5379 43.3135C21.4238 43.7906 20.1526 43.4868 19.3738 42.5582L17.819 40.7037C17.6975 40.5591 17.5422 40.4425 17.3695 40.366L8.09168 36.2716C7.36338 36.0021 6.73822 35.4053 6.41715 34.6497C6.09158 33.8837 6.09642 33.0387 6.43133 32.2704C7.03265 30.8896 8.61967 30.1844 10.1243 30.6298L12.9755 31.4733L7.39791 18.4462C7.07442 17.6906 7.08479 16.8277 7.42628 16.0797C7.76777 15.332 8.41368 14.7576 9.20258 14.5068C10.619 14.0543 12.204 14.8113 12.8115 16.2301L15.3316 22.1163C15.6932 21.6448 16.1935 21.288 16.7709 21.104C17.7248 20.7988 18.7551 21.0424 19.5118 21.6676C19.873 21.0275 20.4667 20.5407 21.1763 20.3141C22.1302 20.0093 23.1608 20.2529 23.9175 20.8781C24.2783 20.2376 24.8682 19.7512 25.5824 19.5242C26.9988 19.0717 28.5838 19.8287 29.1913 21.2472L30.1559 23.5003C30.1871 23.5733 30.2137 23.6484 30.2345 23.7259L33.6067 36.0107C33.9662 37.3189 33.2958 38.7074 32.0496 39.2409ZM32.1717 36.4052L28.7991 24.1186L27.8234 21.8337C27.5144 21.112 26.7293 20.7207 26.0353 20.9425C25.6381 21.0692 25.3295 21.3435 25.1593 21.7162C24.9915 22.0836 24.9863 22.5074 25.1454 22.8786L25.4499 23.59C25.6115 23.9674 25.4364 24.4051 25.0589 24.5667C24.6815 24.7282 24.2438 24.5532 24.0822 24.1757L23.418 22.6239C23.109 21.9022 22.3233 21.5106 21.6293 21.7324C21.2324 21.8604 20.9241 22.1334 20.7543 22.5053C20.5861 22.8731 20.5809 23.2969 20.7401 23.6681L21.4414 25.3064C21.603 25.6838 21.4279 26.1215 21.0504 26.283C20.673 26.4446 20.2353 26.2695 20.0738 25.8921L19.0127 23.4135C18.7037 22.6918 17.918 22.3002 17.2243 22.5223C16.8302 22.6479 16.5192 22.9229 16.349 23.2959C16.1812 23.6633 16.1757 24.0875 16.3348 24.4588L17.4329 27.0235C17.5945 27.401 17.4194 27.8387 17.0419 28.0002C16.6645 28.1618 16.2268 27.9867 16.0653 27.6092L11.4443 16.8168C11.1354 16.0951 10.35 15.7035 9.65624 15.9253C9.26043 16.0533 8.95043 16.3262 8.78091 16.6989C8.61276 17.0666 8.60757 17.4905 8.76672 17.8617L14.9678 32.344C15.0813 32.6091 15.0314 32.9159 14.8398 33.1315C14.6488 33.3467 14.3502 33.4328 14.0731 33.3505L9.70332 32.0579C9.31479 31.943 8.91033 31.9752 8.56606 32.1226C8.22561 32.2682 7.94434 32.5264 7.79694 32.8654C7.62706 33.2553 7.62361 33.6826 7.78795 34.0684C7.95229 34.4549 8.25918 34.7482 8.65256 34.8942L17.9712 39.0056C18.3517 39.1734 18.6939 39.4308 18.9607 39.7484L20.5152 41.6032C20.8691 42.0252 21.4472 42.1629 21.9534 41.9464L31.4651 37.8739C32.0301 37.6299 32.3346 36.9993 32.1717 36.4052Z"
                  fill="white"
                />
                <path
                  d="M12.5717 6.74601C12.5717 10.0071 9.92805 12.6508 6.66694 12.6508C3.40583 12.6508 0.762176 10.0071 0.762176 6.74601C0.762176 3.4849 3.40583 0.84125 6.66694 0.84125C9.92805 0.84125 12.5717 3.4849 12.5717 6.74601Z"
                  fill="#EC1A1A"
                />
              </svg>
              <h4>Elect</h4>
              <p>
                Your go-to choice for digital solutions powered by innovation
                and expertise in AI, machine learning, and cloud computing.
              </p>
            </div>
            <div className="col-4 text-center" data-aos="fade-up">
              <svg
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.8735 31.3288C23.8735 31.8769 23.4296 32.3207 22.8816 32.3207C22.3339 32.3207 21.8896 31.8768 21.8896 31.3288C21.8896 30.7811 22.3339 30.3369 22.8816 30.3369C23.4296 30.3369 23.8735 30.7812 23.8735 31.3288Z"
                  fill="#EC1A1A"
                />
                <path
                  d="M31.4891 31.3288C31.4891 31.8769 31.0448 32.3207 30.4971 32.3207C29.9491 32.3207 29.5049 31.8768 29.5049 31.3288C29.5049 30.7811 29.9491 30.3369 30.4971 30.3369C31.0448 30.3369 31.4891 30.7812 31.4891 31.3288Z"
                  fill="#EC1A1A"
                />
                <path
                  d="M39.1039 31.3288C39.1039 31.8769 38.6597 32.3207 38.112 32.3207C37.564 32.3207 37.1201 31.8768 37.1201 31.3288C37.1201 30.7811 37.564 30.3369 38.112 30.3369C38.6597 30.3369 39.1039 30.7812 39.1039 31.3288Z"
                  fill="#EC1A1A"
                />
                <path
                  d="M18.138 38.9017C18.3318 39.0954 18.5857 39.1923 18.8393 39.1923C19.0933 39.1923 19.3469 39.0954 19.5406 38.9017C19.9281 38.5142 19.9281 37.8866 19.5406 37.4991L13.0971 31.0548L19.5406 24.6112C19.9281 24.2237 19.9281 23.5961 19.5406 23.2086C19.1531 22.8211 18.5255 22.8211 18.138 23.2086L10.9928 30.3535C10.6053 30.741 10.6053 31.3686 10.9928 31.7561L18.138 38.9017Z"
                  fill="white"
                />
                <path
                  d="M41.4527 38.9017C41.6465 39.0954 41.9004 39.1923 42.154 39.1923C42.408 39.1923 42.6616 39.0954 42.8554 38.9017L50.0009 31.7561C50.1871 31.5699 50.2916 31.3177 50.2916 31.0548C50.2916 30.7918 50.1871 30.5393 50.0009 30.3535L42.8554 23.2086C42.4679 22.8211 41.8402 22.8211 41.4527 23.2086C41.0652 23.5961 41.0652 24.2237 41.4527 24.6112L47.897 31.0548L41.4527 37.4987C41.0652 37.8862 41.0652 38.5142 41.4527 38.9017Z"
                  fill="white"
                />
              </svg>

              <h4>Develop</h4>
              <p>
                Crafting tailored solutions to drive your success, utilizing
                cutting-edge technology and a commitment to excellence.
              </p>
            </div>
            <div className="col-4 text-center" data-aos="fade-up">
              <svg
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4692 8.50293C17.1104 8.50293 16.8333 8.77868 16.8333 9.13607V33.2071H9.11166C8.75426 33.2071 8.47852 33.4829 8.47852 33.8431V52.916C8.47852 53.2748 8.75115 53.5492 9.11166 53.5492H28.1846C28.5434 53.5492 28.8178 53.2765 28.8178 52.916V45.1916H52.8888C53.2476 45.1916 53.522 44.919 53.522 44.5585V9.13699C53.522 8.7782 53.2493 8.50384 52.8888 8.50384L17.4692 8.50293ZM18.101 9.76782H52.255V43.9219H28.8173V33.8389C28.8173 33.4801 28.5446 33.2057 28.1841 33.2057H18.1011L18.101 9.76782ZM40.1659 15.5C39.8085 15.5 39.5328 15.4076 39.5328 15.7678C39.5328 16.128 39.8054 16.4009 40.1659 16.4009H44.6854L31.9834 29.1003C31.7295 29.3543 31.7295 29.7407 31.9834 29.9947C32.109 30.1203 32.2678 30.1784 32.4256 30.1798H32.4315C32.5962 30.1798 32.7508 30.12 32.8764 29.9947H32.8792L45.5156 17.3582V21.7405C45.5156 22.0993 45.7883 22.3736 46.1488 22.3736C46.509 22.3736 46.5 22.1616 46.5 21.8011V16C46.5 15.6412 46.3574 15.5 46 15.5H40.1659ZM9.74517 34.4697H16.8336V44.5527C16.8336 44.9101 17.1121 45.1886 17.4695 45.1886H27.5525V52.277H9.74523L9.74517 34.4697ZM18.0985 34.4697H27.5517V43.9211H18.0985V34.4697Z"
                  fill="white"
                />
                <path
                  d="M31.4697 29.4697C31.1768 29.7626 31.1768 30.2374 31.4697 30.5303C31.7626 30.8232 32.2374 30.8232 32.5303 30.5303L31.4697 29.4697ZM46.75 16C46.75 15.5858 46.4142 15.25 46 15.25L39.25 15.25C38.8358 15.25 38.5 15.5858 38.5 16C38.5 16.4142 38.8358 16.75 39.25 16.75L45.25 16.75L45.25 22.75C45.25 23.1642 45.5858 23.5 46 23.5C46.4142 23.5 46.75 23.1642 46.75 22.75L46.75 16ZM32.5303 30.5303L46.5303 16.5303L45.4697 15.4697L31.4697 29.4697L32.5303 30.5303Z"
                  fill="#EC1A1A"
                />
              </svg>

              <h4>Amplify</h4>
              <p>
                Elevating your digital presence with advanced solutions,
                harnessing AI, machine learning, and cloud computing to maximize
                impact and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="techs">
        <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-delay="100">
              <h4>Front End Web</h4>
              <br />
              <div className="d-flex gap-5 align-items-center">
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/feicon1.png")}
                      alt=""
                    />
                  </div>
                  <span>Javascript</span>
                </div>

                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/feicon2.png")}
                      alt=""
                    />
                  </div>
                  <span>CSS</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/feicon3.png")}
                      alt=""
                    />
                  </div>
                  <span>HTML</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/feicon4.png")}
                      alt=""
                    />
                  </div>
                  <span>Angular</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/feicon5.png")}
                      alt=""
                    />
                  </div>
                  <span>React</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/feicon6.png")}
                      alt=""
                    />
                  </div>
                  <span>Vue</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/feicon7.png")}
                      alt=""
                    />
                  </div>
                  <span>Ionic</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-delay="100">
              <h4>Back-End Web</h4>
              <br />
              <div className="d-flex gap-5 align-items-center">
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/beicon1.png")}
                      alt=""
                    />
                  </div>
                  <span>PHP</span>
                </div>

                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/beicon2.png")}
                      alt=""
                    />
                  </div>
                  <span>Xamarin</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/beicon3.png")}
                      alt=""
                    />
                  </div>
                  <span>HTML</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/beicon4.png")}
                      alt=""
                    />
                  </div>
                  <span>Angular</span>
                </div>
                {/* <div className="text-center">
                                    <div className="icon-ellipse">
                                        <img src={require('../../../assets/techs/beicon5.png')} alt="" />
                                    </div>
                                    <span>React</span>
                                </div> */}
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/beicon6.png")}
                      alt=""
                    />
                  </div>
                  <span>Vue</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/beicon7.png")}
                      alt=""
                    />
                  </div>
                  <span>Ionic</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/beicon8.png")}
                      alt=""
                    />
                  </div>
                  <span>Ionic</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/beicon9.png")}
                      alt=""
                    />
                  </div>
                  <span>Ionic</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/beicon10.png")}
                      alt=""
                    />
                  </div>
                  <span>Ionic</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-delay="100">
              <h4>Mobile</h4>
              <br />
              <div className="d-flex gap-5 align-items-center">
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/mobicon1.png")}
                      alt=""
                    />
                  </div>
                  <span>React Native</span>
                </div>

                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/mobicon2.png")}
                      alt=""
                    />
                  </div>
                  <span>Flutter</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/mobicon3.png")}
                      alt=""
                    />
                  </div>
                  <span>Flutter</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/mobicon4.png")}
                      alt=""
                    />
                  </div>
                  <span>Swift</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/mobicon5.png")}
                      alt=""
                    />
                  </div>
                  <span>Ios native</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/mobicon6.png")}
                      alt=""
                    />
                  </div>
                  <span>Android native</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/mobicon7.png")}
                      alt=""
                    />
                  </div>
                  <span>Kotlin</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/mobicon8.png")}
                      alt=""
                    />
                  </div>
                  <span>Ionic</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-delay="100">
              <h4>Software development</h4>
              <br />
              <div className="d-flex gap-5 align-items-center">
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/sdicon1.png")}
                      alt=""
                    />
                  </div>
                  <span>Mongo DB</span>
                </div>

                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/sdicon2.png")}
                      alt=""
                    />
                  </div>
                  <span>JS</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/sdicon3.png")}
                      alt=""
                    />
                  </div>
                  <span>React Js</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/sdicon5.png")}
                      alt=""
                    />
                  </div>
                  <span>Node Js</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/sdicon6.png")}
                      alt=""
                    />
                  </div>
                  <span>Angular</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/sdicon7.png")}
                      alt=""
                    />
                  </div>
                  <span>Ionic</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/sdicon8.png")}
                      alt=""
                    />
                  </div>
                  <span>Java</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/sdicon9.png")}
                      alt=""
                    />
                  </div>
                  <span>SQL</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/sdicon10.png")}
                      alt=""
                    />
                  </div>
                  <span>.Net</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-6" data-aos="fade-up" data-aos-delay="100">
              <h4>Graphic & UI/UX design</h4>
              <br />
              <div className="d-flex gap-5 align-items-center">
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/UIicon1.png")}
                      alt=""
                    />
                  </div>
                  <span>Javascript</span>
                </div>

                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/UIicon2.png")}
                      alt=""
                    />
                  </div>
                  <span>CSS</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/UIicon3.png")}
                      alt=""
                    />
                  </div>
                  <span>HTML</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/UIicon4.png")}
                      alt=""
                    />
                  </div>
                  <span>Angular</span>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />

            <div className="col-6" data-aos="fade-up" data-aos-delay="200">
              <h4>Video Animation & Editing</h4>
              <br />
              <div className="d-flex gap-5 align-items-center">
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/videoicon1.png")}
                      alt=""
                    />
                  </div>
                  <span>Javascript</span>
                </div>

                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/videoicon2.png")}
                      alt=""
                    />
                  </div>
                  <span>CSS</span>
                </div>
                <div className="text-center">
                  <div className="icon-ellipse">
                    <img
                      src={require("../../../assets/techs/videoicon3.png")}
                      alt=""
                    />
                  </div>
                  <span>HTML</span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row" style={{background:'#00102F',padding:'70px 0', color:'#fff', marginTop:'130px',marginBottom:'20px', borderRadius:'15px'}}>
                        <div className="message text-center">
                            <h3>Have a project in mind drop us a message.</h3><br/>
                            <button className="btn">Let's Talk</button>
                        </div>
                    </div> */}
        </div>
      </section>
    </>
  );
};

export default TechnologiesPage;
