// src/components/Sidebar.tsx

'use client';

import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-20 h-full bg-[#181a1d] flex flex-col items-center pt-4 z-40">
      {/* Üst Kısım: Logo ve Menü */}
      <div className="flex flex-col items-center">
        {/* OpenAnime LOGO */}
        <div className="mb-8">
          <span className="text-white text-xl font-bold">OA</span>
        </div>
        
        {/* Menü Öğeleri */}
        <nav className="flex flex-col items-center space-y-4 w-full">
          {/* Ana Sayfa */}
          <Link href="/" className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-700">
            <svg
              className="h-6 w-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span className="text-xs text-white mt-1">Ana Sayfa</span>
          </Link>

          {/* Keşfet */}
          <Link href="/explore" className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-700">
            <svg
              className="h-6 w-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z" />
            </svg>
            <span className="text-xs text-white mt-1">Keşfet</span>
          </Link>
          
          {/* Takvim */}
          <Link href="/calendar" className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-700">
            <svg
              className="h-6 w-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm-5-11H7v2h7v-2z" />
            </svg>
            <span className="text-xs text-white mt-1">Takvim</span>
          </Link>
        </nav>
      </div>

      {/* Alt Kısım: Hakkında ve Ayarlar */}
      <div className="mt-auto mb-8 flex flex-col items-center space-y-4">
        {/* Hakkında */}
        <Link href="/about" className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-700">
          <svg
            className="h-6 w-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          <span className="text-xs text-white mt-1">Hakkında</span>
        </Link>
        
        {/* Ayarlar */}
        <Link href="/settings" className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-700">
          <svg
            className="h-6 w-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1.01c-.52-.4-1.09-.72-1.71-.96l-.37-2.65c-.06-.24-.27-.42-.52-.42h-4c-.25 0-.46.18-.52.42l-.37 2.65c-.62.24-1.19.56-1.71.96l-2.49-1.01c-.22-.08-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.64-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.09.72 1.71.96l.37 2.65c.06.24.27.42.52.42h4c.25 0 .46-.18.52-.42l.37-2.65c.62-.24 1.19-.56 1.71-.96l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
          </svg>
          <span className="text-xs text-white mt-1">Ayarlar</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
