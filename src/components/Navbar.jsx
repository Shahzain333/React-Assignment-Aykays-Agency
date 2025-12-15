// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Logo from '/images/logo.webp'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/', hash: '' },
    { name: 'Features', path: '/', hash: 'features' },
    { name: 'Testimonials', path: '/', hash: 'testimonials' },
    { name: 'About', path: '/about', hash: '' },
  ];

  const handleNavigation = (path, hash) => {
    if (hash) {
      // If we're already on the home page, just scroll to the section
      if (location.pathname === '/') {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  const isActive = (path, hash) => {
    if (path === '/') {
      if (hash) {
        // Check if current hash matches
        return location.hash === `#${hash}`;
      }
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-primary dark:bg-gray-900 shadow-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white">
            <img width={40} src={Logo} alt='Logo'/>
            <h1 className='text-2xl font-semibold'>Mybindle</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hash ? (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path, item.hash)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.path, item.hash)
                      ? 'text-white font-bold border-b-2 border-white'
                      : 'text-white/90 hover:text-white'
                  }`}
                  aria-label={`Go to ${item.name} section`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.path, '')
                      ? 'text-white font-bold border-b-2 border-white'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-white/10"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/20"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                item.hash ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path, item.hash)}
                    className={`px-3 py-2 rounded-md text-base font-medium text-left ${
                      isActive(item.path, item.hash)
                        ? 'bg-white/20 text-white font-bold'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                    aria-label={`Go to ${item.name} section`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 rounded-md text-base font-medium ${
                      isActive(item.path, '')
                        ? 'bg-white/20 text-white font-bold'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}