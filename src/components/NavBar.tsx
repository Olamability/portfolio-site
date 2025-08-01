import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/favicon.png';

import DarkModeToggle from './DarkModeToggle';
import { Menu, X, Home, FolderOpen, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  if (menuOpen) {
    document.addEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [menuOpen]);

  return (
    <nav className="backdrop-blur-sm bg-white/70 dark:bg-gray-900/60 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">


      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
  {/* Logo on the left */}
  <Link to="/" className="flex items-center gap-2">
  <img src={Logo} alt="Logo" className="w-8 h-8 object-contain" /></Link>
  {/* <Link to="/" className="flex items-center gap-2"><h1 className="text-xl font-bold text-yellow-500 dark:text-white">Abilitydigitalz</h1></Link> */}

  {/* Desktop Nav Items + Toggle aligned right */}
  <div className="hidden md:flex items-center space-x-6">
    <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
  <li>
    <Link
      to="/"
      className={`hover:text-blue-600 dark:hover:text-white ${
        location.pathname === '/' ? 'text-blue-600 dark:text-white font-bold' : ''
      }`}
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      to="/projects"
      className={`hover:text-blue-600 dark:hover:text-white ${
        location.pathname === '/projects' ? 'text-blue-600 dark:text-white font-semibold' : ''
      }`}
    >
      Projects
    </Link>
  </li>
  <li>
    <Link
      to="/contact"
      className={`hover:text-blue-600 dark:hover:text-white ${
        location.pathname === '/contact' ? 'text-blue-600 dark:text-white font-semibold' : ''
      }`}
    >
      Contact
    </Link>
  </li>
  <li>
    <Link
      to="/resume"
      className={`hover:text-blue-600 dark:hover:text-white ${
        location.pathname === '/resume' ? 'text-blue-600 dark:text-white font-semibold' : ''
      }`}
    >
      Profile
    </Link>
  </li>
</ul>
    <DarkModeToggle />
  </div>

  {/* Mobile: Dark mode toggle + hamburger */}
  <div className="md:hidden flex items-center space-x-3">
    <DarkModeToggle />
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-gray-700 dark:text-white"
    >
      {menuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
</div>

        
      

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
    ref={menuRef}
    className="absolute right-4 top-16 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg border dark:border-gray-700 p-4 z-50 animate-fade-in"
  >
    <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
      <li><Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600 dark:hover:text-white">🏠 Home</Link></li>
      <li><Link to="/projects" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600 dark:hover:text-white">🗂️ Projects</Link></li>
      <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600 dark:hover:text-white">✉️ Contact</Link></li>
      <li><Link to="/resume" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600 dark:hover:text-white">📄 Resume</Link></li>
    </ul>
  </div>
      )}
      </nav>
  );
};

export default Navbar;
