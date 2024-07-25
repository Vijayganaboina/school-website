import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 mt-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <nav className="mb-4 w-full">
          <ul className="flex flex-col md:flex-row md:justify-center gap-4">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition-colors duration-300 ease-in-out">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-yellow-300 transition-colors duration-300 ease-in-out">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:text-yellow-300 transition-colors duration-300 ease-in-out">
                Academics
              </Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:text-yellow-300 transition-colors duration-300 ease-in-out">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/faculty" className="hover:text-yellow-300 transition-colors duration-300 ease-in-out">
                Faculty
              </Link>
            </li>
            <li>
              <Link to="/students" className="hover:text-yellow-300 transition-colors duration-300 ease-in-out">
                Students
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-yellow-300 transition-colors duration-300 ease-in-out">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-yellow-300 transition-colors duration-300 ease-in-out">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
