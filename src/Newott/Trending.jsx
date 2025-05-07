import React from 'react';
import './Trending.scss';

const trendingMovies = [
  { title: 'AGE Of DRAGONS', img: '/age of dragons.jpg' },
  { title: 'BLOOD,WHITE & BLUE', img: '/blood white.jpg' },
  { title: 'LOCKDOWN2025', img: '/lockdown2025.jpg' },
  { title: 'THUNDERBOLTS', img: '/thunderbolts.jpg' },
  { title: 'BATTLEFIELD_2025', img: '/Battlefield_2025.jpg' },
  { title: 'SCORNED', img: '/SCORNED.jpg' },
  { title: '2047 SIGHTS OF DEATH', img: '/2047 SIGHTS OF DEATH.jpg' },
  { title: 'BLIND', img: '/BLIND.jpg' },
  { title: 'BLINDSPOTTING', img: '/BLINDSPOTTING.jpg' },
  { title: 'BLOOD', img: '/BLOOD.jpg' },
];

const Trending = () => (
  <div className="trending-section">
    <h2>🔥 Trending Now</h2>
    <div className="trending-grid">
      {trendingMovies.map((movie, idx) => (
        <div className="trending-card" key={idx}>
          <img src={movie.img} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Trending;
