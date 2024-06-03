import React from "react";
import "./singleBlog.css";
import singleBlogbanner from "../../../assets/singleBlog/Rectangle 1285.png";
import blog1 from "../../../assets/singleBlog/blog1.png";
import blog2 from "../../../assets/singleBlog/blog2.png";
function Singleblog() {
  return (
    <>
      <section>
        <div className="blogs-section">
          <div className="container">
            <div className="row teamsheaderRow">
              <div className="col-4"></div>
              <div className="col-8">
                <div className="d-flex gap-3">
                  <p className="headertags">30.02.2023</p>
                  <p className="headertags">Andrew Python</p>
                  <p className="headertags">Website development</p>
                </div>
              </div>
            </div>
            <div className="row firstrow">
              <div className="col-4">
                <div className="">
                  <div className="blogReference">
                    <img src={blog2} className="img-fluid" alt="" />
                    <p>Why dolor consectetur?</p>
                  </div>
                  <div className="prev d-flex">
                    <h2>Previous Article</h2>
                    <svg
                      width="51"
                      height="37"
                      viewBox="0 0 51 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="50.5"
                        y="35.625"
                        width="50"
                        height="35.125"
                        rx="17.5625"
                        transform="rotate(-180 50.5 35.625)"
                        fill="white"
                        stroke="white"
                      />
                      <path
                        d="M22.5448 18.4167L26.3443 22.2162L25.3427 23.2178L19.8333 17.7084L25.3427 12.1989L26.3443 13.2005L22.5448 17L31.1667 17L31.1667 18.4167L22.5448 18.4167Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="blogReference">
                    <img src={blog1} className="img-fluid" alt="" />
                    <p>Why dolor consectetur?</p>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="teamsHeading">
                  <h1  >Why dolor consectetur?</h1>
                  <img
                    src={singleBlogbanner}
                    className="img-fluid"
                 
                    alt=""
                  />
                </div>
                <div className="blogContent">
                  <div className="content">
                    <h2>Why dolor consectetur?</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Commodo sed risus
                      laoreet enim eget ac lacinia egestas lectus. Arcu lectus
                      lectus vel dictum at morbi. Dictum mattis turpis
                      adipiscing dictum. Non molestie tincidunt facilisi etiam
                      sapien. Sed sed aenean pellentesque id sagittis
                      ullamcorper. Tellus tristique sed eu amet sagittis sed ac.
                      Tincidunt et in morbi netus. Nec eget nisi ut consectetur
                      urna arcu. Hac malesuada urna urna viverra ac orci. Semper
                      tristique risus nunc in nibh. Sapien pulvinar amet purus
                      consequat rutrum dictum. Suspendisse amet nibh fringilla
                      diam risus ut morbi quam dignissim.
                    </p>
                  </div>
                  <div className="content">
                    <h2>Why dolor consectetur?</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Commodo sed risus
                      laoreet enim eget ac lacinia egestas lectus. Arcu lectus
                      lectus vel dictum at morbi. Dictum mattis turpis
                      adipiscing dictum. Non molestie tincidunt facilisi etiam
                      sapien. Sed sed aenean pellentesque id sagittis
                      ullamcorper. Tellus tristique sed eu amet sagittis sed ac.
                      Tincidunt et in morbi netus. Nec eget nisi ut consectetur
                      urna arcu. Hac malesuada urna urna viverra ac orci. Semper
                      tristique risus nunc in nibh. Sapien pulvinar amet purus
                      consequat rutrum dictum. Suspendisse amet nibh fringilla
                      diam risus ut morbi quam dignissim.
                    </p>
                  </div>
                  <a href="/blogs">
                  <button className=" d-flex gap-2 align-items-center">
                
                    Back to blogs
                    
                   
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Singleblog;
