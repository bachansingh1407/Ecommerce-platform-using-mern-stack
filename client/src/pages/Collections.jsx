import React from 'react';
import { Link } from 'react-router-dom';
import './collections.css';
import productsData from './ProductData'

const Collections = () => {

  // Group products by category for filtering
  const categories = [...new Set(productsData.map(product => product.category))];

  return (
    <div className="collections-container">
      <div className="collections-header">
        <h1>Our Collection</h1>
        <p>Discover our wide range of fashion products</p>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <button className="filter-btn active">All</button>
        {categories.map(category => (
          <button key={category} className="filter-btn">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {productsData.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-overlay">
                <Link to={`/product/${product.id}`} className="view-btn">
                  View Details
                </Link>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <p className="product-category">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;