import React from 'react'
import './footerStyle.css'

const CopyRight = () => {
  return (
    <p className='copyright'>© {new Date().getFullYear()} Store. All rights reserved. Developed By Bachan Singh</p>
  )
}

export default CopyRight