import React from "react";
import "./Home.css";
import ClientSlider from "./ClientSlider";
import { useNavigate } from "react-router-dom";
import TestimonialCard from "./TestimonialCard";
import SimpleCarousel from "./SimpleCarousel";
import ServicesSnippets from "./ServicesSnippets";
import HomeService from "./HomeService";
import Footer from "./Footer";
import ResponsiveCard from "./ ResponsiveCard";
import TopFooter from "./TopFooter";
function Home() {
  const data = [
    {
      image: "/pngwing.png",
      title: "Dolor It",
      text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum.",
    },
    {
      image: "https://via.placeholder.com/300x500",
      title: "Another Service",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // Add more items as needed
  ];
  const testimonials = [
    {
      imgUrl: "/user.png",
      name: "Bidisha Bhowmick",
      rating: 4,
      review: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    },
    {
      imgUrl: "/user.png",
      name: "John Doe",
      rating: 5,
      review:
        "Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    },
    {
      imgUrl: "/nice.png",
      name: "Jane Smith",
      rating: 3,
      review:
        "Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris.",
    },
    {
      imgUrl: "https://via.placeholder.com/150",
      name: "Jane Smith",
      rating: 3,
      review:
        "Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris.",
    },
    {
      imgUrl: "https://via.placeholder.com/150",
      name: "Jane Smith",
      rating: 3,
      review:
        "Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris.",
    },
    {
      imgUrl: "https://via.placeholder.com/150",
      name: "Jane Smith",
      rating: 3,
      review:
        "Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris.",
    },
    // Add more slides as needed
  ];

  const navigate = useNavigate();

 

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

      <div className="why_kicket_compo">
        <div className="why_kicket_compo_bg">
          <img src="/des.png"/>
        </div>
        <div className="why_kicket_compo_heading">
          <h1>
            Why <span>Kicket</span>
          </h1>
        </div>
        <div className="why_kicket_compo_para">
         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="why_kicket_compo_button"><button onClick={handleButtonClick}>Know more</button></div>
      </div>
           <HomeService></HomeService>
        <ServicesSnippets items={data}/>
        <div style={backImageStyle}>
     
        <SimpleCarousel testimonials={testimonials} />
<ClientSlider></ClientSlider>
      </div>
<TopFooter></TopFooter>
      <Footer></Footer>
    </div>
  );
}

export default Home;
