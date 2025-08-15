'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Compass, CalendarDays, Info, Settings } from 'lucide-react';

const Sidebar = () => {
  const sidebarItems = [
    {
      name: 'Ana Sayfa',
      icon: Home,
      href: '/',
    },
    {
      name: 'Keşfet',
      icon: Compass,
      href: '/explore',
    },
    {
      name: 'Takvim',
      icon: CalendarDays,
      href: '/calendar',
    },
  ];

  const bottomItems = [
    {
      name: 'Hakkında',
      icon: Info,
      href: '/about',
    },
    {
      name: 'Ayarlar',
      icon: Settings,
      href: '/settings',
    },
  ];

  return (
    <aside className="fixed top-0 left-0 w-20 h-full bg-[var(--sidebar-navbar-bg)] flex flex-col items-center pt-4 z-40 shadow-xl">
      {/* Üst Kısım: Logo ve Menü */}
      <div className="flex flex-col items-center">
        <div className="mb-8">
          <span className="text-[var(--accent-blue)] text-3xl font-bold">OA</span>
        </div>
        
        <nav className="flex flex-col items-center space-y-4 w-full">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <item.icon className="h-6 w-6 text-gray-400" />
              <span className="text-xs text-white mt-1">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Alt Kısım: Hakkında ve Ayarlar */}
      <div className="mt-auto mb-8 flex flex-col items-center space-y-4">
        {bottomItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <item.icon className="h-6 w-6 text-gray-400" />
            <span className="text-xs text-white mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
