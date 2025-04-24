import React from 'react'
import './TestimonialStyle.css'

const TestimonialsCard = ({ image, name, text, title, isActive }) => {
  return (
    <div className={`testimonials_card ${isActive ? 'active' : ''}`}>
      <img src={image} alt={name} className="testimonials_img" />
      <p className="testimonials_text">"{text}"</p>
      <h4 className="testimonials_name">{name}</h4>
      <p className="testimonials_title">{title}</p>
    </div>
  );
}

export default TestimonialsCard