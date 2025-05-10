import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import Category from '../components/category/Category'
import Testimonials from '../components/testimonals/Testimonials'
import Look from '../components/look/Look'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <div className='home_container'>
        <section className="home_content">
          <h1>Discover <span className='fashion-cover'>fashion</span> that<br /> defines the <span>moment</span></h1>
          <p>From timeless essentials to bold statements, we bring the runway to your everyday.</p>
          <Link to="/collection" className='actionBtn'>Collection</Link>
        </section>

      </div>
      <Category />
      <Testimonials />
      <Look />
      <Footer />
    </>
  )
}

export default Home