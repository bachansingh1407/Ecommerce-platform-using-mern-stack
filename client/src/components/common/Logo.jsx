import React from 'react'
import { Link } from 'react-router-dom'
import './logo.css'

const Logo = () => {
  return (
    <Link to='/' className='logo'>Store</Link>
  )
}

export default Logo