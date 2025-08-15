// src/components/Navbar.tsx

'use client';

import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-[#181a1d] flex items-center justify-between p-4 z-50">
      {/* Sol taraf: Logo ve BETA yazısı */}
      <div className="flex items-center">
        {/* OpenAnime LOGO */}
        <span className="text-white text-lg font-bold">OpenAnime</span>
        {/* BETA etiketi */}
        <span className="ml-2 text-xs font-semibold text-[#1596f7] border border-[#1596f7] rounded px-1 py-0.5">
          BETA
        </span>
      </div>

      {/* Orta kısım: Arama kutusu */}
      <div className="flex-grow flex justify-center mx-4">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Ara"
            className="w-full h-10 rounded-md bg-[#25282c] text-white pl-4 pr-10 focus:outline-none"
          />
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Sağ taraf: Kullanıcı ikonu */}
      <div>
        <svg
          className="h-8 w-8 text-gray-400 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
