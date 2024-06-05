import React, { useState } from "react";
import img from "../../../assets/team/Mask group.png";
import member1 from "../../../assets/team/member-1.png";
import member2 from "../../../assets/team/member-2.png";
import member3 from "../../../assets/team/member-3.png";
import member4 from "../../../assets/team/member-4.png";
import member5 from "../../../assets/team/member-5.png";
import member6 from "../../../assets/team/member-6.png";
import "./team.css";
function Team() {
  const [memberSizes, setMemberSizes] = useState({});

  // const [isSmall, setIsSmall] = useState(false);

  const toggleImageSize = (id) => {
    // Toggle the size for the member with the given id
    setMemberSizes((prevSizes) => ({
      ...prevSizes,
      [id]: !prevSizes[id],
    }));
  };

  const membersData = [
    {
      id: 1,
      memberImg: member1,
      name: "Vishesh Nagar",
      designation: "Founder | CEO",
    },
    {
      id: 2,
      memberImg: member5,
      name: "Pankaj Bisht",
      designation: "FullStack Developer",
    },
    {
      id: 3,
      memberImg: member2,
      name: "Kanika Singh",
      designation: "Content Strategist",
    },
    {
      id: 4,
      memberImg: member4,
      name: "Sourav Kumar",
      designation: "Brand Strategist",
    },
    {
      id: 5,
      memberImg: member3,
      name: "Kunal kuriyal",
      designation: "Graphic Designer",
    },
    {
      id: 6,
      memberImg: member6,
      name: "Riya Rawat",
      designation: "Project Manager",
    },
  ];

  return (
    <>
      <section className="Teams">
        <div className="container Teamheader">
          <div className="row">
            <div className="col-12 col-sm-6 d-flex flex-column justify-content-center">
              <h1>Our Team</h1>
              <p>
                We are a diverse group of professionals, from storytellers and
                designers to developers and marketing experts, all driven by a
                common goal—to push boundaries and produce outcomes that make a
                significant impact. Our passion for excellence unites us,
                enabling us to transform your digital presence into something
                extraordinary.
              </p>
            </div>
            <div className="col-12 col-sm-6 d-flex justify-content-end align-items-center ">
              <img src={img} className=" img-fluid" />
            </div>
          </div>
        </div>

        <section className="teams2">
          <div className="container">
            <div className="row">
              {membersData.map((member, index) => (
                <div
                  className="memberCard col-12  col-sm-6 col-lg-4 d-flex flex-column  align-items-start position-relative"
                  key={index}
                >
                  <div
                    className=""
                    data-aos="zoom-in-up"
                    data-aos-easing="ease"
                    data-aos-duration="1000"
                  >
                    <div
                      className={`postrImg ${
                        memberSizes[member.id] ? "small-image" : "test"
                      }`}
                    >
                      <button
                        className="overlay-button"
                        onClick={() => toggleImageSize(member.id)}
                      >
                        {memberSizes[member.id] ? "-" : "+"}
                      </button>
                      <img
                        src={member.memberImg}
                        className={`rounded memberImg `}
                        alt={`Member ${index}`}
                      />
                    </div>
                  </div>

                  <div
                    className={`d-flex flex-column ${
                      memberSizes[member.id] ? "postContain" : "test2"
                    }`}
                  >
                    <h2>{member.name}</h2>
                    <span className="designation">{member.designation}</span>
                    <div
                      className={`${
                        memberSizes[member.id] ? "Collapsecontent" : ""
                      }`}
                    >
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium, aspernatur.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium, aspernatur.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium, aspernatur.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium, aspernatur.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="teamsbanner d-flex align-items-center">
          <div
            className="teams3 container  d-flex justify-content-center flex-column
               align-items-center"
          >
            <div className="row ">
              <div className="text-start col-12 ">
                <h1 className="text-center"> We are growing, Join the team</h1>
                <button className=" d-flex gap-2 align-items-center">
                  Join the team
                  <svg
                    width="17"
                    height="9"
                    viewBox="0 0 17 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3536 4.85355C16.5488 4.65829 16.5488 4.34171 16.3536 4.14645L13.1716 0.964467C12.9763 0.769205 12.6597 0.769205 12.4645 0.964467C12.2692 1.15973 12.2692 1.47631 12.4645 1.67157L15.2929 4.5L12.4645 7.32843C12.2692 7.52369 12.2692 7.84027 12.4645 8.03553C12.6597 8.2308 12.9763 8.2308 13.1716 8.03554L16.3536 4.85355ZM-4.37114e-08 5L16 5L16 4L4.37114e-08 4L-4.37114e-08 5Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Team;
