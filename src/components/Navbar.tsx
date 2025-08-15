'use client';

import React from 'react';
import { Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-[var(--sidebar-navbar-bg)] flex items-center justify-between p-4 pl-24 z-50 shadow-md">
      {/* Sol taraf: Logo ve BETA yazısı */}
      <div className="flex items-center">
        <span className="text-white text-lg font-bold">OpenAnime</span>
        <span className="ml-2 text-xs font-semibold text-[var(--beta-blue)] border border-[var(--beta-blue)] rounded-full px-2 py-0.5">
          BETA
        </span>
      </div>

      {/* Orta kısım: Arama kutusu */}
      <div className="flex-grow flex justify-center mx-4">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Ara"
            className="w-full h-10 rounded-full bg-[#25282c] text-white pl-4 pr-10 focus:outline-none placeholder-gray-400"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Sağ taraf: Kullanıcı ikonu */}
      <div>
        <User className="h-8 w-8 text-gray-400 cursor-pointer hover:text-white transition-colors" />
      </div>
    </nav>
  );
};

export default Navbar;
