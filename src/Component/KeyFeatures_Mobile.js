import React, { useEffect, useState } from "react";
import "./KeyFeatures_Mobile.css";

const KeyFeatures_Mobile = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://kicketapi.webprismits.us/api/services/1/success-stories")
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="KeyFeatures_Mobile">
      <div className="right_heading">
        <h1>{services[0]?.title}</h1>
      </div>

      <div className="KeyFeatures_Mobile_top_div">
        <div className="key_image">
          <img src={services[0]?.image} alt={services[0]?.title} />
        </div>
        <div className="number_line">
          <div>
            <h2>1</h2>
          </div>
          <div className="gradient_line"></div>
        </div>
        <div className="content">
          <p>{services[0]?.description}</p>
        </div>
      </div>

      <div className="left_heading">
        <h1>{services[1]?.title}</h1>
      </div>

      <div className="KeyFeatures_Mobile_mid_div">
        <div className="key_image">
          <img
            src={services[1]?.image}
            alt={services[1]?.title}
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
          <p>{services[1]?.description}</p>
        </div>
      </div>

      <div className="right_heading">
        <h1>{services[2]?.title}</h1>
      </div>

      <div className="KeyFeatures_Mobile_top_div">
        <div className="key_image">
          <img src={services[2]?.image} alt={services[2]?.title} />
        </div>
        <div className="number_line">
          <div>
            <h2>3</h2>
          </div>
          <div className="gradient_line"></div>
        </div>
        <div className="content">
          <p>{services[2]?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures_Mobile;
