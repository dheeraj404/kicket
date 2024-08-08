import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import ClientSlider from "./ClientSlider";
import { useNavigate } from "react-router-dom";
import SimpleCarousel from "./SimpleCarousel";
import ServicesSnippets from "./ServicesSnippets";
import HomeService from "./HomeService";
import Footer from "./Footer";
import TopFooter from "./TopFooter";

function Home() {
  const [testimonials, setTestimonials] = useState([]);
  const [homeContent, setHomeContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("https://kicketapi.webprismits.us/api/testimonial");
        console.log("Testimonials data:", response.data); // Debugging line
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials data:", error);
      }
    };

    const fetchHomeContent = async () => {
      try {
        const response = await axios.get("https://kicketapi.webprismits.us/api/home-content");
        console.log("Home content data:", response.data); // Debugging line
        setHomeContent(response.data[0].why_kicket);
      } catch (error) {
        console.error("Error fetching home content data:", error);
      }
    };

    fetchTestimonials();
    fetchHomeContent();
  }, []);

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.4),rgba(37, 37, 37, 1))",
    zIndex: 1,
  };

  const contentStyle = {
    zIndex: 2,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5.5rem",
    transform:'scale(1.15)'
  };

  const backImageStyle = {
    backgroundImage: "url(/back.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  };

  const handleButtonClick = () => {
    navigate("/why-kicket");
  };

  return (
    <div className="home">
      <div className="home_first_div">
        <div style={overlayStyle}></div>
        <div style={contentStyle}>
          <header className="header">
            <img
              src="/kicket-title.svg"
              alt="Kicket Title"
              className="kicket-title"
            />
          </header>
        </div>
      </div>
<div className="without_first"> 
      <div className="why_kicket_compo">
      
        <div className="why_kicket_compo_heading">
          <h1>
            Why <span>Kicket</span>
          </h1>
        </div>
        <div className="why_kicket_compo_para">
          <p>{homeContent}</p>
        </div>
        <div className="why_kicket_compo_button">
          <button onClick={handleButtonClick}>Know more</button>
        </div>
      
      </div>
      <HomeService />
      <ServicesSnippets />
      <div className="testimonials_client">
        <SimpleCarousel testimonials={testimonials} />
        <ClientSlider />
      </div>
      <TopFooter /> 
      <Footer />
      </div>
    </div>
  );
}

export default Home;
