import React, { useState } from 'react';
import Navbar from './Navbar';
import './Homepage.scss';
import { Link } from 'react-router-dom';
import Trending from './Trending';
import Footer from './Footer';
import Thriller from './ThrillerMovies';


const images = [
  '/hit.jpg',
  '/avengers.jpg',
  '/2025.jpg'
];

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="image-slider">
        <img
          src={images[currentImageIndex]}
          alt="OTT Slide"
          className="homepage-image"
        />
         <div className="watch-now-container fade-in">
        <Link to="/video"><button className="watch-btn">
         🎬 Watch Now
        </button></Link>
      </div>
        <div className="image-overlay">
        <Link to="/video"><button className="watch-btn">Watch Trailer</button></Link>
        </div>
        <button className="nav-btn left" onClick={prevImage}>‹</button>
        <button className="nav-btn right" onClick={nextImage}>›</button>
      </div>
      <Trending />
      <Thriller/>
      <Footer />
    </div>
  );
};

export default Homepage;
