import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-20 py-10 mt-auto">
      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Solutions */}
        <div>
          <h2 className="text-yellow-400 font-extrabold mb-4">Solutions</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link to="/wordpress">WordPress</Link></li>
            <li><Link to="/hosting">Manage Hosting</Link></li>
            <li><Link to="/agencies">Agencies</Link></li>
            <li><Link to="/wordpress-hosting">Manage WordPress Hosting</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-yellow-400 font-extrabold mb-4">Company</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/stories">Customer Stories</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-yellow-400 font-extrabold mb-4">Resources</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
  <a 
    href="https://www.abilitydigitalz.com.ng/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Blog
  </a>
</li>
            <li><Link to="/reviews">Customer Reviews</Link></li>
          </ul>
          
        </div>
        <div>
          <h2 className="text-yellow-400 font-extrabold mb-4">Let's Connect</h2>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaFacebookF size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/olumuyiwa-ogunyankin-2208b6201/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} AbilityDigitalz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
