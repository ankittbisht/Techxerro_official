import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import "./styles.css";
import Cards from "./card";
import Mobilescroll from "./Mobilescroll";

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

export const projects = [
  {
    title: "Enterprise IT Solutions",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
    id: "websitelaunch",
    subheading: [
      "Cloud Solutions",
      "Cybersecurity",
      "ERP Systems",
      "Network Management",
      "Data Analytics",
    ],
    cardBanner: [{ first: Dev1, second: Dev2, third: Dev3, fourth: Dev4 }],
  },
  {
    title: "Digital Marketing Strategies",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    id: "digitalmarketing",
    subheading: [
      "Content Marketing",
      "Social Media Marketing",
      "SEO",
      "Email Marketing",
      "PPC Advertising",
    ],
    cardBanner: [{ first: Dm1, second: Dm2, third: Dm3, fourth: Dm4 }],
  },
  {
    title: "Creative Design Solutions",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    id: "creativedesign",
    subheading: [
      "Graphic Design",
      "Web Design",
      "Brand Identity",
      "User Experience Design",
      "Packaging Design",
    ],
    cardBanner: [{ first: Cd1, second: Cd2, third: Cd3, fourth: Cd4 }],
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
      "Engaging Introductions",
      "Character Development",
      "Plot Twists and Suspense",
      "Emotional Resonance",
      "Vivid Descriptions",
    ],
    cardBanner: [
      {
        first: Marketing1,
        second: Marketing2,
        third: Marketing3,
        fourth: Marketing4,
      },
    ],
  },
  {
    title: "Brand Positioning & Architecture",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    id: "visual-iconicity",
    subheading: [
      "Identity Building",
      "Market Analysis",
      "Competitive Edge",
      "Message Crafting",
      "Visual Branding",
    ],
    cardBanner: [{ first: Va1, second: Va2, third: Va3, fourth: Va4 }],
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
