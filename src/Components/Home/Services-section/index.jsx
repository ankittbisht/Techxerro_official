import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import "./styles.css";
import Cards from "./card";

import Wdd1 from "../../../assets/services/Wdd1.png";
import Wdd2 from "../../../assets/services/Wdd2.png";
import Wdd3 from "../../../assets/services/Wdd3.png";
import Wdd4 from "../../../assets/services/Wdd4.png";

import Wo1 from "../../../assets/services/WO1.png";
import Wo2 from "../../../assets/services/WO2.png";
import Wo3 from "../../../assets/services/WO3.png";
import Wo4 from "../../../assets/services/WO4.png";

import Wh1 from "../../../assets/services/Wh1.png";
import Wh2 from "../../../assets/services/Wh2.png";
import Wh3 from "../../../assets/services/Wh3.png";
import Wh4 from "../../../assets/services/Wh4.png";

import SEM1 from "../../../assets/services/SEM1.png";
import SEM2 from "../../../assets/services/SEM2.png";
import SEM3 from "../../../assets/services/SEM3.png";
import SEM4 from "../../../assets/services/SEM4.png";

import SMM1 from "../../../assets/services/SMM1.png";
import SMM2 from "../../../assets/services/SMM2.png";
import SMM3 from "../../../assets/services/SMM3.png";
import SMM4 from "../../../assets/services/SMM4.png";

import CM1 from "../../../assets/services/CM1.png";
import CM2 from "../../../assets/services/CM2.png";
import CM3 from "../../../assets/services/CM3.png";
import CM4 from "../../../assets/services/CM4.png";

import AR1 from "../../../assets/services/AR1.png";
import AR2 from "../../../assets/services/AR2.png";
import AR3 from "../../../assets/services/AR3.png";
import AR4 from "../../../assets/services/AR4.png";

import BSP1 from "../../../assets/services/BSP1.png";
import BSP2 from "../../../assets/services/BSP2.png";
import BSP3 from "../../../assets/services/BSP3.png";
import BSP4 from "../../../assets/services/BSP4.png";

import VI1 from "../../../assets/services/VI1.png";
import VI2 from "../../../assets/services/VI2.png";
import VI3 from "../../../assets/services/VI3.png";
import VI4 from "../../../assets/services/VI4.png";

import BED1 from "../../../assets/services/BED1.png";
import BED2 from "../../../assets/services/BED2.png";
import BED3 from "../../../assets/services/BED3.png";
import BED4 from "../../../assets/services/BED4.png";

import Dev1 from "../../../assets/services/devImg1.png";
import Dev2 from "../../../assets/services/devImg2.png";
import Dev3 from "../../../assets/services/devimg3.png";
import Dev4 from "../../../assets/services/devimg4.png";

import Va1 from "../../../assets/services/VaImg1.png";
import Va2 from "../../../assets/services/VaImg2.png";
import Va3 from "../../../assets/services/VaImg3.png";
import Va4 from "../../../assets/services/VaImg4.png";

import Cd1 from "../../../assets/services/CdImg1.png";
import Cd2 from "../../../assets/services/CdImg2.png";
import Cd3 from "../../../assets/services/CdImg3.png";
import Cd4 from "../../../assets/services/CdImg4.png";

import Dm1 from "../../../assets/services/DmImg1.png";
import Dm2 from "../../../assets/services/DmImg2.png";
import Dm3 from "../../../assets/services/DmImg3.png";
import Dm4 from "../../../assets/services/DmImg4.png";

import Marketing1 from "../../../assets/services/fb-marketing.png";
import Marketing2 from "../../../assets/services/influencer-marketing.png";
import Marketing3 from "../../../assets/services/insta-marketing.png";
import Marketing4 from "../../../assets/services/youtubemarketing.png";

import pWdd1 from "../../../assets/Services-compressed-images/Wdd1.png";
import pWdd2 from "../../../assets/Services-compressed-images/Wdd2.png";
import pWdd3 from "../../../assets/Services-compressed-images/Wdd3.png";
import pWdd4 from "../../../assets/Services-compressed-images/Wdd4.png";

import pWo1 from "../../../assets/Services-compressed-images/WO1.png";
import pWo2 from "../../../assets/Services-compressed-images/WO2.png";
import pWo3 from "../../../assets/Services-compressed-images/WO3.png";
import pWo4 from "../../../assets/Services-compressed-images/WO4.png";

import pWh1 from "../../../assets/Services-compressed-images/Wh1.png";
import pWh2 from "../../../assets/Services-compressed-images/Wh2.png";
import pWh3 from "../../../assets/Services-compressed-images/Wh3.png";
import pWh4 from "../../../assets/Services-compressed-images/Wh4.png";

import pSEM1 from "../../../assets/Services-compressed-images/SEM1.png";
import pSEM2 from "../../../assets/Services-compressed-images/SEM2.png";
import pSEM3 from "../../../assets/Services-compressed-images/SEM3.png";
import pSEM4 from "../../../assets/Services-compressed-images/SEM4.png";

import pSMM1 from "../../../assets/Services-compressed-images/SMM1.png";
import pSMM2 from "../../../assets/Services-compressed-images/SMM2.png";
import pSMM3 from "../../../assets/Services-compressed-images/SMM3.png";
import pSMM4 from "../../../assets/Services-compressed-images/SMM4.png";

import pCM1 from "../../../assets/Services-compressed-images/CM1.png";
import pCM2 from "../../../assets/Services-compressed-images/CM2.png";
import pCM3 from "../../../assets/Services-compressed-images/CM3.png";
import pCM4 from "../../../assets/Services-compressed-images/CM4.png";

import pAR1 from "../../../assets/Services-compressed-images/AR1.png";
import pAR2 from "../../../assets/Services-compressed-images/AR2.png";
import pAR3 from "../../../assets/Services-compressed-images/AR3.png";
import pAR4 from "../../../assets/Services-compressed-images/AR4.png";

import pBSP1 from "../../../assets/Services-compressed-images/BSP1.png";
import pBSP2 from "../../../assets/Services-compressed-images/BSP2.png";
import pBSP3 from "../../../assets/Services-compressed-images/BSP3.png";
import pBSP4 from "../../../assets/Services-compressed-images/BSP4.png";

import pVI1 from "../../../assets/Services-compressed-images/VI1.png";
import pVI2 from "../../../assets/Services-compressed-images/VI2.png";
import pVI3 from "../../../assets/Services-compressed-images/VI3.png";
import pVI4 from "../../../assets/Services-compressed-images/VI4.png";

import pBED1 from "../../../assets/Services-compressed-images/BED1.png";
import pBED2 from "../../../assets/Services-compressed-images/BED2.png";
import pBED3 from "../../../assets/Services-compressed-images/BED3.png";
import pBED4 from "../../../assets/Services-compressed-images/BED4.png";

import pDev1 from "../../../assets/Services-compressed-images/devImg1.png";
import pDev2 from "../../../assets/Services-compressed-images/devImg2.png";
import pDev3 from "../../../assets/Services-compressed-images/devimg3.png";
import pDev4 from "../../../assets/Services-compressed-images/devimg4.png";

import pVa1 from "../../../assets/Services-compressed-images/VaImg1.png";
import pVa2 from "../../../assets/Services-compressed-images/VaImg2.png";
import pVa3 from "../../../assets/Services-compressed-images/VaImg3.png";
import pVa4 from "../../../assets/Services-compressed-images/VaImg4.png";

import pCd1 from "../../../assets/Services-compressed-images/CdImg1.png";
import pCd2 from "../../../assets/Services-compressed-images/CdImg2.png";
import pCd3 from "../../../assets/Services-compressed-images/CdImg3.png";
import pCd4 from "../../../assets/Services-compressed-images/CdImg4.png";

import pDm1 from "../../../assets/Services-compressed-images/DmImg1.png";
import pDm2 from "../../../assets/Services-compressed-images/DmImg2.png";
import pDm3 from "../../../assets/Services-compressed-images/DmImg3.png";
import pDm4 from "../../../assets/Services-compressed-images/DmImg4.png";

import pMarketing1 from "../../../assets/Services-compressed-images/fb-marketing.png";
import pMarketing2 from "../../../assets/Services-compressed-images/influencer-marketing.png";
import pMarketing3 from "../../../assets/Services-compressed-images/insta-marketing.png";
import pMarketing4 from "../../../assets/Services-compressed-images/youtubemarketing.png";

export const projects = [
  {
    title: "Website Launch",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
    id: "websitelaunch",

    subheading: [
      "Website Design and Development",
      "Website Optimization",
      "Website Hosting and Maintenance",
      // "Network Management",
      // "Data Analytics",
    ],
    cardBanner: [
      { first: Wdd1, second: Wdd2, third: Wdd3, fourth: Wdd4 },
      { first: Wo1, second: Wo2, third: Wo3, fourth: Wo4 },
      { first: Wh1, second: Wh2, third: Wh3, fourth: Wh4 },
    ],
    placeholdercardBanner: [
      { first1: pWdd1, second1: pWdd2, third1: pWdd3, fourth1: pWdd4 },
      { first1: pWo1, second1: pWo2, third1: pWo3, fourth1: pWo4 },
      { first1: pWh1, second1: pWh2, third1: pWh3, fourth1: pWh4 },
    ],
  },
  {
    title: "Marketing Mastery",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    id: "digitalmarketing",
    subheading: [
      "Search Engine Marketing",
      "Social Media Marketing",
      "Content Marketing",
      "Analytics and Reporting",
      // "PPC Advertising",
    ],
    cardBanner: [
      { first: SEM1, second: SEM2, third: SEM3, fourth: SEM4 },
      { first: SMM1, second: SMM2, third: SMM3, fourth: SMM4 },
      { first: CM1, second: CM2, third: CM3, fourth: CM4 },
      { first: AR1, second: AR2, third: AR3, fourth: AR4 },
    ],
    placeholdercardBanner: [
      { first1: pSEM1, second1: pSEM2, third1: pSEM3, fourth1: pSEM4 },
      { first1: pSMM1, second1: pSMM2, third1: pSMM3, fourth1: pSMM4 },
      { first1: pCM1, second1: pCM2, third1: pCM3, fourth1: pCM4 },
      { first1: pAR1, second1: pAR2, third1: pAR3, fourth1: pAR4 },
    ],
  },
  {
    title: "Brand Crafting",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    id: "creativedesign",

    subheading: [
      "Brand Strategy Positioning",
      "Visual Identity and Design",
      "Brand Experience Design",
      // "User Experience Design",
      // "Packaging Design",
    ],
    cardBanner: [
      { first: BSP1, second: BSP2, third: BSP3, fourth: BSP4 },
      { first: VI1, second: VI2, third: VI3, fourth: VI4 },
      { first: BED1, second: BED2, third: BED3, fourth: BED4 },
    ],
    placeholdercardBanner: [
      { first1: pBSP1, second1: pBSP2, third1: pBSP3, fourth1: pBSP4 },
      { first1: pVI1, second1: pVI2, third1: pVI3, fourth1: pVI4 },
      { first1: pBED1, second1: pBED2, third1: pBED3, fourth1: pBED4 },
    ],
  },
  {
    title: "Story Captivation",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    id: "story-captivation",

    subheading: [
      "Content Strategy and Planning",
      "Copywriting and Editing",
      "Video Production and Animation",
      // "Emotional Resonance",
      // "Vivid Descriptions",
    ],
    cardBanner: [
      {
        first: Marketing1,
        second: Marketing2,
        third: Marketing3,
        fourth: Marketing4,
      },
      {
        first: Marketing1,
        second: Marketing2,
        third: Marketing3,
        fourth: Marketing4,
      },
      {
        first: Marketing1,
        second: Marketing2,
        third: Marketing3,
        fourth: Marketing4,
      },
    ],
    placeholdercardBanner: [
      {
        first1: pMarketing1,
        second1: pMarketing2,
        third1: pMarketing3,
        fourth1: pMarketing4,
      },
      {
        first1: pMarketing1,
        second1: pMarketing2,
        third1: pMarketing3,
        fourth1: pMarketing4,
      },
      {
        first1: pMarketing1,
        second1: pMarketing2,
        third1: pMarketing3,
        fourth1: pMarketing4,
      },
    ],
  },
  {
    title: "Visual Iconicity",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    id: "visual-iconicity",

    subheading: [
      "(UX) Design",
      "Brand Identity and Style Guides",
      "Digital Advertising Design",
      "Interactive and Multimedia Design",
      // "Visual Branding",
    ],
    cardBanner: [
      { first: Va1, second: Va2, third: Va3, fourth: Va4 },
      { first: Dm1, second: Dm2, third: Dm3, fourth: Dm4 },
      { first: Cd1, second: Cd2, third: Cd3, fourth: Cd4 },
      { first: Dev1, second: Dev2, third: Dev3, fourth: Dev4 },
    ],
    placeholdercardBanner: [
      { first1: pVa1, second1: pVa2, third1: pVa3, fourth1: pVa4 },
      { first1: pDm1, second1: pDm2, third1: pDm3, fourth1: pDm4 },
      { first1: pCd1, second1: pCd2, third1: pCd3, fourth1: pCd4 },
      { first1: pDev1, second1: pDev2, third1: pDev3, fourth1: pDev4 },
    ],
  },
];

export default function ServicesSection() {
  //testing
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const sectionRef = useRef(null);
  const [activeId, setActiveId] = useState(null);

  function handleanchor(event, targetId) {
    event.preventDefault();

    let scrollPosition = 0;
    let id = targetId;
    // Calculate scroll position based on targetId
    if (id === "websitelaunch") {
      scrollPosition = 2427;
    } else if (id === "digitalmarketing") {
      scrollPosition = 3172;
    } else if (id === "creativedesign") {
      scrollPosition = 3917;
    } else if (id === "story-captivation") {
      // Default scroll position if the id doesn't match any specific case
      scrollPosition = 4663;
    } else {
      scrollPosition = 5408;
    }

    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  }

  const handlScroll = () => {
    const cards = sectionRef.current.querySelectorAll(".cards");
    // if (!cards.length) {
    //   console.warn("No cards found");
    // }
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    let activeCardId = null;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardTop = rect.top + scrollTop;
      const cardHeight = rect.height;
      if (
        cardTop < scrollTop + viewportHeight &&
        cardTop + cardHeight > scrollTop
      ) {
        const visibleHeight = Math.min(
          cardHeight,
          viewportHeight - (cardTop - scrollTop)
        );

        if (visibleHeight > 500) {
          activeCardId = card.id;
        }
      }
    });

    setActiveId(activeCardId);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlScroll);
    handlScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handlScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      // const buffer = 300

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight - 700
      ) {
        setIsSticky(true);
        setIsHidden(false);
      } else {
        setIsSticky(false);
        setIsHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className="container headerContainer">
        <div className={styles.title} data-aos="fade-up">
          <h3>
            The 360° <span>Online Presence</span>
          </h3>
          <h3>Enabler You Need</h3>
        </div>
        <div className={styles.servicemenuwrapper}>
          <ul className={styles.servicemenu}>
            <li className="hideondesktop">Rely on TechXerro for: </li>
          </ul>
          <ul className={styles.servicemenu}>
            <li className={styles.menutitle} id="hidesm">
              Rely on TechXerro for:{" "}
            </li>
            <li>
              <a href="#websitelaunch">Website Launch</a>
            </li>
            <li>
              <a href="#digitalmarketing">Marketing Mastery</a>
            </li>
            <li>
              <a href="#creativedesign">Brand Crafting</a>
            </li>
            <li>
              <a href="#visual-iconicity">Story Captivation</a>
            </li>
            <li>
              <a href="#visual-iconicity">Visual Iconicity</a>
            </li>
          </ul>
        </div>
        <section ref={sectionRef} id="service">
          <ul
            className={` servicemenu ${isSticky ? "sticky" : ""} ${
              isHidden ? "hidden" : ""
            }`}
          >
            <li className={activeId === "websitelaunch" ? "active" : ""}>
              <a
                href="#websitelaunch"
                onClick={(e) => handleanchor(e, "websitelaunch")}
              >
                Website Launch
              </a>
            </li>
            <li className={activeId === "digitalmarketing" ? "active" : ""}>
              <a
                href="#digitalmarketing"
                onClick={(e) => handleanchor(e, "digitalmarketing")}
              >
                Marketing Mastery
              </a>
            </li>
            <li className={activeId === "creativedesign" ? "active" : ""}>
              <a
                href="#creativedesign"
                onClick={(e) => handleanchor(e, "creativedesign")}
              >
                Brand Crafting
              </a>
            </li>
            <li className={activeId === "story-captivation" ? "active" : ""}>
              <a
                href="#story-captivation"
                onClick={(e) => handleanchor(e, "story-captivation")}
              >
                Story Captivation
              </a>
            </li>
            <li className={activeId === "visual-iconicity" ? "active" : ""}>
              <a
                href="#visual-iconicity"
                onClick={(e) => handleanchor(e, "visual-iconicity")}
              >
                Visual Iconicity
              </a>
            </li>
          </ul>
          {/* Other content of the section */}
          {projects.map((project, i) => {
            return (
              <Cards
                key={`p_${i}`}
                {...project}
                id={project.id}
                i={i}
                className="cards"
              />
            );
          })}
        </section>
      </div>
      {/* <Mobilescroll /> */}
    </main>
  );
}
