import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Set data-page attribute on body based on current route
  useEffect(() => {
    if (location.pathname === '/') {
      document.body.setAttribute('data-page', 'home');
    } else {
      document.body.removeAttribute('data-page');
    }
    
    // Force re-apply of styles when theme changes
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add('sticky');
      } else if (location.pathname === '/') {
        header.classList.remove('sticky');
      }
    }
  }, [location.pathname, isDarkMode]);

  return (
    <header className="header">
      <Link to="/" className="logo">rhndzvs.</Link>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''} style={{ color: location.pathname === '/' && !document.querySelector('.header.sticky') ? (isDarkMode ? 'var(--white-color)' : 'var(--black-color)') : '' }}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About
        </Link>
        <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>
          Gallery
        </Link>
        <Link to="/support" className={location.pathname === '/support' ? 'active' : ''}>
          Support
        </Link>
      </nav>

      <div className="nav-controls">
        <i 
          className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'}`}
          id="darkMode-icon"
          onClick={toggleTheme}
          style={{ color: location.pathname === '/' && !document.querySelector('.header.sticky') ? (isDarkMode ? 'var(--white-color)' : 'var(--black-color)') : '' }}
        />
        <i 
          className="bx bx-menu" 
          id="menu-icon"
          onClick={toggleMenu}
        />
      </div>
    </header>
  );
};

export default Header; 