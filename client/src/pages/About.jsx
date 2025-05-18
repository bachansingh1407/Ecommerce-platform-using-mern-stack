import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import teamImage from '../assets/team1.jpg'; 
import founderImage from '../assets/owner.jpg'; 
import valuesIcon from '../assets/values.jpg';
import missionIcon from '../assets/goal.jpg'; 
import visionIcon from '../assets/vision.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Our Story</h1>
          <p>Discover the passion and dedication behind our brand</p>
          <Link to="/collections" className="cta-button">Shop Now</Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <h2>Who We Are</h2>
            <p>Founded in 2015, our fashion brand began as a small boutique with a big vision. Today, we've grown into a renowned name in the industry, known for our commitment to quality, sustainability, and timeless style.</p>
            <p>What started as a passion project between two friends has blossomed into a thriving business that serves customers worldwide. We remain true to our roots while constantly innovating to bring you the best in contemporary fashion.</p>
          </div>
          <div className="story-image">
            <img src={teamImage} alt="Our team working together" />
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-image">
            <img src={founderImage} alt="Founder Jane Doe" />
          </div>
          <div className="founder-quote">
            <blockquote>
              "Fashion is not just about clothing—it's about expressing your true self to the world. We create pieces that help you tell your unique story."
            </blockquote>
            <p className="founder-name">Jane Doe</p>
            <p className="founder-title">Founder & Creative Director</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <img src={valuesIcon} alt="Quality icon" />
              <h3>Quality Craftsmanship</h3>
              <p>Every stitch matters. We use premium materials and traditional techniques to create garments that stand the test of time.</p>
            </div>
            <div className="value-card">
              <img src={missionIcon} alt="Sustainability icon" />
              <h3>Sustainable Practices</h3>
              <p>We're committed to ethical sourcing and reducing our environmental impact at every stage of production.</p>
            </div>
            <div className="value-card">
              <img src={visionIcon} alt="Innovation icon" />
              <h3>Customer Focus</h3>
              <p>Your satisfaction is our priority. We listen, adapt, and go the extra mile to exceed your expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Experience Our Collection?</h2>
          <Link to="/collections" className="cta-button">Browse Products</Link>
        </div>
      </section>
    </div>
  );
};

export default About;