import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Create a CSS file to add any custom styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="f_c">
        <div className="footer_main_div">
          <div className="footer_first_div">
            <h1>
              <img
                src={`${process.env.PUBLIC_URL}/kicket-logo.svg`}
                alt="Kicket Logo"
                className="footer-logo"
              />
              Kicket
            </h1>
            <div className="footer-paragraph">
              <p>
                Lorem ipsum dolor sit amet consectetur. Duis tempus duis mattis
                sollicitudin lorem. Nulla sed gravida orci amet vitae vel
                feugiat diam est. Ac adipiscing nisi eget nam elementum euismod
                nibh sed.
              </p>
            </div>
            <div className="social-icons">
              <a href="#">
                <i
                  className="fab fa-facebook-f gradient-circle fb"
                  style={{ boxSizing: "content-box" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fab fa-instagram gradient-circle"
                  style={{ boxSizing: "content-box" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fab fa-linkedin-in gradient-circle"
                  style={{ boxSizing: "content-box" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fab fa-twitter gradient-circle"
                  style={{ boxSizing: "content-box" }}
                ></i>
              </a>
            </div>
          </div>
          <div className="footer_second_div">
            <div className="footer_links">
              <h4 className="mb-3" >Account Link</h4>
              <ul className="list-unstyled" style={{}}>
                <li>
                  <Link to="/" className="text-light">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-light">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/service1" className="text-light">
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link to="/service2" className="text-light">
                    Service 2
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-light">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer_third_div">
              <h5 className="">Get In Touch</h5>
              <p>
                Email:{" "}
                <a href="mailto:email@email.com" className="text-light">
                  email@email.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+91923456789" className="text-light">
                  +91 923456789
                </a>
              </p>
            </div>
          </div>
         
        </div>
      
      </div>
      <div className="footer_last_image">
            <img src="/design.png" alt="Design" />
          </div>
          <div className="last_moto">
          <p>
            &copy; Kicket | All Rights Reserved | Designed By Web Prism
            Dynamics
          </p>
        </div>
    </footer>
  );
};

export default Footer;
