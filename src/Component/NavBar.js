import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState,useEffect} from 'react';
import Cookies from 'js-cookie';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkModeClick() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    const theme = Cookies.get('theme');
    if (theme === 'dark') {
      setDarkMode(true);
    }
  }, []);
  

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      Cookies.set('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      Cookies.set('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="h-16 overflow-y-auto">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" alt="Logo" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    exact
                    to="/"
                    activeClassName="text-white bg-gray-700"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    activeClassName="text-white bg-gray-700"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/services"
                    activeClassName="text-white bg-gray-700"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/contact"
                    activeClassName="text-white bg-gray-700"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <NavLink
                to="/signin"
                activeClassName="text-white bg-gray-700"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Signin
              </NavLink>

              <NavLink
                to="/login"
                activeClassName="text-white bg-gray-700"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
               Login
              </NavLink>
              <NavLink
                to="/signup"
                activeClassName="text-white bg-gray-700"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Signup
              </NavLink>
              
              <button
                onClick={handleDarkModeClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
            </div>
            </div> 
            </nav>
            </div>
  );
};

export default Navbar;
