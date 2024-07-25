import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Students from './pages/Students';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Footer from './footer';
import { FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="overflow-x-hidden">

        {/* Navbar */}
      <div className="flex justify-between items-center bg-blue-900 py-2 px-4 shadow-lg">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="mr-4 rounded-full"
          />
          <h2 className="text-2xl font-bold text-white">
            Springdale <span className="block text-base">Public School</span>
          </h2>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex ${menuOpen ? 'flex' : 'hidden'} gap-6 p-4 rounded-md bg-blue-900 md:bg-transparent`}>

          {/* Navigation Links */}
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `relative transition-colors duration-300 ease-in-out ${
                  isActive ? 'text-yellow-300 font-bold after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-yellow-300' : 'text-white hover:text-yellow-300'
                }`
              }
            >
              Home
            </NavLink>
          </li>

          {/* List of Navigation Items */}
          {['About Us', 'Academics', 'Admissions', 'Faculty', 'Students', 'Gallery', 'Contact Us'].map((item, index) => (
            <li key={index}>
              <NavLink
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className={({ isActive }) =>
                  `relative transition-colors duration-300 ease-in-out ${
                    isActive ? 'text-yellow-300 font-bold after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-yellow-300' : 'text-white hover:text-yellow-300'
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      

      {/* Routing Setup */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      {/* Footer Component */}
      <Footer />
      </div>
    </Router>
  );
}

export default App;
