import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MenuIcon from "@/share/icon/menu";
import { useAuth } from "@/contexts/AuthenticationContext";

const Header = ({ toggleSidebar, isSmallScreen }: { toggleSidebar: () => void; isSmallScreen: boolean }) => {
  const [language, setLanguage] = useState<"en" | "jp">("en");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAvatarActive, setAvatarActive] = useState(false);
  const { logout, getUser } = useAuth();

  const user = getUser();
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "jp" : "en"));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setAvatarActive(true);
    setTimeout(() => setAvatarActive(false), 300);
  };

  return (
    <div className="absolute top-0 left-0 right-0 h-[70px] bg-white shadow-md flex justify-between items-center px-4 md:px-6 z-10">
      {isSmallScreen ? (
        <div className="flex justify-between items-center w-full">
          <button
            aria-label="Toggle Sidebar"
            className="text-gray-500 bg-gray-700 rounded-lg hover:bg-gray-400 p-2"
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </button>
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="relative">
            <div
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${isAvatarActive ? 'scale-110' : ''
                }`}
              onClick={toggleMenu}
            >
              <img
                src="/avt.png"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                <div className="p-4 text-gray-700 font-semibold">
                  {user ? user.username : ""}
                </div>
                <div
                  className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer"
                  onClick={() => logout()}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full">
          <div className="relative w-3/4 md:w-[330px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-[35px] pl-10 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 cursor-pointer hover:text-blue-500 transition-colors duration-300" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-sm text-gray-900 mr-2">{language === "en" ? "EN" : "JP"}</span>
              <div
                className={`relative w-12 h-6 bg-gray-500 rounded-full cursor-pointer transition-colors ${language === "jp" ? "bg-blue-400" : "bg-gray-500"
                  }`}
                onClick={toggleLanguage}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${language === "jp" ? "translate-x-6" : "translate-x-0"
                    }`}
                />
              </div>
            </div>
            <div className="relative">
              <div
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${isAvatarActive ? 'scale-110' : ''
                  }`}
                onClick={toggleMenu}
              >
                <img
                  src="/avt.png"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                  <div className="p-4 text-gray-700 font-semibold">
                    {user ? user.username : ""}
                  </div>
                  <div
                    className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer"
                    onClick={() => logout()}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;