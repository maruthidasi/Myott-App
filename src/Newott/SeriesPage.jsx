// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './SeriesPage.scss';

// const SeriesPage = () => {
//   const [series, setSeries] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchInput, setSearchInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [suggestions, setSuggestions] = useState([]);
//   const [imageSuggestions, setImageSuggestions] = useState([]);

//   const navigate = useNavigate(); // Initialize navigate hook

//   const localImages = [
//     { src: '/A better You.jpg', title: 'A better You' },
//     { src: '/Another You.jpg', title: 'Another You' },
//     { src: '/We are not alone.jpg', title: 'We are not alone' },
//     { src: '/The aliens.jpg', title: 'The aliens' },
//     { src: '/Tell_Me_a_Story.jpg', title: 'Tell Me a Story' },
//     { src: '/Sherlock Gnomes.jpg', title: 'Sherlock Gnomes' },
//     { src: '/GnaughtyGnomes.jpg', title: 'GnaughtyGnomes' },
//     { src: '/Upload.jpg', title: 'Upload' },
//     { src: '/Atypical.jpg', title: 'Atypical' },
//     { src: '/Booksmart.jpg', title: 'Booksmart' },
//     { src: '/Choose or die.jpg', title: 'Choose or die' },
//     { src: '/Everything.jpg', title: 'Everything' },
//     { src: '/Good Trouble.jpg', title: 'Good Trouble' },
//     { src: '/If.jpg', title: 'If' },
//     { src: '/Still up.jpg', title: 'Still up' },
//     { src: '/Two weeks to live.jpg', title: 'Two weeks to live' }
//   ];

//   useEffect(() => {
//     const fetchSeries = async () => {
//       try {
//         setLoading(true);
//         const url = searchQuery
//           ? `https://api.themoviedb.org/3/search/tv?api_key=YOUR_API_KEY&query=${searchQuery}`
//           : `https://api.themoviedb.org/3/tv/popular?api_key=YOUR_API_KEY`;
//         const response = await axios.get(url);
//         setSeries(response.data.results);
//       } catch (error) {
//         console.error('Error fetching series:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSeries();
//   }, [searchQuery]);

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (searchInput.trim() === '') {
//         setSuggestions([]);
//         setImageSuggestions([]);
//         return;
//       }

//       try {
//         const url = `https://api.themoviedb.org/3/search/tv?api_key=YOUR_API_KEY&query=${searchInput}`;
//         const response = await axios.get(url);
//         const results = response.data.results || [];
//         setSuggestions(results.slice(0, 5));
//       } catch (error) {
//         console.error('Error fetching suggestions:', error);
//       }

//       // Local image suggestions
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
//     <div className="series-page">
//       {/* Back Button */}
//       <button onClick={() => navigate('/home')} className="back-btn">
//         ⬅️ Back to Home
//       </button>

//       <h1>TV Series</h1>

//       <form className="search-form" onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search series..."
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
//                   setSearchInput(sug.name);
//                   setSearchQuery(sug.name);
//                   setSuggestions([]);
//                   setImageSuggestions([]);
//                 }}
//               >
//                 {sug.name}
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
//         <div className="series-list">
//           {series.length > 0 ? (
//             series.map((show) => (
//               <div key={show.id} className="series-card">
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
//                   alt={show.name}
//                 />
//                 <h3>{show.name}</h3>
//               </div>
//             ))
//           ) : (
//             <p className="no-results">Result found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SeriesPage;


import React, { useState, useEffect, useMemo } from 'react';
import './SeriesPage.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SeriesPage = () => {
  const [series, setSeries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [imageSuggestions, setImageSuggestions] = useState([]);

  const navigate = useNavigate();

  const localImages = useMemo(() => [
    { src: '/A better You.jpg', title: 'A better You' },
    { src: '/Another You.jpg', title: 'Another You' },
    { src: '/We are not alone.jpg', title: 'We are not alone' },
    { src: '/The aliens.jpg', title: 'The aliens' },
    { src: '/Tell_Me_a_Story.jpg', title: 'Tell Me a Story' },
    { src: '/Sherlock Gnomes.jpg', title: 'Sherlock Gnomes' },
    { src: '/GnaughtyGnomes.jpg', title: 'GnaughtyGnomes' },
    { src: '/Upload.jpg', title: 'Upload' },
    { src: '/Atypical.jpg', title: 'Atypical' },
    { src: '/Booksmart.jpg', title: 'Booksmart' },
    { src: '/Choose or die.jpg', title: 'Choose or die' },
    { src: '/Everything.jpg', title: 'Everything' },
    { src: '/Good Trouble.jpg', title: 'Good Trouble' },
    { src: '/If.jpg', title: 'If' },
    { src: '/Still up.jpg', title: 'Still up' },
    { src: '/Two weeks to live.jpg', title: 'Two weeks to live' }
  ], []);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        setLoading(true);
        const url = searchQuery
          ? `https://api.themoviedb.org/3/search/tv?api_key=YOUR_API_KEY&query=${searchQuery}`
          : `https://api.themoviedb.org/3/tv/popular?api_key=YOUR_API_KEY`;
        const response = await axios.get(url);
        setSeries(response.data.results);
      } catch (error) {
        console.error('Error fetching series:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, [searchQuery]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchInput.trim() === '') {
        setSuggestions([]);
        setImageSuggestions([]);
        return;
      }

      try {
        const url = `https://api.themoviedb.org/3/search/tv?api_key=YOUR_API_KEY&query=${searchInput}`;
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
  }, [searchInput, localImages]);

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
    <div className="series-page">
      <button onClick={() => navigate('/home')} className="back-btn">
        ⬅️ Back to Home
      </button>

      <h1>TV Series</h1>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search series..."
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
                  setSearchInput(sug.name);
                  setSearchQuery(sug.name);
                  setSuggestions([]);
                  setImageSuggestions([]);
                }}
              >
                {sug.name}
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
        <div className="series-list">
          {series.length > 0 ? (
            series.map((show) => (
              <div key={show.id} className="series-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  alt={show.name}
                />
                <h3>{show.name}</h3>
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

export default SeriesPage;
