import React from 'react';

function Navbar() {
  return (
    <header className="bg-white shadow p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-bold text-xl text-teal-700">DEV@Deakin</span>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-teal-600 transition">About</a>
          <a href="#articles" className="hover:text-teal-600 transition">Articles</a>
          <a href="#tutorials" className="hover:text-teal-600 transition">Tutorials</a>
          <a href="#contact" className="hover:text-teal-600 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;