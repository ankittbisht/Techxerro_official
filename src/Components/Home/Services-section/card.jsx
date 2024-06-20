"use client";
// import Image from 'next/image';
import React from "react";
import styles from "./card.module.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./styles.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import { projects } from '.';

function GridExample({ cardBanner, placeholdercardBanner }) {
  const option = {
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
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1230: {
        items: 4,
      },
    },
  };

  return (
    <div className={styles.cardsWrapper}>
      <OwlCarousel
        className="owl-theme"
        {...option}
        loop
        margin={20}
        nav={true}
        dots={false}
        autoplaySpeed={700}
        autoplayTimeout={5000}
      >
        <div className={styles.cards}>
          <div className={styles.posterImg}>
            <LazyLoadImage
              src={cardBanner.first}
              placeholderSrc={placeholdercardBanner.first1}
              effect="blur"
            />
            {/* <img src={cardBanner.first} alt="" /> */}
          </div>
          <div className={styles.cardContent}>
            <p>Instagram Marketing</p>
            <ul style={{ padding: "0", listStyleType: "none", opacity: "0.8" }}>
              <li>2D/3D animation</li>
              <li>Video editing & production</li>
              <div className={styles.hiddenbtn}>
                <button>Signup</button>
              </div>
            </ul>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.posterImg}>
            <LazyLoadImage
              src={cardBanner.second}
              effect="blur"
              placeholderSrc={placeholdercardBanner.second1}
            />
            {/* <img src={cardBanner.second} alt="" /> */}
          </div>
          <div className={styles.cardContent}>
            <p>Youtube Marketing</p>
            <ul style={{ padding: "0", listStyleType: "none", opacity: "0.8" }}>
              <li>2D/3D animation</li>
              <li>Animated logos & intros</li>
              <div className={styles.hiddenbtn}>
                <button>Signup</button>
              </div>
            </ul>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.posterImg}>
            <LazyLoadImage
              src={cardBanner.third}
              effect="blur"
              placeholderSrc={placeholdercardBanner.third1}
            />
            {/* <img src={cardBanner.third} alt="" /> */}
          </div>
          <div className={styles.cardContent}>
            <p>Facebook Marketing</p>
            <ul style={{ padding: "0", listStyleType: "none", opacity: "0.8" }}>
              <li>Video editing & production</li>
              <li>Animated logos & intros</li>
              <div className={styles.hiddenbtn}>
                <button>Signup</button>
              </div>
            </ul>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.posterImg}>
            <LazyLoadImage
              src={cardBanner.fourth}
              effect="blur"
              placeholderSrc={placeholdercardBanner.fourth1}
            />
            {/* <img src={cardBanner.fourth} alt="" /> */}
          </div>
          <div className={styles.cardContent}>
            <p>Influencer Marketing</p>
            <ul style={{ padding: "0", listStyleType: "none", opacity: "0.8" }}>
              <li>2D/3D animation</li>
              <li>Animated logos & intros</li>
              <div className={styles.hiddenbtn}>
                <button>Signup</button>
              </div>
            </ul>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}

function GridExample2() {
  // const maxAlphabets = 150; // Change this to the desired number of alphabets per page
  // Function to truncate content to the specified number of alphabets
  const truncateContent = (content, maxAlphabets) => {
    if (content.length > maxAlphabets) {
      return content.slice(0, maxAlphabets) + "..."; // Add ellipsis
    }
    return content;
  };

  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.cards}>
        <div className={styles.posterImg}>
          <img src={require("../../../assets/service1.png")} alt="" />
        </div>
        <div className={styles.cardContent}>
          <p>
            <b>Animation AND Motion Graphics</b>
          </p>
          <ul style={{ padding: "0", listStyleType: "none", opacity: "0.8" }}>
            <li>2D/3D animation</li>
            <li>Animated logos & intros</li>
          </ul>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.posterImg}>
          <img src={require("../../../assets/service1.png")} alt="" />
        </div>
        <div className={styles.cardContent}>
          <p>
            <b>Animation AND Motion Graphics</b>
          </p>
          <ul style={{ padding: "0", listStyleType: "none", opacity: "0.8" }}>
            <li>2D/3D animation</li>
            <li>Video editing & production</li>
          </ul>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.posterImg}>
          <img src={require("../../../assets/service1.png")} alt="" />
        </div>
        <div className={styles.cardContent}>
          <p>
            <b>Animation AND Motion Graphics</b>
          </p>
          <ul style={{ padding: "0", listStyleType: "none", opacity: "0.8" }}>
            <li>2D/3D animation</li>
            <li>Animated logos & intros</li>
          </ul>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.posterImg}>
          <img src={require("../../../assets/service1.png")} alt="" />
        </div>
        <div className={styles.cardContent}>
          <p>
            <b>Animation AND Motion Graphics</b>
          </p>
          <ul style={{ padding: "0", listStyleType: "none", opacity: "0.8" }}>
            <li>2D/3D animation</li>
            <li>Video editing & production</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const Cards = ({
  title,
  subheading,
  cardBanner,
  placeholdercardBanner,
  description,
  src,
  url,
  color,
  i,
  id,
}) => {
  //testing

  const option = {
    autoplayHoverPause: true,
    navText: [
      `<svg width="41" height="9" viewBox="0 0 41 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.482353 4.11959C0.28709 4.31485 0.28709 4.63143 0.482353 4.82669L3.66433 8.00868C3.8596 8.20394 4.17618 8.20394 4.37144 8.00868C4.5667 7.81341 4.5667 7.49683 4.37144 7.30157L1.54301 4.47314L4.37144 1.64471C4.5667 1.44945 4.5667 1.13287 4.37144 0.937607C4.17618 0.742345 3.8596 0.742345 3.66433 0.937607L0.482353 4.11959ZM40.5972 3.97314L0.835907 3.97314L0.835907 4.97314L40.5972 4.97314L40.5972 3.97314Z" fill="white"/>
    </svg>`,
      `<svg width="41" height="9" viewBox="0 0 41 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.4837 4.8267C40.679 4.63144 40.679 4.31485 40.4837 4.11959L37.3017 0.937611C37.1065 0.742348 36.7899 0.742348 36.5946 0.937611C36.3994 1.13287 36.3994 1.44946 36.5946 1.64472L39.423 4.47314L36.5946 7.30157C36.3994 7.49683 36.3994 7.81342 36.5946 8.00868C36.7899 8.20394 37.1065 8.20394 37.3017 8.00868L40.4837 4.8267ZM0.368896 4.97314H40.1302V3.97314H0.368896V4.97314Z" fill="white"/>
    </svg>
    `,
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      998: {
        items: 4,
      },
    },
  };

  // useEffect(() => {
  //   const element = document.getElementById(id);
  //   const distanceFromTop = element.getBoundingClientRect().top;
  //   console.log("Distance from top:", distanceFromTop);
  // }, [id]); //

  return (
    <div
      id={id}
      className={`${styles.cardContainer} ${styles.hideOnLarge} cards`}
    >
      <div
        id={id}
        className={styles.card}
        style={{
          background: "linear-gradient(180deg, #C20607 0%, #151618 100%)",
          scale: `calc(1.0${i})`,
          top: `calc(8vh + ${i * 20}px)`,
        }}
      >
        <div className={styles.servicessectionwappper}>
          <h4>{title}</h4>
          <Tabs>
            <TabList
              className={styles.servicestab}
              style={{ width: "100%", padding: "0" }}
            >
              <Tab>{subheading[0]}</Tab>
              <Tab>{subheading[1]}</Tab>
              <Tab>{subheading[2]}</Tab>
              {subheading[3] && <Tab>{subheading[3]}</Tab>}
              {/* <Tab>{subheading[4]}</Tab> */}
            </TabList>
            <TabPanel className="cards-container">
              <GridExample
                cardBanner={cardBanner[0]}
                placeholdercardBanner={placeholdercardBanner[0]}
              />
            </TabPanel>
            <TabPanel className="cards-container">
              <GridExample
                cardBanner={cardBanner[1]}
                placeholdercardBanner={placeholdercardBanner[1]}
              />
            </TabPanel>
            <TabPanel className="cards-container">
              <GridExample
                cardBanner={cardBanner[2]}
                placeholdercardBanner={placeholdercardBanner[2]}
              />
            </TabPanel>
            <TabPanel className="cards-container">
              <GridExample
                cardBanner={cardBanner[3]}
                placeholdercardBanner={placeholdercardBanner[3]}
              />
            </TabPanel>
          </Tabs>
          {/* <div className={styles.cardsWrapper}>              
              <OwlCarousel className='owl-theme' {...option} loop margin={20} nav={true} dots={false} autoplaySpeed={700} autoplayTimeout={5000}>
                <div className={styles.cards} >
                  <div className={styles.posterImg }>
                    <img src={require('../../../assets/service1.png')} alt=""/>
                  </div>
                  <div className={styles.cardContent}>
                    <p><b>Animation & Motion Graphics</b></p>
                    <ul style={{padding: '0', listStyleType: 'none', opacity:'0.8'}}>
                      <li>2D/3D animation</li>
                      <li>Video editing & production</li>
                      <li>Animated logos & intros</li>
                    </ul>
                  </div>
                </div>
              <div className={styles.cards}>
                <div className={styles.posterImg}>
                  <img src={require('../../../assets/service2.png')} alt="" />
                </div>
                <div className={styles.cardContent}>
                  <p><b>Animation & Motion Graphics</b></p>
                  <ul style={{padding: '0', listStyleType: 'none', opacity:'0.8'}}>
                    <li>Logo Design</li>
                    <li>Brand Style Guides</li>
                    <li>Brand Messaging</li>
                  </ul>
                </div>
              </div>
              <div className={styles.cards}>
                <div className={styles.posterImg}>
                  <img src={require('../../../assets/service3.png')} alt="" />
                </div>
                <div className={styles.cardContent}>
                  <p><b>Animation & Motion Graphics</b></p>
                  <ul style={{padding: '0', listStyleType: 'none', opacity:'0.8'}}>
                    <li>2D/3D animation</li>
                    <li>Video editing & production</li>
                    <li>Animated logos & intros</li>
                  </ul>
                </div>
              </div>
              <div className={styles.cards}>
                <div className={styles.posterImg}>
                  <img src={require('../../../assets/service4.png')} alt="" />
                </div>
                <div className={styles.cardContent}>
                  <p><b>Animation & Motion Graphics</b></p>
                  <ul style={{padding: '0', listStyleType: 'none', opacity:'0.8'}}>
                    <li>2D/3D animation</li>
                    <li>Video editing & production</li>
                    <li>Animated logos & intros</li>
                  </ul>
                </div>
              </div>
              </OwlCarousel>
            </div> */}
        </div>
      </div>
    </div>
    // </section>
  );
};

export default Cards;
