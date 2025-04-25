import React from 'react';
import './lookStyle.css'

const LookSection = ({ title, image }) => {
  return (
    <div className="look_section">
      <img src={image} alt={`${title} look`} />
      <p>{title}</p>
    </div>
  );
};

export default LookSection;
