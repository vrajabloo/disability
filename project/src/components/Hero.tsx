import React from 'react';
import { Users, Heart, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Empowering Support for</span>
                <span className="block text-indigo-600">People with Disabilities</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Join our community dedicated to making a difference. Connect with supporters,
                share your story, and find the assistance you need in a safe and caring environment.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="/register"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/learn-more"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="text-center">
                  <div className="flex justify-center">
                    <Users className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Community Support</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Connect with a caring community ready to provide support and assistance.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <Heart className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Personalized Help</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Get assistance tailored to your specific needs and circumstances.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <Shield className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Secure & Transparent</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Feel safe with our secure platform and transparent support system.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="People working together"
        />
      </div>
    </div>
  );
}