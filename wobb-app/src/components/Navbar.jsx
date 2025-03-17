import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#0a0f24] to-[#1e293b] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6 md:px-12">
        <div className="text-3xl font-extrabold tracking-wider">Wobb</div>
        <ul className="hidden md:flex ml-auto gap-10 text-base font-semibold">
          <li className="hover:text-[#3b82f6] cursor-pointer transition-colors">Home</li>
          <li className="hover:text-[#3b82f6] cursor-pointer transition-colors">Campaigns</li>
          <li className="hover:text-[#3b82f6] cursor-pointer transition-colors">Rewards</li>
          <li className="hover:text-[#3b82f6] cursor-pointer transition-colors">Profile</li>
        </ul>
        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-6 bg-[#0a0f24] px-6 py-6 md:hidden text-lg font-medium border-t border-[#1e293b]">
          <li className="hover:text-[#3b82f6] cursor-pointer">Home</li>
          <li className="hover:text-[#3b82f6] cursor-pointer">Campaigns</li>
          <li className="hover:text-[#3b82f6] cursor-pointer">Rewards</li>
          <li className="hover:text-[#3b82f6] cursor-pointer">Profile</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
