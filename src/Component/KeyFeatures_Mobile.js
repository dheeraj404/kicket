import React from "react";
import "./KeyFeatures_Mobile.css";

const KeyFeatures_Mobile = ({ data }) => {
  return (
    <div className="KeyFeatures_Mobile">
      <div className="right_heading">
        <h1>{data[0]?.title}</h1>
      </div>

      <div className="KeyFeatures_Mobile_top_div">
        <div className="key_image">
          <img src={data[0]?.image} alt={data[0]?.title} />
        </div>
        <div className="number_line">
          <div>
            <h2>1</h2>
          </div>
          <div className="gradient_line"></div>
        </div>
        <div className="content">
          <p>{data[0]?.description}</p>
        </div>
      </div>

      <div className="left_heading">
        <h1>{data[1]?.title}</h1>
      </div>

      <div className="KeyFeatures_Mobile_mid_div">
        <div className="key_image">
          <img
            src={data[1]?.image}
            alt={data[1]?.title}
            style={{ width: "80%", marginLeft: "2rem" }}
          />
        </div>
        <div className="number_line mid_second">
          <div style={{ marginLeft: "1rem" }}>
            <h2>2</h2>
          </div>
          <div className="gradient_line"></div>
        </div>
        <div className="content" style={{ textAlign: "left" }}>
          <p>{data[1]?.description}</p>
        </div>
      </div>

      <div className="right_heading">
        <h1>{data[2]?.title}</h1>
      </div>

      <div className="KeyFeatures_Mobile_top_div">
        <div className="key_image">
          <img src={data[2]?.image} alt={data[2]?.title} />
        </div>
        <div className="number_line">
          <div>
            <h2>3</h2>
          </div>
          <div className="gradient_line"></div>
        </div>
        <div className="content">
          <p>{data[2]?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures_Mobile;
