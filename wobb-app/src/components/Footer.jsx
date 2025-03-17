import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0a0f24] to-[#1e293b] text-gray-400 py-6 px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm">© 2025 Wobb. All rights reserved.</p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="hover:text-white text-sm">Privacy Policy</a>
          <a href="#" className="hover:text-white text-sm">Terms of Service</a>
          <a href="#" className="hover:text-white text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
