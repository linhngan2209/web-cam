"use client";

import { useState } from "react";
import { AiFillHome, AiOutlineVideoCamera, AiOutlineSetting, AiOutlineFolder } from "react-icons/ai"; // Import icon for Lưu trữ
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineCamera } from "react-icons/md";
import Link from "next/link";
import { cameraFeeds } from "@/data/videos";

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

  const renderCameraList = () => {
    return cameraFeeds.map((camera, idx) => (
      <Link
        key={idx}
        href={`/camera/${camera.id}`}
        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${activeCamera === camera.name ? "text-blue-500" : "hover:bg-gray-700/50"
          }`}
        onClick={() => handleActiveCamera(camera.name)}
      >
        <div
          className={`h-2 w-2 rounded-full ${activeCamera === camera.name ? "bg-blue-500" : "bg-green-500"
            }`}
        ></div>
        <span className="text-sm">{camera.name}</span>
      </Link>
    ));
  };

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

        {isCameraOpen && <ul className="ml-6 mt-2 space-y-2">{renderCameraList()}</ul>}

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
        © 2024 CamUI
      </div>
    </div>
  );
};

export default Sidebar;
