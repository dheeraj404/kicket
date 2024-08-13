import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './KeyFeatures.css';

const KeyFeatures = ({ data }) => {
  const baseURL = "https://kicketapi.webprismits.us/assets/services/";

  return (
    <div className="KeyFeatures">
      <img src="/back.png" className="background-image" alt="Background" />
      <h1 className="heading">Key Features</h1>
      <div style={{padding:'2%'}}>
        <Row className="top_div">
          <Col xs={12} md={4} className="service_col">
            <div className="service_1">
              <h4>{data[0]?.title}</h4>
              <p>{data[0]?.description}</p>
              <div className="line">
                <h1 className="digit">1</h1>
                <div className="strip"></div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="box_col">
            <div className="box">
              <img src={`${baseURL}${data[0]?.image}`} alt={data[0]?.title} />
            </div>
          </Col>
          <Col xs={12} md={4} className="service_col">
            <div className="service_1">
              <h4>{data[2]?.title}</h4>
              <p>{data[2]?.description}</p>
              <div className="line">
                <h1 className="digit">3</h1>
                <div className="strip"></div>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="c_hr" />
        <Row className="bottom_div">
          <Col xs={12} md={4} className="box_col">
            <div className="box">
              <img src={`${baseURL}${data[1]?.image}`} alt={data[1]?.title} />
            </div>
          </Col>
          <Col xs={12} md={4} className="service_col">
            <div className="service_1">
              <h4>{data[1]?.title}</h4>
              <p>{data[1]?.description}</p>
              <div className="line">
                <h1 className="digit">2</h1>
                <div className="strip"></div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="box_col">
            <div className="box">
              <img src={`${baseURL}${data[1]?.image}`} alt={data[1]?.title} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default KeyFeatures;
