'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import './globals.css';
import MenuIcon from '@/share/icon/menu';
import Loading from '@/components/Loading';
import clsx from 'clsx';

const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const touchStartX = useRef(0);

  const handleResize = useCallback(() => {
    setIsSmallScreen(window.innerWidth < 640);
  }, []);

  useEffect(() => {
    setHydrated(true); 
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const touchEndX = e.touches[0].clientX;
    if (touchStartX.current - touchEndX > 100) {
      setIsSidebarOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('touchmove', handleTouchMove);
    } else {
      document.removeEventListener('touchmove', handleTouchMove);
    }
    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isSidebarOpen, handleTouchMove]);

  if (!hydrated) return null;

  return (
    <html lang="en">
      <head>
        <title>Camera Manager</title>
        <meta name="description" content="Manage and monitor your cameras efficiently" />
      </head>
      <body className="h-screen overflow-hidden bg-[#343940]">
        {loading ? (
          <Loading />
        ) : (
          <div className="flex h-full relative">
            <div
              aria-hidden={!isSidebarOpen}
              className={clsx(
                'transform transition-all duration-300 ease-in-out z-50 fixed inset-0 sm:relative w-64 text-white',
                { hidden: isSmallScreen && !isSidebarOpen },
                { block: isSmallScreen ? isSidebarOpen : true }
              )}
              onTouchStart={handleTouchStart}
            >
              {isSmallScreen !== null && <Sidebar />}
            </div>
            <div className="flex-1 overflow-auto p-3 sm:p-3 lg:p-6 ml-1 main-content transition-all duration-300 z-40">
              {isSmallScreen && !isSidebarOpen && (
                <div className="flex items-center w-full mb-2">
                  <button
                    aria-label="Toggle Sidebar"
                    className="sm:hidden text-white bg-gray-700 rounded-lg hover:bg-gray-600 w-12 h-12 flex items-center justify-center"
                    onClick={toggleSidebar}
                  >
                    <MenuIcon />
                  </button>
                  <span className="text-xl text-white font-bold absolute left-1/2 transform -translate-x-1/2">CamUI</span>
                </div>
              )}
              {children}
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
