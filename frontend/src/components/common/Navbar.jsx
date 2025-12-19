import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 md:px-12 flex items-center justify-between shadow-sm sticky top-0 z-50">
      {/* 1. Logo Section - Left  */}
      <div className="flex items-center gap-2">
        <div className="text-[#1D3557] flex items-center">
          {/* Simple house icon to match "Real Trust" branding */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xl font-bold tracking-tight ml-1">Real Trust</span>
        </div>
      </div>

      {/* 2. Navigation Links - Center [cite: 73] */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#home" className="text-xs font-bold uppercase tracking-widest text-[#1D3557] hover:text-orange-500 transition-colors">Home</a>
        <a href="#services" className="text-xs font-bold uppercase tracking-widest text-[#1D3557] hover:text-orange-500 transition-colors">Services</a>
        <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-[#1D3557] hover:text-orange-500 transition-colors">About Projects</a>
        <a href="#testimonials" className="text-xs font-bold uppercase tracking-widest text-[#1D3557] hover:text-orange-500 transition-colors">Testimonials</a>
      </div>

      {/* 3. CTA Button - Right [cite: 54, 61] */}
      <div>
        <button className="bg-[#F36F21] hover:bg-orange-600 text-white px-8 py-2.5 rounded shadow-md font-bold uppercase text-xs tracking-widest transition-all active:scale-95">
          Contact
        </button>
      </div>

      {/* Mobile Menu Icon (Hidden on Desktop) */}
      <div className="md:hidden text-[#1D3557]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;