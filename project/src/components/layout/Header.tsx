import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, LogIn, UserPlus } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-indigo-600" aria-hidden="true" />
              <span className="font-bold text-xl text-gray-900">SupportHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/campaigns" className="text-gray-600 hover:text-indigo-600">
              Campaigns
            </Link>
            <Link to="/stories" className="text-gray-600 hover:text-indigo-600">
              Stories
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-indigo-600">
              Blog
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-600 hover:text-indigo-600 flex items-center space-x-1"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center space-x-1"
              >
                <UserPlus className="h-4 w-4" />
                <span>Register</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200" id="mobile-menu">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/campaigns"
                className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
              >
                Campaigns
              </Link>
              <Link
                to="/stories"
                className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
              >
                Stories
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
              >
                Blog
              </Link>
              <div className="mt-4 space-y-2 px-3">
                <Link
                  to="/login"
                  className="w-full text-left text-gray-600 hover:text-indigo-600 py-2 flex items-center space-x-1"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center space-x-1"
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Register</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}