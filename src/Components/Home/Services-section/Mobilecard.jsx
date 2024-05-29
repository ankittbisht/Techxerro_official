import React from "react";

function Mobilecard() {
  return (
    <div>
      <div className="row">
        <div className="col-6 cardComponent">
          <div className="cards">
            <div className="posterImg">
              <img
                src={require("../../../assets/services/insta-marketing.png")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p>Instagram Marketing</p>
              <ul>
                <li>2D/3D animation</li>
                <li>Video editing & production</li>
                <li>Animated logos & intros</li>
                <div className="hiddenbtn">
                  <button>Signup</button>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 cardComponent ">
          <div className="cards">
            <div className="posterImg">
              <img
                src={require("../../../assets/services/youtubemarketing.png")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p>Instagram Marketing</p>
              <ul>
                <li>2D/3D animation</li>
                <li>Video editing & production</li>
                <li>Animated logos & intros</li>
                <div className="hiddenbtn">
                  <button>Signup</button>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 cardComponent">
          <div className="cards">
            <div className="posterImg">
              <img
                src={require("../../../assets/services/influencer-marketing.png")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p>Instagram Marketing</p>
              <ul>
                <li>2D/3D animation</li>
                <li>Video editing & production</li>
                <li>Animated logos & intros</li>
                <div className="hiddenbtn">
                  <button>Signup</button>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 cardComponent ">
          <div className="cards">
            <div className="posterImg">
              <img
                src={require("../../../assets/services/fb-marketing.png")}
                alt=""
              />
            </div>
            <div className="cardContent">
              <p>Facebook Marketing</p>
              <ul>
                <li>2D/3D animation</li>
                <li>Video editing & production</li>
                <li>Animated logos & intros</li>
                <div className="hiddenbtn">
                  <button>Signup</button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobilecard;
