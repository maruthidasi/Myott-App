// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './MoviesPage.scss'; 

// const MoviesPage = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchInput, setSearchInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [suggestions, setSuggestions] = useState([]);
//   const [imageSuggestions, setImageSuggestions] = useState([]);

//   const localImages = [
//     { src: '/age of dragons.jpg', title: 'age of dragons' },
//     { src: '/DAYLIGHTS END.jpg', title: 'DAYLIGHTS END' },
//     { src: '/lockdown2025.jpg', title: 'lockdown2025' },
//     { src: '/Battlefield_2025.jpg', title: 'Battlefield_2025' },
//     { src: '/thunderbolts.jpg', title: 'thunderbolts' },
//     { src: '/SCORNED.jpg', title: 'SCORNED' },
//     { src: '/2047 SIGHTS OF DEATH.jpg', title: '2047 SIGHTS OF DEATH' },
//     { src: '/BLIND.jpg', title: 'BLIND' },
//     { src: '/BLOOD.jpg', title: 'BLOOD' },
//     { src: '/BLINDSPOTTING.jpg', title: 'BLINDSPOTTING' },
//     { src: '/IN THE BLOOD.jpg', title: 'IN THE BLOOD' }
//   ];

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         setLoading(true);
//         const url = searchQuery
//           ? `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${searchQuery}`
//           : `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY`;
//         const response = await axios.get(url);
//         setMovies(response.data.results);
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, [searchQuery]);

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (searchInput.trim() === '') {
//         setSuggestions([]);
//         setImageSuggestions([]);
//         return;
//       }

//       try {
//         const url = `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${searchInput}`;
//         const response = await axios.get(url);
//         const results = response.data.results || [];
//         setSuggestions(results.slice(0, 5));
//       } catch (error) {
//         console.error('Error fetching suggestions:', error);
//       }

//       const filtered = localImages.filter(img =>
//         img.title.toLowerCase().includes(searchInput.toLowerCase())
//       );
//       setImageSuggestions(filtered.slice(0, 5));
//     };

//     fetchSuggestions();
//   }, [searchInput]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setSearchQuery(searchInput.trim());
//     setSuggestions([]);
//     setImageSuggestions([]);
//   };

//   const filteredImages = searchQuery
//     ? localImages.filter((img) =>
//         img.title.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : localImages;

//   return (
//     <div className="movies-page">
//       <h1>Movies</h1>

//       <form className="search-form" onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search movies..."
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//           autoComplete="off"
//         />
//         <button type="submit">Search</button>

//         {suggestions.length > 0 && (
//           <ul className="suggestions-list">
//             {suggestions.map((sug) => (
//               <li
//                 key={sug.id}
//                 onClick={() => {
//                   setSearchInput(sug.title);
//                   setSearchQuery(sug.title);
//                   setSuggestions([]);
//                   setImageSuggestions([]);
//                 }}
//               >
//                 {sug.title}
//               </li>
//             ))}
//           </ul>
//         )}

//         {imageSuggestions.length > 0 && (
//           <ul className="image-suggestions-list">
//             {imageSuggestions.map((img, i) => (
//               <li
//                 key={i}
//                 onClick={() => {
//                   setSearchInput(img.title);
//                   setSearchQuery(img.title);
//                   setImageSuggestions([]);
//                   setSuggestions([]);
//                 }}
//               >
//                 <img src={img.src} alt={img.title} className="image-thumb" />
//                 {img.title}
//               </li>
//             ))}
//           </ul>
//         )}
//       </form>

//       {filteredImages.length > 0 && (
//         <div className="featured-images-container">
//           {filteredImages.map((img, i) => (
//             <div className="featured-image" key={i}>
//               <img src={img.src} alt={img.title} title={img.title} />
//             </div>
//           ))}
//         </div>
//       )}

//       {loading ? (
//         <div className="loader-container">
//           <div className="loader"></div>
//         </div>
//       ) : (
//         <div className="movies-list">
//           {movies.length > 0 ? (
//             movies.map((movie) => (
//               <div key={movie.id} className="movie-card">
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                   alt={movie.title}
//                 />
//                 <h3>{movie.title}</h3>
//               </div>
//             ))
//           ) : (
//             <p className="no-results"></p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MoviesPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './MoviesPage.scss'; 

// const MoviesPage = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchInput, setSearchInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [suggestions, setSuggestions] = useState([]);
//   const [imageSuggestions, setImageSuggestions] = useState([]);

//   const navigate = useNavigate(); // Initialize navigate hook

//   const localImages = [
//     { src: '/age of dragons.jpg', title: 'age of dragons' },
//     { src: '/DAYLIGHTS END.jpg', title: 'DAYLIGHTS END' },
//     { src: '/lockdown2025.jpg', title: 'lockdown2025' },
//     { src: '/Battlefield_2025.jpg', title: 'Battlefield_2025' },
//     { src: '/thunderbolts.jpg', title: 'thunderbolts' },
//     { src: '/SCORNED.jpg', title: 'SCORNED' },
//     { src: '/2047 SIGHTS OF DEATH.jpg', title: '2047 SIGHTS OF DEATH' },
//     { src: '/BLIND.jpg', title: 'BLIND' },
//     { src: '/BLOOD.jpg', title: 'BLOOD' },
//     { src: '/BLINDSPOTTING.jpg', title: 'BLINDSPOTTING' },
//     { src: '/IN THE BLOOD.jpg', title: 'IN THE BLOOD' }
//   ];

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         setLoading(true);
//         const url = searchQuery
//           ? `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${searchQuery}`
//           : `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY`;
//         const response = await axios.get(url);
//         setMovies(response.data.results);
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, [searchQuery]);

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (searchInput.trim() === '') {
//         setSuggestions([]);
//         setImageSuggestions([]);
//         return;
//       }

//       try {
//         const url = `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${searchInput}`;
//         const response = await axios.get(url);
//         const results = response.data.results || [];
//         setSuggestions(results.slice(0, 5));
//       } catch (error) {
//         console.error('Error fetching suggestions:', error);
//       }

//       const filtered = localImages.filter(img =>
//         img.title.toLowerCase().includes(searchInput.toLowerCase())
//       );
//       setImageSuggestions(filtered.slice(0, 5));
//     };

//     fetchSuggestions();
//   }, [searchInput]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setSearchQuery(searchInput.trim());
//     setSuggestions([]);
//     setImageSuggestions([]);
//   };

//   const filteredImages = searchQuery
//     ? localImages.filter((img) =>
//         img.title.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : localImages;

//   return (
//     <div className="movies-page">
//       {/* Back Button */}
//       <button onClick={() => navigate('/home')} className="back-btn">
//         ⬅️ Back to Home
//       </button>

//       <h1>Movies</h1>

//       <form className="search-form" onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search movies..."
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//           autoComplete="off"
//         />
//         <button type="submit">Search</button>

//         {suggestions.length > 0 && (
//           <ul className="suggestions-list">
//             {suggestions.map((sug) => (
//               <li
//                 key={sug.id}
//                 onClick={() => {
//                   setSearchInput(sug.title);
//                   setSearchQuery(sug.title);
//                   setSuggestions([]);
//                   setImageSuggestions([]);
//                 }}
//               >
//                 {sug.title}
//               </li>
//             ))}
//           </ul>
//         )}

//         {imageSuggestions.length > 0 && (
//           <ul className="image-suggestions-list">
//             {imageSuggestions.map((img, i) => (
//               <li
//                 key={i}
//                 onClick={() => {
//                   setSearchInput(img.title);
//                   setSearchQuery(img.title);
//                   setImageSuggestions([]);
//                   setSuggestions([]);
//                 }}
//               >
//                 <img src={img.src} alt={img.title} className="image-thumb" />
//                 {img.title}
//               </li>
//             ))}
//           </ul>
//         )}
//       </form>

//       {filteredImages.length > 0 && (
//         <div className="featured-images-container">
//           {filteredImages.map((img, i) => (
//             <div className="featured-image" key={i}>
//               <img src={img.src} alt={img.title} title={img.title} />
//             </div>
//           ))}
//         </div>
//       )}

//       {loading ? (
//         <div className="loader-container">
//           <div className="loader"></div>
//         </div>
//       ) : (
//         <div className="movies-list">
//           {movies.length > 0 ? (
//             movies.map((movie) => (
//               <div key={movie.id} className="movie-card">
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                   alt={movie.title}
//                 />
//                 <h3>{movie.title}</h3>
//               </div>
//             ))
//           ) : (
//             <p className="no-results">No movies found</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MoviesPage;
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './MoviesPage.scss';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [imageSuggestions, setImageSuggestions] = useState([]);

  const navigate = useNavigate(); // Initialize navigate hook

  // Memoize the localImages array to prevent unnecessary re-renders
  const localImages = useMemo(() => [
    { src: '/age of dragons.jpg', title: 'age of dragons' },
    { src: '/DAYLIGHTS END.jpg', title: 'DAYLIGHTS END' },
    { src: '/lockdown2025.jpg', title: 'lockdown2025' },
    { src: '/Battlefield_2025.jpg', title: 'Battlefield_2025' },
    { src: '/thunderbolts.jpg', title: 'thunderbolts' },
    { src: '/SCORNED.jpg', title: 'SCORNED' },
    { src: '/2047 SIGHTS OF DEATH.jpg', title: '2047 SIGHTS OF DEATH' },
    { src: '/BLIND.jpg', title: 'BLIND' },
    { src: '/BLOOD.jpg', title: 'BLOOD' },
    { src: '/BLINDSPOTTING.jpg', title: 'BLINDSPOTTING' },
    { src: '/IN THE BLOOD.jpg', title: 'IN THE BLOOD' }
  ], []); // Empty dependency array ensures this array is memoized

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const url = searchQuery
          ? `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${searchQuery}`
          : `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY`;
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchInput.trim() === '') {
        setSuggestions([]);
        setImageSuggestions([]);
        return;
      }

      try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${searchInput}`;
        const response = await axios.get(url);
        const results = response.data.results || [];
        setSuggestions(results.slice(0, 5));
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }

      const filtered = localImages.filter(img =>
        img.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setImageSuggestions(filtered.slice(0, 5));
    };

    fetchSuggestions();
  }, [searchInput, localImages]); // Include localImages in the dependency array

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput.trim());
    setSuggestions([]);
    setImageSuggestions([]);
  };

  const filteredImages = searchQuery
    ? localImages.filter((img) =>
        img.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : localImages;

  return (
    <div className="movies-page">
      {/* Back Button */}
      <button onClick={() => navigate('/home')} className="back-btn">
        ⬅️ Back to Home
      </button>

      <h1>Movies</h1>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">Search</button>

        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((sug) => (
              <li
                key={sug.id}
                onClick={() => {
                  setSearchInput(sug.title);
                  setSearchQuery(sug.title);
                  setSuggestions([]);
                  setImageSuggestions([]);
                }}
              >
                {sug.title}
              </li>
            ))}
          </ul>
        )}

        {imageSuggestions.length > 0 && (
          <ul className="image-suggestions-list">
            {imageSuggestions.map((img, i) => (
              <li
                key={i}
                onClick={() => {
                  setSearchInput(img.title);
                  setSearchQuery(img.title);
                  setImageSuggestions([]);
                  setSuggestions([]);
                }}
              >
                <img src={img.src} alt={img.title} className="image-thumb" />
                {img.title}
              </li>
            ))}
          </ul>
        )}
      </form>

      {filteredImages.length > 0 && (
        <div className="featured-images-container">
          {filteredImages.map((img, i) => (
            <div className="featured-image" key={i}>
              <img src={img.src} alt={img.title} title={img.title} />
            </div>
          ))}
        </div>
      )}

      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="movies-list">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </div>
            ))
          ) : (
            <p className="no-results"></p>
          )}
        </div>
      )}
    </div>
  );
};

export default MoviesPage;

