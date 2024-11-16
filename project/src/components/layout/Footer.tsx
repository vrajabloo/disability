import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">SupportHub</span>
            </div>
            <p className="text-gray-400">
              Empowering support for people with disabilities through community connection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/campaigns" className="text-gray-400 hover:text-white">Campaigns</a>
              </li>
              <li>
                <a href="/stories" className="text-gray-400 hover:text-white">Success Stories</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white">Blog</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="text-gray-400 hover:text-white">Help Center</a>
              </li>
              <li>
                <a href="/resources" className="text-gray-400 hover:text-white">Resources</a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>support@supporthub.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>123 Support Street, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SupportHub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}