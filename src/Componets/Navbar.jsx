import React, { useState } from 'react';
import './Navbar.css';
import myname from '../assets/csk.png';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <img src={myname} alt="Logo" className="logo" />

      <div className="hamburger" onClick={toggleMenu}>
        <FaBars size={25} />
      </div>

      <div className={`desktopmenu ${menuOpen ? 'open' : ''}`}>
        <Link className="desktopmenulink" to="intro" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link className="desktopmenulink" to="skill" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About</Link>
        <Link className="desktopmenulink" to="portfolio" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link className="desktopmenulink" to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Contact</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;

