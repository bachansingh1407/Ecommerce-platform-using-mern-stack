import React, { useState } from 'react';
import './categoryStyle.css';
import CategoryCard from './CategoryCard';
import clothsPhoto from '../../assets/cat/cloths.jpg'
import footwearPhoto from '../../assets/cat/footwear.jpg'
import watchesPhoto from '../../assets/cat/watches.jpg'
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'clothes',
    title: 'Clothes',
    image: clothsPhoto,
    description: 'Discover our stylish range of clothing.',
  },
  {
    id: 'shoes',
    title: 'Shoes',
    image: footwearPhoto,
    description: 'Step into comfort and fashion with our shoes.',
  },
  {
    id: 'watches',
    title: 'Watches',
    image: watchesPhoto,
    description: 'Elegant timepieces for every occasion.',
  },
];

const Category = () => {
  const [filter, setFilter] = useState('all');

  const filteredCategories = filter === 'all' ? categories : categories.filter(cat => cat.id === filter);

  return (
    <div className="category_container">
      <div className="heading">
        <h2>Limited Edition</h2>
        <div className="category_controls">
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.title}</option>
            ))}
          </select>
          <Link to="/collection" className="view-all-btn">View All</Link>
        </div>
      </div>

      <div className="category_grid">
        {filteredCategories.map(cat => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
};

export default Category;

