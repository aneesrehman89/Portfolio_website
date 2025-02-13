import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import logo from '../Pics/new.png';

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to track navbar toggle

  const handleNavLinkClick = () => {
    setIsNavbarOpen(false); // Close navbar when a link is clicked
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen); // Toggle the navbar open state
  };

  return (
    <div className='container-fluid'>
      <nav className='navbar navbar-expand-lg navbar-dark Navbar mx-auto fixed-top'>
        <div className='container'>
          <img
            src={logo}
            style={{ height: '80px' }}
            className='logo'
            alt='logo'
          />
          <Link
            className='navbar-brand fs-2'
            style={{ height: '50px' }}
            to='/'
            onClick={handleNavLinkClick}
          >
            Anees Ur Rehman
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            aria-label='Toggle navigation'
            onClick={toggleNavbar} // Use React state to toggle the navbar
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav mx-auto mb-2 mb-lg-0 me-auto text-center text-lg-start'>
              <li className='nav-item'>
                <NavLink
                  className='nav-link fs-5 textColor'
                  aria-current='page'
                  to='/'
                  onClick={handleNavLinkClick}
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link fs-5 textColor'
                  aria-current='page'
                  to='/About'
                  onClick={handleNavLinkClick}
                >
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link fs-5 textColor'
                  aria-current='page'
                  to='/Education'
                  onClick={handleNavLinkClick}
                >
                  Education
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link fs-5 textColor'
                  aria-current='page'
                  to='/Projects'
                  onClick={handleNavLinkClick}
                >
                  Projects
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link fs-5 textColor'
                  to='/Contact'
                  onClick={handleNavLinkClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
