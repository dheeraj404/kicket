import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ClientSlider.css';

const clients = [
  { id: 1, logo: 'Client.png' },
  { id: 2, logo: 'Client.png' },
  { id: 3, logo: 'Client.png' },
  { id: 4, logo: 'Client.png' },
  { id: 5, logo: 'Client.png' },
  { id: 6, logo: 'Client.png' },
  { id: 7, logo: 'Client.png' },
  { id: 8, logo: 'Client.png' },
  { id: 9, logo: 'Client.png' },
  { id: 10, logo: 'Client.png' }
];

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
              src={client.logo}
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
