import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css'
import './styles.css';
import Cards from './card';

export const projects = [
  {
    title: "Enterprise IT Solutions",
    description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
    id:"websitelaunch",
  },
  {
    title: "Digital Marketing Strategies",
    description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    id:"digitalmarketing",
  },
  {
    title: "Creative Design Solutions",
    description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    id:"creativedesign",
  },
  {
    title: "Brand Positioning & Architecture",
    description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
    id:"visual-iconicity"
  },
  
]
export default function ServicesSection() {

  //testing
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      // const buffer = 300

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight - 600 ) {
        setIsSticky(true);
        setIsHidden(false);
      } else {
        setIsSticky(false);
        setIsHidden(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className="container headerContainer">
        <div className={styles.title} data-aos="fade-up">
          <h3>
          The 360° <span>Online Presence</span> Enabler <br/>You Need
          </h3>
        </div>  
        <div>
          <ul className={styles.servicemenu}>
            <li className={styles.menutitle}>Rely on TechXerro for:  </li>
            <li>
              <a href="#websitelaunch">
                Website Launch
              </a>
            </li>
            <li>
              <a href="#digitalmarketing">
                Marketing Mastery
              </a>
            </li>
            <li>
              <a href="#creativedesign">
                Brand Crafting
              </a> 
            </li>          
            <li>
              <a href="#visual-iconicity">
                Story Captivation
              </a>
            </li>          
            <li>
              <a href="#visual-iconicity">
                Visual Iconicity
              </a> 
            </li>          
          </ul>
        </div>
      
      </div> 
      
      <section ref={sectionRef} id="service">

      <ul className={` servicemenu ${isSticky ? 'sticky' : ''} ${isHidden ? 'hidden' : ''}`} >
        <li className="menutitle1" >Rely on TechXerro for:</li>
        <li >
          <a href="#websitelaunch" >Website Launch</a>
        </li>
        <li>
          <a href="#digitalmarketing">Marketing Mastery</a>
        </li>
        <li >
          <a href="#creativedesign">Brand Crafting</a>
        </li>
        <li >
          <a href="#story-captivation" >Story Captivation</a>
        </li>
        <li >
          <a href="#visual-iconicity" >Visual Iconicity</a>
        </li>
      </ul>
      {/* Other content of the section */}
      {
        projects.map( (project, i) => {
          return <Cards key={`p_${i}`} {...project} id={project.id} i={i}/>
        })
      }
    </section>
      
    </main>
  )
}