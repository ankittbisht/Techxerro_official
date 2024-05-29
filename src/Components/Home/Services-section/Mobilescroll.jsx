import React from "react";
import "./styles.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Mobilecard from "./Mobilecard";


function Mobilescroll() {
  const projects = [
    {
      title: "Enterprise IT Solutions",
      description:
        "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      src: "rock.jpg",
      link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
      color: "#BBACAF",
      id: "websitelaunch",
    },
    {
      title: "Digital Marketing Strategies",
      description:
        "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: "water.jpg",
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#C2491D",
      id: "digitalmarketing",
    },
    {
      title: "Creative Design Solutions",
      description:
        "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: "water.jpg",
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#C2491D",
      id: "creativedesign",
    },
    {
      title: "Brand Positioning & Architecture",
      description:
        "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: "water.jpg",
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#C2491D",
      id: "visual-iconicity",
    },
  ];

  return (
    <div className="hide-on-large">
      <div className="container">
        {projects.map((project) => (
          <>
            <div className="row cardContainer">{project.title}</div>
            <div className="row">
                
              <Tabs>
                <TabList>
                  <Tab>Social Media</Tab>
                  <Tab>Visual Iconicity</Tab>
                  <Tab>Marketing Mastery</Tab>
                  <Tab>Brand Crafting</Tab>
                  <Tab>Story Captivation</Tab>
                  <Tab>Visual Iconicity</Tab>
                </TabList>
                <TabPanel>
                  <Mobilecard />
                </TabPanel>
                <TabPanel>
                  <Mobilecard />
                </TabPanel>
                <TabPanel>
                  <Mobilecard />
                </TabPanel>
                <TabPanel>
                  <Mobilecard />
                </TabPanel>
                <TabPanel>
                  <Mobilecard />
                </TabPanel>
              </Tabs>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Mobilescroll;
