import React from 'react'
import Assurance from './Assurance'
import { Link } from 'react-router-dom';
import './footerStyle.css'
import { VscDebugBreakpointLog } from "react-icons/vsc";
import CopyRight from './CopyRight';

const Footer = () => {
  const footerData = [
    {
      title: 'Online Shopping',
      items: ['Men', 'Women', 'Kids', 'Collections', 'Shop']
    },
    {
      title: 'Customer Policies',
      items: [
        'Contact Us',
        'FAQs',
        'Terms & Conditions',
        'Shipping',
        'Returns',
      ]
    },
    {
      title: 'Keep in Touch',
      items: ['YouTube', 'Twitter', 'Instagram', 'Facebook'],
      isSocial: true
    }
  ];

  return (
    <>
      <Assurance />
      <footer>
        {footerData.map((section, index) => (
          <div key={index} className="footer_section">
            <h3>{section.title}</h3>
            {section.isSocial ? (
              <div className="social_links">
                {section.items.map((link, i) => (
                  <Link key={i} to="#"><span><VscDebugBreakpointLog /></span> {link}</Link>
                ))}
              </div>
            ) : (
              <div className="other_links">
                {section.items.map((item, i) => (
                  <Link key={i} to=""><span><VscDebugBreakpointLog /></span> {item}</Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </footer>
      <CopyRight />
    </>
  )
}

export default Footer