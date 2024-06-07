import React from "react";
import "./style.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { blogPosts } from "./blogData";
import insta from "../../../assets/insta.png";
import linkedin from "../../../assets/linked.png";

function GridExample({ category }) {
  // const maxAlphabets = 150; // Change this to the desired number of alphabets per page
  // Function to truncate content to the specified number of alphabets
  const truncateContent = (content, maxAlphabets) => {
    if (content.length > maxAlphabets) {
      return content.slice(0, maxAlphabets) + "..."; // Add ellipsis
    }
    return content;
  };

  return (
    <Row xs={1} sm={2} md={3} className="g-4">
      {blogPosts
        .filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        )
        .map((item, idx) => (
          <Col key={idx} className="papa-card">
            <Card className="blogs-card">
              <Card.Img variant="top" src={item.blogimg} />
              <Card.Body>
                <h3>{truncateContent(item.title, 50)}</h3>
                <p>
                  {truncateContent(item.content, 190)}
                  {/* {item.content.length > 190 && (
                    <a
                      href="/blog"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        opacity: "0.8",
                      }}
                    >
                      Read More
                    </a> // Replace '/next-page' with your next page URL
                  )} */}
                </p>
                <div className="d-flex gap-5 topheading justify-content-between">
                  <p className="head">{item.category}</p>
                  <p className="date">{item.date}</p>
                </div>
                <div className="blogbtn">
                  <a href="/blog">
                    <button>Read More</button>
                  </a>
                </div>
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
          <div className="d-flex justify-content-between">
            <h1>
              Discover our New <span style={{ color: "#FF0000" }}>Blogs</span>
            </h1>
            <div className="d-flex   gap-1 gap-xl-2 align-items-center">
              <a href="https://www.linkedin.com/company/techxerro/">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="#2E2E2E" />
                  <g clippath="url(#clip0_8367_195)">
                    <path
                      d="M14.6517 13.7916C14.6514 14.3 14.4493 14.7874 14.0896 15.1467C13.73 15.5059 13.2424 15.7076 12.7341 15.7074C12.2257 15.7071 11.7383 15.5049 11.3791 15.1453C11.0198 14.7857 10.8181 14.2981 10.8184 13.7897C10.8186 13.2814 11.0208 12.794 11.3804 12.4347C11.74 12.0755 12.2277 11.8738 12.736 11.874C13.2443 11.8743 13.7317 12.0765 14.091 12.4361C14.4503 12.7957 14.6519 13.2833 14.6517 13.7916ZM14.7092 17.1266H10.8759V29.125H14.7092V17.1266ZM20.7659 17.1266H16.9517V29.125H20.7275V22.8287C20.7275 19.3212 25.2988 18.9954 25.2988 22.8287V29.125H29.0842V21.5254C29.0842 15.6125 22.3184 15.8329 20.7275 18.7366L20.7659 17.1266Z"
                      fill="white"
                    />
                    <path
                      d="M14.6497 13.7916C14.6495 14.3 14.4473 14.7874 14.0877 15.1467C13.7281 15.5059 13.2404 15.7076 12.7321 15.7074C12.2238 15.7071 11.7364 15.5049 11.3771 15.1453C11.0178 14.7857 10.8162 14.2981 10.8164 13.7897C10.8167 13.2814 11.0188 12.794 11.3785 12.4347C11.7381 12.0755 12.2257 11.8738 12.734 11.874C13.2424 11.8743 13.7298 12.0765 14.089 12.4361C14.4483 12.7957 14.65 13.2833 14.6497 13.7916ZM14.7072 17.1266H10.8739V29.125H14.7072V17.1266ZM20.7639 17.1266H16.9497V29.125H20.7256V22.8287C20.7256 19.3212 25.2968 18.9954 25.2968 22.8287V29.125H29.0822V21.5254C29.0822 15.6125 22.3164 15.8329 20.7256 18.7366L20.7639 17.1266Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8367_195">
                      <rect
                        width="23"
                        height="23"
                        fill="white"
                        transform="translate(8 9)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                {/* <img src={linkedin} alt="Logo 2" /> */}
              </a>
              <a href="https://www.linkedin.com/company/techxerro/">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="#2E2E2E" />
                  <path
                    d="M20 11C22.717 11 23.056 11.0092 24.122 11.0552C25.187 11.1012 25.912 11.2548 26.55 11.483C27.21 11.7167 27.766 12.0332 28.322 12.5438C28.8305 13.0037 29.224 13.5601 29.475 14.1741C29.722 14.7602 29.89 15.4281 29.94 16.4079C29.987 17.3887 30 17.7006 30 20.2003C30 22.7 29.99 23.0119 29.94 23.9926C29.89 24.9725 29.722 25.6395 29.475 26.2265C29.2247 26.8408 28.8311 27.3973 28.322 27.8568C27.822 28.3244 27.2173 28.6864 26.55 28.9175C25.913 29.1448 25.187 29.2994 24.122 29.3454C23.056 29.3886 22.717 29.4006 20 29.4006C17.283 29.4006 16.944 29.3914 15.878 29.3454C14.813 29.2994 14.088 29.1448 13.45 28.9175C12.7823 28.6871 12.1775 28.325 11.678 27.8568C11.1694 27.3969 10.7759 26.8406 10.525 26.2265C10.277 25.6404 10.11 24.9725 10.06 23.9926C10.013 23.0119 10 22.7 10 20.2003C10 17.7006 10.01 17.3887 10.06 16.4079C10.11 15.4272 10.277 14.7611 10.525 14.1741C10.7752 13.5597 11.1688 13.0032 11.678 12.5438C12.1777 12.0757 12.7824 11.7137 13.45 11.483C14.088 11.2548 14.812 11.1012 15.878 11.0552C16.944 11.012 17.283 11 20 11ZM20 15.6001C18.6739 15.6001 17.4021 16.0848 16.4645 16.9475C15.5268 17.8102 15 18.9802 15 20.2003C15 21.4203 15.5268 22.5904 16.4645 23.4531C17.4021 24.3158 18.6739 24.8004 20 24.8004C21.3261 24.8004 22.5979 24.3158 23.5355 23.4531C24.4732 22.5904 25 21.4203 25 20.2003C25 18.9802 24.4732 17.8102 23.5355 16.9475C22.5979 16.0848 21.3261 15.6001 20 15.6001ZM26.5 15.3701C26.5 15.0651 26.3683 14.7726 26.1339 14.5569C25.8995 14.3413 25.5815 14.2201 25.25 14.2201C24.9185 14.2201 24.6005 14.3413 24.3661 14.5569C24.1317 14.7726 24 15.0651 24 15.3701C24 15.6751 24.1317 15.9677 24.3661 16.1833C24.6005 16.399 24.9185 16.5202 25.25 16.5202C25.5815 16.5202 25.8995 16.399 26.1339 16.1833C26.3683 15.9677 26.5 15.6751 26.5 15.3701ZM20 17.4402C20.7956 17.4402 21.5587 17.731 22.1213 18.2486C22.6839 18.7662 23 19.4683 23 20.2003C23 20.9323 22.6839 21.6343 22.1213 22.152C21.5587 22.6696 20.7956 22.9604 20 22.9604C19.2044 22.9604 18.4413 22.6696 17.8787 22.152C17.3161 21.6343 17 20.9323 17 20.2003C17 19.4683 17.3161 18.7662 17.8787 18.2486C18.4413 17.731 19.2044 17.4402 20 17.4402Z"
                    fill="white"
                  />
                </svg>
                {/* <img src={insta} alt="Logo 1" /> */}
              </a>
            </div>
          </div>

          <p>
            Explore our latest articles and stay updated with the latest trends
            and insights.
          </p>
        </div>
        <div className="row second-row">
          <Tabs>
            <TabList className="section-tabs">
              <Tab>Business</Tab>
              <Tab>Marketing</Tab>
              {/* <Tab>Development</Tab> */}
              <Tab>Technology</Tab>
              <Tab>Education</Tab>
              <Tab>Finance</Tab>
              <Tab>Healthcare</Tab>
            </TabList>
            <TabPanel>
              <GridExample category={"Business"} />
            </TabPanel>
            <TabPanel>
              <GridExample category={"Marketing"} />
            </TabPanel>
            <TabPanel>
              <GridExample category={"Technology"} />
            </TabPanel>
            <TabPanel>
              <GridExample category={"Education"} />
            </TabPanel>
            <TabPanel>
              <GridExample category={"Finance"} />
            </TabPanel>
            <TabPanel>
              <GridExample category={"Healthcare"} />
            </TabPanel>
            {/* <TabPanel>
              <GridExample category = {Marketing}/>
            </TabPanel> */}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Ourblogs;
