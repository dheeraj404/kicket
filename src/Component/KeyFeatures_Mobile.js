import React from "react";
import "./KeyFeatures_Mobile.css";
const KeyFeatures_Mobile = () => {
  return (
    <div className="KeyFeatures_Mobile">
      <div className="right_heading">
        <h1>Heading</h1>
      </div>

      <div className="KeyFeatures_Mobile_top_div">
        <div className="key_image">
          <img src="./Group 120.svg" />
        </div>
        <div className="number_line">
          <div>
            {" "}
            <h2>1</h2>{" "}
          </div>
          <div className="gradient_line"></div>
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="left_heading">
        <h1>Heading</h1>
      </div>
      <div className="KeyFeatures_Mobile_mid_div">
        <div className="key_image">
          <img
            src="./Group 120.svg"
            style={{ width: "80%", marginLeft: "2rem" }}
          />
        </div>
        <div className="number_line mid_second">
          <div style={{marginLeft:'1rem'}}>
            {" "}
            <h2>2</h2>{" "}
          </div>
          <div className="gradient_line"></div>
        </div>
        <div className="content" style={{ textAlign: "left" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="right_heading">
        <h1>Heading</h1>
      </div>

      <div className="KeyFeatures_Mobile_top_div">
        <div className="key_image">
          <img src="./Group 120.svg" />
        </div>
        <div className="number_line">
          <div>
            {" "}
            <h2>3</h2>{" "}
          </div>
          <div className="gradient_line"></div>
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures_Mobile;
