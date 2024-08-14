import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WhyKicket.css';
import ToggleCard from './ToggleCard';
import TopFooter from './TopFooter';
import Footer from './Footer';
import ResponsiveCarousel from './ResponsiveCarousel';

const WhyKicket = () => {
  const [cardData, setCardData] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  const [aboutData, setAboutData] = useState(null);

  const baseURL = 'https://kicketapi.webprismits.us/assets/about/';

  useEffect(() => {
    axios.get('https://kicketapi.webprismits.us/api/selling-points')
      .then(response => {
        setCardData(response.data);
      })
      .catch(error => {
        console.error('Error fetching card data:', error);
      });

  
      axios.get('https://kicketapi.webprismits.us/api/success-stories')
  .then(response => {
    // Map through each item in the response data and prepend the base URL to the image path
    const updatedData = response.data.map(item => {
      if (item.image) {
        return { ...item, image: `https://kicketapi.webprismits.us/assets/stories/${item.image}` };
      }
      return item;
    });
    setCarouselData(updatedData);
  })
  .catch(error => {
    console.error('Error fetching carousel data:', error);
  });


    axios.get('https://kicketapi.webprismits.us/api/about-content')
      .then(response => {
        setAboutData(response.data);
        console.log(response.data[0].image)
      })
      .catch(error => {
        console.error('Error fetching about data:', error);
      });
  }, []);

  return (
    <div className='Whykicket'>
      <div className="contact-background_why">
        <h1>Why Kicket</h1>
      </div>
      <div className='Whykicket_second'>
        {aboutData && aboutData.length > 0 && (
          <div className="Whykicket_flex-container">
            <div className="image-container">
              <img
                src={`${baseURL}${aboutData[0].image}`}
                alt="Description"
                className="img-fluid custom-img"
              />
            </div>
            <div className="text-container">
              <h2 style={{fontWeight:'750'}}>{aboutData[0].title}</h2>
              <p>{aboutData[0].description}</p>
            </div>
          </div>
        )}

        <ResponsiveCarousel data={carouselData} />

        <div className="why-choose-us-container">
          <div className="image-container_2">
            <img
              src="/whyus.png"
              alt="Why Choose Us"
              className="img-fluid custom-img2"
            />
          </div>
          <div className="text-container">
            <h2>Why Choose Us</h2>
            {cardData.map((card, index) => (
              <ToggleCard key={card.id} title={card.title} index={index}>
                {card.description}
              </ToggleCard>
            ))}
          </div>
        </div>

        <TopFooter />
        <Footer />
      </div>
    </div>
  );
};

export default WhyKicket;
