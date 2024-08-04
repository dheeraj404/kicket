import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeService.css";

const HomeService = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to update state with the current screen width
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigateToService1 = () => {
    console.log('bt1');
    navigate("/services1");
  };

  const navigateToService2 = () => {
    console.log('bt2');
    navigate("/services2");
  };

  return (
    <div className="HomeService">
      <div className="first_div">
        <div className="image_gradint">
          <div className="responsive-img-container">
            <img src="/service.png" alt="Responsive Image" />
          </div>
          <div className="gradint_fam_1">
            <div className="gradint_line"></div>
            <div className="gradient_circle"></div>
          </div>
        </div>
        <div className="number_content">
          <div className="number">1</div>
          <div className="first_div_content">
            <h1>Our Ticket booking</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum{" "}
            </p>
            <div className="right_button">
              <button onClick={navigateToService1}>Know more</button>
            </div>
          </div>
        </div>
      </div>

      <div className="second_div">
        <div className="second_div_image_gradint">
          <div className="responsive-img-container">
            <img src="/nice.png" alt="Responsive Image" />
          </div>
          <div className="gradint_fam">
            <div className="gradint_line"></div>
            <div className="gradient_circle"></div>
          </div>
        </div>
        <div className="second_div_number_content">
          <div className="second_div_content">
            <h1>Our Ticket booking</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum{" "}
            </p>
            <div className="left_button">
              <button onClick={navigateToService2}>Know more</button>
            </div>
          </div>
          <div className="second_number">2</div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
