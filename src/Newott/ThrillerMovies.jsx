import React from 'react';
import './ThrillerMovies.scss';

const thrillerMovies = [
  { title: 'BONDED IN BLOOD', img: '/BONDED IN BLOOD.jpg' },
  { title: 'DAYLIGHTS END', img: '/DAYLIGHTS END.jpg' },
  { title: 'EAGLE EYE', img: '/EAGLE EYE.jpg' },
  { title: 'IN THE BLOOD', img: '/IN THE BLOOD.jpg' },
  { title: 'ONLY', img: '/ONLY.jpg' },
  { title: 'THE DARKEST DAWN', img: '/THE DARKEST DAWN.jpg' },
  { title: 'THE LITTLE THINGS', img: '/THE LITTLE THINGS.jpg' },
  { title: 'THREE', img: '/THREE.jpg' },
  { title: 'THRILLER', img: '/THRILLER.png' },
  { title: 'WITHOUT-REMORSE', img: '/WITHOUT-REMORSE.jpg' },
];

const Thriller = () => (
  <div className="thriller-section">
    <h2>💥 Thriller Movies</h2>
    <div className="thriller-grid">
      {thrillerMovies.map((movie, idx) => (
        <div className="thriller-card" key={idx}>
          <img src={movie.img} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Thriller;
