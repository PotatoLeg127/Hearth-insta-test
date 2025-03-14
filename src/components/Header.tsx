import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const facebookUrl = 'https://www.facebook.com/YourCafe';
  const instagramUrl = 'https://www.instagram.com/instagram?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';

  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            Hearth &amp; Bean
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-secondary">
            Home
          </Link>
          <Link to="/menu" className="text-white hover:text-secondary">
            Menu
          </Link>
          <Link to="/about" className="text-white hover:text-secondary">
            About Us
          </Link>
          <Link to="/contact" className="text-white hover:text-secondary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <button className="md:hidden text-white hover:text-secondary focus:outline-none focus:text-secondary" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
