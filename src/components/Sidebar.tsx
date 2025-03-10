"use client";

import { useState, useEffect } from "react";
import { AiOutlineDesktop } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { useHardwareQuery } from '@/hooks/useHardwareQuery'; // Import useHardwareQuery

const MENUS = {
  HARDWARE: "hardware",
};

const Sidebar = () => {
  const [isHardwareOpen, setIsHardwareOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>(MENUS.HARDWARE);
  const [activeStation, setActiveStation] = useState<number | null>(null);

  const { data: hardwares = [], isLoading } = useHardwareQuery();

  useEffect(() => {
    if (hardwares.length > 0) {
      setActiveStation(Number(hardwares[0].id)); 
    }
  }, [hardwares]);

  const toggleHardware = () => setIsHardwareOpen((prev) => !prev);

  return (
    <div className="w-72 h-full bg-white text-[#5D6679] flex flex-col shadow-lg">
      <div className="flex items-center justify-center p-6">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 w-auto object-contain"
        />
      </div>

      <ul className="flex-1 mt-8 space-y-3 px-6">
        <div
          className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
            activeMenu === MENUS.HARDWARE
              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
              : "hover:bg-gray-100 text-[#5D6679]"
          }`}
          onClick={() => {
            toggleHardware();
            setActiveMenu(MENUS.HARDWARE);
          }}
        >
          <div className="flex items-center gap-3 h-6">
            <AiOutlineDesktop size={20} />
            <span className="text-sm font-medium">Hardware</span>
          </div>
          {isHardwareOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
        </div>

        {isHardwareOpen && hardwares.length > 0 && (
          <ul className="ml-6 mt-1 space-y-1">
            {hardwares.map((hardware) => (
              <Link
                href={`/authenticated/hardware/${hardware.id}`}
                key={hardware.id}
                className={`flex items-center gap-2 p-3 rounded-md cursor-pointer transition-all ${
                  activeStation === Number(hardware.id)
                    ? "bg-blue-200 text-blue-600 font-medium" 
                    : "hover:bg-gray-200 text-[#5D6679]"
                }`}
                onClick={() => setActiveStation(Number(hardware.id))}
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    activeStation === Number(hardware.id) ? "bg-blue-600" : "bg-gray-500"
                  }`}
                ></div>
                <span className="text-xs font-medium">{hardware.hardware_name}</span>
              </Link>
            ))}
          </ul>
        )}
      </ul>

      <div className="p-3 text-xs text-center text-[#5D6679] border-t border-gray-200">
        © 2025 FILS
      </div>
    </div>
  );
};

export default Sidebar;