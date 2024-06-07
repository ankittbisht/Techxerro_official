import React from "react";
import "./singleBlog.scss";
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
              <div className="col-12">
                <a href="/blogs" className="d-flex gap-2 align-items-center">
                  <svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.645809 4.35355C0.450548 4.15829 0.450548 3.84171 0.645809 3.64645L3.82779 0.464466C4.02305 0.269204 4.33963 0.269204 4.5349 0.464466C4.73016 0.659728 4.73016 0.976311 4.5349 1.17157L1.70647 4L4.5349 6.82843C4.73016 7.02369 4.73016 7.34027 4.5349 7.53553C4.33963 7.7308 4.02305 7.7308 3.82779 7.53553L0.645809 4.35355ZM27.0762 4.5H0.999363V3.5L27.0762 3.5V4.5Z" fill="#989898"/>
                  </svg>
                  Back to all blogs
                </a>
                <h2>lorem ipsum dolor  consectetur?</h2>
                <img
                    src={singleBlogbanner}
                    className="img-fluid"                 
                    alt=""
                  />
              </div>
              <div className="col-lg-9 col-12 content">
                <div className="datetag"> May 02, 2024</div>
                <h3>lorem ipsum dolor  consectetur?</h3>
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
                <h3>lorem ipsum dolor  consectetur?</h3>
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
              <div className="col-lg-3 col-12">
                <div className="sidebar">
                  <h3 className="d-flex gap-2 align-items-center">Related Articles  
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7.36364 8L1 15" stroke="white"/>
                    </svg>
                  </h3> 
                  <div className="M-blog">
                    <img src={blog1} className="img-fluid" alt="" />
                    <h5>Why dolor consectetur?</h5>
                    <div className="d-flex">                      
                      <div className="datetag"> May 02, 2024</div>
                      <div className="cattag"> Development</div>
                    </div>
                  </div>   
                  <div className="M-blog">
                    <img src={blog2} className="img-fluid" alt="" />
                    <h5>Why dolor consectetur?</h5>
                    <div className="d-flex">                      
                      <div className="datetag"> May 02, 2024</div>
                      <div className="cattag"> Development</div>
                    </div>
                  </div>   
                  <hr />
                  <h3 className="d-flex gap-5 align-items-center pt-3 pb-2">Find Us At
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7.36364 8L1 15" stroke="white"/>
                    </svg>
                  </h3>  
                  <div className="d-flex gap-3">  
                    <a href="#">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#2E2E2E"/>
                        <g clippath="url(#clip0_8367_195)">
                        <path d="M14.6517 13.7916C14.6514 14.3 14.4493 14.7874 14.0896 15.1467C13.73 15.5059 13.2424 15.7076 12.7341 15.7074C12.2257 15.7071 11.7383 15.5049 11.3791 15.1453C11.0198 14.7857 10.8181 14.2981 10.8184 13.7897C10.8186 13.2814 11.0208 12.794 11.3804 12.4347C11.74 12.0755 12.2277 11.8738 12.736 11.874C13.2443 11.8743 13.7317 12.0765 14.091 12.4361C14.4503 12.7957 14.6519 13.2833 14.6517 13.7916ZM14.7092 17.1266H10.8759V29.125H14.7092V17.1266ZM20.7659 17.1266H16.9517V29.125H20.7275V22.8287C20.7275 19.3212 25.2988 18.9954 25.2988 22.8287V29.125H29.0842V21.5254C29.0842 15.6125 22.3184 15.8329 20.7275 18.7366L20.7659 17.1266Z" fill="white"/>
                        <path d="M14.6497 13.7916C14.6495 14.3 14.4473 14.7874 14.0877 15.1467C13.7281 15.5059 13.2404 15.7076 12.7321 15.7074C12.2238 15.7071 11.7364 15.5049 11.3771 15.1453C11.0178 14.7857 10.8162 14.2981 10.8164 13.7897C10.8167 13.2814 11.0188 12.794 11.3785 12.4347C11.7381 12.0755 12.2257 11.8738 12.734 11.874C13.2424 11.8743 13.7298 12.0765 14.089 12.4361C14.4483 12.7957 14.65 13.2833 14.6497 13.7916ZM14.7072 17.1266H10.8739V29.125H14.7072V17.1266ZM20.7639 17.1266H16.9497V29.125H20.7256V22.8287C20.7256 19.3212 25.2968 18.9954 25.2968 22.8287V29.125H29.0822V21.5254C29.0822 15.6125 22.3164 15.8329 20.7256 18.7366L20.7639 17.1266Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_8367_195">
                        <rect width="23" height="23" fill="white" transform="translate(8 9)"/>
                        </clipPath>
                        </defs>
                      </svg>                      
                    </a>
                    
                    <a href="#">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#2E2E2E"/>
                        <path d="M20 11C22.717 11 23.056 11.0092 24.122 11.0552C25.187 11.1012 25.912 11.2548 26.55 11.483C27.21 11.7167 27.766 12.0332 28.322 12.5438C28.8305 13.0037 29.224 13.5601 29.475 14.1741C29.722 14.7602 29.89 15.4281 29.94 16.4079C29.987 17.3887 30 17.7006 30 20.2003C30 22.7 29.99 23.0119 29.94 23.9926C29.89 24.9725 29.722 25.6395 29.475 26.2265C29.2247 26.8408 28.8311 27.3973 28.322 27.8568C27.822 28.3244 27.2173 28.6864 26.55 28.9175C25.913 29.1448 25.187 29.2994 24.122 29.3454C23.056 29.3886 22.717 29.4006 20 29.4006C17.283 29.4006 16.944 29.3914 15.878 29.3454C14.813 29.2994 14.088 29.1448 13.45 28.9175C12.7823 28.6871 12.1775 28.325 11.678 27.8568C11.1694 27.3969 10.7759 26.8406 10.525 26.2265C10.277 25.6404 10.11 24.9725 10.06 23.9926C10.013 23.0119 10 22.7 10 20.2003C10 17.7006 10.01 17.3887 10.06 16.4079C10.11 15.4272 10.277 14.7611 10.525 14.1741C10.7752 13.5597 11.1688 13.0032 11.678 12.5438C12.1777 12.0757 12.7824 11.7137 13.45 11.483C14.088 11.2548 14.812 11.1012 15.878 11.0552C16.944 11.012 17.283 11 20 11ZM20 15.6001C18.6739 15.6001 17.4021 16.0848 16.4645 16.9475C15.5268 17.8102 15 18.9802 15 20.2003C15 21.4203 15.5268 22.5904 16.4645 23.4531C17.4021 24.3158 18.6739 24.8004 20 24.8004C21.3261 24.8004 22.5979 24.3158 23.5355 23.4531C24.4732 22.5904 25 21.4203 25 20.2003C25 18.9802 24.4732 17.8102 23.5355 16.9475C22.5979 16.0848 21.3261 15.6001 20 15.6001ZM26.5 15.3701C26.5 15.0651 26.3683 14.7726 26.1339 14.5569C25.8995 14.3413 25.5815 14.2201 25.25 14.2201C24.9185 14.2201 24.6005 14.3413 24.3661 14.5569C24.1317 14.7726 24 15.0651 24 15.3701C24 15.6751 24.1317 15.9677 24.3661 16.1833C24.6005 16.399 24.9185 16.5202 25.25 16.5202C25.5815 16.5202 25.8995 16.399 26.1339 16.1833C26.3683 15.9677 26.5 15.6751 26.5 15.3701ZM20 17.4402C20.7956 17.4402 21.5587 17.731 22.1213 18.2486C22.6839 18.7662 23 19.4683 23 20.2003C23 20.9323 22.6839 21.6343 22.1213 22.152C21.5587 22.6696 20.7956 22.9604 20 22.9604C19.2044 22.9604 18.4413 22.6696 17.8787 22.152C17.3161 21.6343 17 20.9323 17 20.2003C17 19.4683 17.3161 18.7662 17.8787 18.2486C18.4413 17.731 19.2044 17.4402 20 17.4402Z" fill="white"/>
                      </svg> 
                    </a>
                  </div>  
                </div>
                  {/* <div className="">
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
                  </div> */}
              </div>
            </div>
            {/* <div className="row firstrow">
              
              <div className="col-8">
                <div className="teamsHeading">
                  <h1  >Why dolor consectetur?</h1>
                  
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Singleblog;
