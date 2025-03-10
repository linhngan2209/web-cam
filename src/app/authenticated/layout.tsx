'use client'
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import "@/style/globals.css";
import Loading from "@/components/Loading";
import clsx from "clsx";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import { checkToken } from "@/utils/check_token";
import { useHardwareQuery } from "@/hooks/useHardwareQuery";

const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function (this: any, ...args: any[]) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(false);
  const [loading, setLoading] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const touchStartX = useRef(0);
  const router = useRouter();
  const handleResize = useCallback(() => {
    setIsSmallScreen(window.innerWidth < 640);
  }, []);

  const { hardwares, isLoading: isHardwareLoading } = useHardwareQuery(true);

  useEffect(() => {
    checkToken(router, hardwares);
  }, [router, hardwares]);
  useEffect(() => {
    setHydrated(true);
    handleResize();
    const debouncedHandleResize = debounce(handleResize, 200);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
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
      document.addEventListener("touchmove", handleTouchMove);
    } else {
      document.removeEventListener("touchmove", handleTouchMove);
    }
    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isSidebarOpen, handleTouchMove]);

  const memoizedHeader = useMemo(() => (
    <Header toggleSidebar={toggleSidebar} isSmallScreen={isSmallScreen ?? false} />
  ), [toggleSidebar, isSmallScreen]);

  const memoizedSidebar = useMemo(() => (
    <Sidebar />
  ), []);

  if (!hydrated) return null;

  return (
    <div className="h-screen overflow-hidden">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex h-full relative">
          <div
            aria-hidden={!isSidebarOpen}
            className={clsx(
              "transform transition-all duration-300 ease-in-out z-50 fixed inset-0 sm:relative w-72 text-white",
              { hidden: isSmallScreen && !isSidebarOpen },
              { block: isSmallScreen ? isSidebarOpen : true }
            )}
            onTouchStart={handleTouchStart}
          >
            {isSmallScreen !== null && memoizedSidebar}
          </div>
          <div className="flex-1 overflow-auto sm:ml-0 lg:ml-1 relative">
            {memoizedHeader}
            <div className="p-4 sm:p-3 lg:p-8 mt-[60px]">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>

  );
}