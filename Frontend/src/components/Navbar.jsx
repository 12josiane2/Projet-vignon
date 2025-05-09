import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../assets/logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCourses = () => setIsCoursesOpen(!isCoursesOpen);
  const toggleAccount = () => setIsAccountOpen(!isAccountOpen);

  return (
    <header className="bg-primary-600 h-20 shadow-md sticky top-0 z-50 text-white">
      <div className="container-custom h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1.5">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 font-bold text-1.5xl relative">
            <Link to="/" className="hover:text-secondary-600 transition">
              Accueil
            </Link>
            <Link to="/about" className="hover:text-secondary-600 transition">
              A propos
            </Link>

            {/* Dropdown Cours */}
            <div className="group relative hidden md:flex space-x-4">
              <span className="cursor-pointer text-white hover:text-secondary-600 transition flex items-center">
                Cours <ChevronDown className="ml-1 w-4 h-4" />
              </span>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-gray-700 shadow-lg rounded w-48 z-10">
                <Link to="/formations" className="block px-4 py-2 text-white hover:text-secondary-600">Formations</Link>
                <Link to="/ressources" className="block px-4 py-2 text-white hover:text-secondary-600">Ressources</Link>
              </div>
            </div>

            <Link to="/blog" className="text-white hover:text-secondary-600 transition">
              Blog
            </Link>
          </nav>

          {/* Desktop Account Dropdown */}
          <div className="hidden md:flex space-x-4 relative group">
            <span className="btn btn-primary cursor-pointer flex items-center">
              Mon Compte <ChevronDown className="ml-1 w-4 h-4" />
            </span>
            <div className="absolute right-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded w-40 z-10">
              <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Connexion</Link>
              <Link to="/registrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Inscription</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 p-2"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary-600 transition px-4 py-2"
                onClick={toggleMenu}
              >
                Accueil
              </Link>

              {/* Mobile Dropdown Cours */}
              <div className="px-4">
                <button 
                  onClick={toggleCourses}
                  className="w-full text-left flex justify-between items-center text-gray-700 hover:text-primary-600 py-2"
                >
                  Cours <ChevronDown className={`transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCoursesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/formations" className="block text-gray-600 hover:text-secondary-600" onClick={toggleMenu}>Formations</Link>
                    <Link to="/ressources" className="block text-gray-600 hover:text-secondary-600" onClick={toggleMenu}>Ressources</Link>
                  </div>
                )}
              </div>

              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-secondary-600 transition px-4 py-2"
                onClick={toggleMenu}
              >
                Blog
              </Link>

              {/* Mobile Dropdown Mon Compte */}
              <div className="px-4">
                <button 
                  onClick={toggleAccount}
                  className="w-full text-left flex justify-between items-center text-secondary-600 hover:text-primary-600 py-2"
                >
                  Mon Compte <ChevronDown className={`transition-transform ${isAccountOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAccountOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/login" className="block text-gray-600 hover:text-primary-600" onClick={toggleMenu}>Connexion</Link>
                    <Link to="/registrer" className="block text-gray-600 hover:text-primary-600" onClick={toggleMenu}>Inscription</Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
