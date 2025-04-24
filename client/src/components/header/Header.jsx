import React from 'react'
import Logo from '../common/Logo'
import Navbar from '../common/Navbar'
import './header.css'
import { Link } from 'react-router-dom'
import { IoMdPerson, IoMdMenu, IoMdClose } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import { useState } from 'react';

const Header = () => {
    const { cartItemCount } = 1
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header>
            <div className="header-container">
                <div className="header-left">
                    <button 
                        className="mobile-menu-button" 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
                    </button>
                    <Logo />
                </div>
                
                <div className={`header-right ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    <Navbar isMobile={isMobileMenuOpen} />
                    <div className="actions">
                        <Link to="/account" className="iconButton" aria-label="account">
                            <IoMdPerson />
                        </Link>
                        <Link to="/cart" className="iconButton" aria-label="cart">
                            <div className="cartBadge">
                                <GiShoppingBag />
                                {cartItemCount && (
                                    <span className='badge'>{cartItemCount}</span>
                                )}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;