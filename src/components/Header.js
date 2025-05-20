// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  const [navActive, setNavActive] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const links = [
    { label: 'Home', to: '/#karnavbhai' },
    { label: 'About', to: '/#about-us' },
    { label: 'Journey', to: '/#journey' },
    { label: 'Spiritual', to: '/#spiritual' },
    { label: 'Thoughts', to: '/#news-image' },
    { label: 'Online Katha', to: '/#online-katha' },
    { label: 'Contact', to: '/#footer-section' },
  ];

  const handleLinkClick = label => {
    setActiveLink(label);
    setNavActive(false);
  };

  return (
    <header className={navActive ? 'show' : ''}>
      <div className="logo">
        <span className="logo-text">Dr. Karnav Shashtri</span>
      </div>

      <nav className={`nav ${navActive ? 'active' : ''}`}>
        {links.map(link => (
          <HashLink
            key={link.label}
            to={link.to}
            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className={activeLink === link.label ? 'active' : ''}
            onClick={() => handleLinkClick(link.label)}
          >
            {link.label}
          </HashLink>
        ))}
      </nav>

      <Link to="/donate" className="donate-btn">
        Donate Now
      </Link>

      <button
        className={`nav-toggle ${navActive ? 'active' : ''}`}
        aria-label="toggle navigation"
        onClick={() => setNavActive(!navActive)}
      >
        <span className="hamburger"></span>
        <span className="close-icon fa-solid fa-xmark"></span>
      </button>
    </header>
  );
}
