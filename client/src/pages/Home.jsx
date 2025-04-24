import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import Category from '../components/category/Category'
import Testimonials from '../components/testimonals/Testimonials'

const Home = () => {
  return (
    <>
    <div className='home_container'>
      <div className="home_content">
        <h1>Discover <span className='fashion-cover'>fashion</span> that defines the <span>moment</span></h1>
        <p>From timeless essentials to bold statements, we bring the runway to your everyday.</p>
        <Link to="/collection" className='actionBtn'>Collection</Link>
      </div>
    </div>
    <Category />
    <Testimonials />
    </>
  )
}

export default Home