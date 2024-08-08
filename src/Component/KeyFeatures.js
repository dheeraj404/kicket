import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './KeyFeatures.css';

const KeyFeatures = () => {
    return (
        <div className="KeyFeatures">
            <img src="/back.png" className="background-image" alt="Background" />
            <h1 className="heading">Key Features</h1>
            <div style={{padding:'2%'}}>
                <Row className="top_div">
                    <Col xs={12} md={4} className="service_col">
                        <div className="service_1">
                            <h4>Service</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="line">
                                <h1 className="digit">1</h1>
                                <div className="strip"></div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="box_col">
                        <div className="box">
                            <img src="Group 120.svg" alt="Service" />
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="service_col">
                        <div className="service_1">
                            <h4>Service</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                            <img src="Group 120.svg" alt="Service" />
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="service_col">
                        <div className="service_1">
                            <h4>Service</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="line">
                                <h1 className="digit">2</h1>
                                <div className="strip"></div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="box_col">
                        <div className="box">
                            <img src="Group 120.svg" alt="Service" />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default KeyFeatures;
