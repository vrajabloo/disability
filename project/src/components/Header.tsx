import React from 'react';
import { Menu, X, Heart, LogIn, UserPlus } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8" aria-hidden="true" />
              <span className="font-bold text-xl">SupportHub</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="/campaigns" className="hover:bg-indigo-500 px-3 py-2 rounded-md">
                Campaigns
              </a>
              <a href="/stories" className="hover:bg-indigo-500 px-3 py-2 rounded-md">
                Stories
              </a>
              <a href="/blog" className="hover:bg-indigo-500 px-3 py-2 rounded-md">
                Blog
              </a>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-md flex items-center space-x-2">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </button>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-md flex items-center space-x-2">
                <UserPlus className="h-4 w-4" />
                <span>Register</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-500"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
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
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/campaigns" className="block hover:bg-indigo-500 px-3 py-2 rounded-md">
                Campaigns
              </a>
              <a href="/stories" className="block hover:bg-indigo-500 px-3 py-2 rounded-md">
                Stories
              </a>
              <a href="/blog" className="block hover:bg-indigo-500 px-3 py-2 rounded-md">
                Blog
              </a>
              <button className="w-full text-left hover:bg-indigo-500 px-3 py-2 rounded-md flex items-center space-x-2">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </button>
              <button className="w-full text-left hover:bg-indigo-500 px-3 py-2 rounded-md flex items-center space-x-2">
                <UserPlus className="h-4 w-4" />
                <span>Register</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}