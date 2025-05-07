
// import React from 'react';
// import './CategoriesPage.scss'; 

// const CategoriesPage = () => {
//   const categories = ['Action', 'Drama', 'Comedy', 'Horror', 'Romance', 'Documentary'];

//   return (
//     <div className="categories-page">
//       <h2>Browse by Categories</h2>
//       <ul className="category-list">
//         {categories.map((cat, index) => (
//           <li key={index} className="category-item">
//             {cat}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategoriesPage;

// Newott/CategoriesPage.jsx
import React from 'react';
import './CategoriesPage.scss';

const categories = [
  { name: 'Action', image: 'action-movie.jpg' },
  { name: 'Drama', image: 'the drop.jpg' },
  { name: 'Comedy', image: 'comedy movies.jpg' },
  { name: 'Horror', image: 'insidious.jpg' },
  { name: 'Romance', image: 'romance.jpg' },
  { name: 'Documentary', image: 'documentry.jpg' },
];

const CategoriesPage = () => {
  return (
    <div className="categories-page">
      <h2>Browse by Categories</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
