import React from "react";
import "./style.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { blogPosts } from "./blogData";
// import VerticalCarousel from "./page";
// import MyComponent from "./page";
// import AnimatedCards from "./page";
// import StackingCards from "./page";

function GridExample() {
  // const maxAlphabets = 150; // Change this to the desired number of alphabets per page
  // Function to truncate content to the specified number of alphabets
  const truncateContent = (content, maxAlphabets) => {
    if (content.length > maxAlphabets) {
      return content.slice(0, maxAlphabets) + "..."; // Add ellipsis
    }
    return content;
  };

  return (
    <Row xs={1} md={3} className="g-4">
      {blogPosts.map((item, idx) => (
        <Col key={idx} className="papa-card">
          <Card className="blogs-card">            
            <Card.Img variant="top" src={item.blogimg} />
            <Card.Body>
              <div className="d-flex gap-5 topheading">
                <p className="date">{item.date}</p>
                <p className="head">{item.category}</p>
              </div>
              <h3>{truncateContent(item.title, 40)}</h3>
              <p>
                {truncateContent(item.content, 140)}
                {item.content.length > 140 && (
                  <a
                    href="/next-page"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      opacity: "0.8",
                    }}
                  >
                    Read More
                  </a> // Replace '/next-page' with your next page URL
                )}
              </p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

function Ourblogs() {
  return (
    <section className="blogs-section">
      <div className="container">
        <div className="row first-row">
          <h1>Our blogs</h1>
        </div>
        <div className="row second-row">
          <Tabs>
            <TabList className="section-tabs">
              <Tab>JavaScript</Tab>
              <Tab>Designing</Tab>
              <Tab>Development</Tab>
              <Tab>Management</Tab>
              <Tab>JavaScript</Tab>
              <Tab>Designing</Tab>
              <Tab>JavaScript</Tab>
            </TabList>
            <TabPanel>
              <GridExample />
            </TabPanel>
            <TabPanel>
              <GridExample />
            </TabPanel>
            <TabPanel>
              <GridExample />
            </TabPanel>
            <TabPanel>
              <GridExample />
            </TabPanel>
            <TabPanel>
              <GridExample />
            </TabPanel>
            <TabPanel>
              <GridExample />
            </TabPanel>
            <TabPanel>
              <GridExample />
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {/* <Home/> */}
      {/* <AnimatedCards/> */}
      {/* <StackingCards/> */}
    </section>
  );
}

export default Ourblogs;