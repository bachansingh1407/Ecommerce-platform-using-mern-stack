import React from 'react'
import './categoryStyle.css';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
  return (
    <div className="category_card">
    <img src={category.image} alt={category.title} />
    <div className="category_content">
      <h3>{category.title}</h3>
      <p>{category.description}</p>
      <Link to={`/collection/${category.id}`} className="explore-link">Explore</Link>
    </div>
  </div>
  )
}

export default CategoryCard