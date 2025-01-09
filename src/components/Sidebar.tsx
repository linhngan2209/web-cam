"use client";

import { useState } from "react";
import { AiFillHome, AiOutlineVideoCamera, AiOutlineSetting, AiOutlineFolder } from "react-icons/ai"; 
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineCamera } from "react-icons/md";
import Link from "next/link";

const MENUS = {
  HOME: "home",
  CAMERA: "camera",
  ARCHIVE: "archive",
  SETTINGS: "settings",
};

const Sidebar = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>(MENUS.HOME);
  const [activeCamera, setActiveCamera] = useState<string | null>(null);

  const toggleCamera = () => setIsCameraOpen((prev) => !prev);

  const handleActiveHome = () => {
    setActiveMenu(MENUS.HOME);
    setActiveCamera(null);
  };

  const handleActiveSettings = () => {
    setActiveMenu(MENUS.SETTINGS);
    setActiveCamera(null);
  };

  const handleActiveArchive = () => {
    setActiveMenu(MENUS.ARCHIVE);
    setActiveCamera(null);
  };

  const handleActiveCamera = (camera: string) => {
    setActiveMenu(MENUS.CAMERA);
    setActiveCamera(camera);
  };

  return (
    <div className="w-64 h-full bg-[#1C1F2B] text-white flex flex-col shadow-lg rounded-3xl">
      <div className="p-6 flex items-center gap-3 shadow-md">
        <div className="p-2 bg-white rounded-full">
          <MdOutlineCamera size={28} className="text-indigo-600" />
        </div>
        <h1 className="text-2xl font-bold tracking-wide text-white">CamUI</h1>
      </div>

      <ul className="flex-1 mt-6 space-y-2 px-4">
        <Link
          href="/"
          className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all ${activeMenu === MENUS.HOME
              ? "bg-gradient-to-r from-blue-500 to-blue-700 shadow-md"
              : "hover:bg-gray-700/50"
            }`}
          onClick={handleActiveHome}
        >
          <AiFillHome size={24} />
          <span className="text-lg font-medium">Trang chủ</span>
        </Link>

        <div
          className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all ${activeMenu === MENUS.CAMERA
              ? "bg-gradient-to-r from-blue-500 to-blue-700 shadow-md"
              : "hover:bg-gray-700/50"
            }`}
          onClick={() => {
            toggleCamera();
            setActiveMenu(MENUS.CAMERA);
          }}
        >
          <div className="flex items-center gap-4">
            <AiOutlineVideoCamera size={24} />
            <span className="text-lg font-medium">Camera</span>
          </div>
          {isCameraOpen ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
        </div>

        {isCameraOpen && (
          <ul className="ml-6 mt-2 space-y-2">
            <Link
              href="/camera/cam1"
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${activeCamera === "cam1" ? "text-blue-500" : "hover:bg-gray-700/50"}`}
              onClick={() => handleActiveCamera("cam1")}
            >
              <div className={`h-2 w-2 rounded-full ${activeCamera === "cam1" ? "bg-blue-500" : "bg-green-500"}`}></div>
              <span className="text-sm">Camera 1</span>
            </Link>

            <Link
              href="/camera/cam2"
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${activeCamera === "cam2" ? "text-blue-500" : "hover:bg-gray-700/50"}`}
              onClick={() => handleActiveCamera("cam2")}
            >
              <div className={`h-2 w-2 rounded-full ${activeCamera === "cam2" ? "bg-blue-500" : "bg-green-500"}`}></div>
              <span className="text-sm">Camera 2</span>
            </Link>

            <Link
              href="/camera/cam3"
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${activeCamera === "cam3" ? "text-blue-500" : "hover:bg-gray-700/50"}`}
              onClick={() => handleActiveCamera("cam3")}
            >
              <div className={`h-2 w-2 rounded-full ${activeCamera === "cam3" ? "bg-blue-500" : "bg-green-500"}`}></div>
              <span className="text-sm">Camera 3</span>
            </Link>

            <Link
              href="/camera/cam4"
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${activeCamera === "cam4" ? "text-blue-500" : "hover:bg-gray-700/50"}`}
              onClick={() => handleActiveCamera("cam4")}
            >
              <div className={`h-2 w-2 rounded-full ${activeCamera === "cam4" ? "bg-blue-500" : "bg-green-500"}`}></div>
              <span className="text-sm">Camera 4</span>
            </Link>
          </ul>
        )}

        <Link
          href="/"
          className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all ${activeMenu === MENUS.ARCHIVE
              ? "bg-gradient-to-r from-blue-500 to-blue-700 shadow-md"
              : "hover:bg-gray-700/50"
            }`}
          onClick={handleActiveArchive}
        >
          <AiOutlineFolder size={24} />
          <span className="text-lg font-medium">Lưu trữ</span>
        </Link>

        <Link
          href="/settings"
          className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all ${activeMenu === MENUS.SETTINGS
              ? "bg-gradient-to-r from-blue-500 to-blue-700 shadow-md"
              : "hover:bg-gray-700/50"
            }`}
          onClick={handleActiveSettings}
        >
          <AiOutlineSetting size={24} />
          <span className="text-lg font-medium">Cài đặt</span>
        </Link>
      </ul>

      <div className="p-4 text-sm text-center text-gray-400 border-t border-gray-700">
        © 2025 CamUI
      </div>
    </div>
  );
};

export default Sidebar;
