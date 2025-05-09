import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Herocarousel.css";

// Importation correcte des images
import home1 from '../assets/Home.jpg';
import home2 from '../assets/Home2.jpg';
import home3 from '../assets/Home3.jpg';

const Herocarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    pauseOnHover: false
  };

  const images = [home1, home2, home3];

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div
              className="carousel-image"
              style={{
                backgroundImage: `url(${img})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="overlay-content">
            
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Herocarousel;
