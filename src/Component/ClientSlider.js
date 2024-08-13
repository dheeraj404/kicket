import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ClientSlider.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1
  }
};

const ClientSlider = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('https://kicketapi.webprismits.us/api/client'); // Replace with your API endpoint
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching client data:', error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="client-slider-container">
      <h2 className="text-center">Our Clients</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // Do not remove arrows on mobile
        removeArrowOnDeviceType={[]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        renderButtonGroupOutside={true}
        arrows={true} // Ensure arrows are enabled
      >
        {clients.map((client) => (
          <div className="client-logo-container" key={client.id}>
            <img
              src={`https://kicketapi.webprismits.us/assets/clients/${client.logo}`}
              alt={`Client ${client.id}`}
              className="client-logo"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ClientSlider;
