import React, { useState } from "react";

interface HardwareControlProps {
  onUp: () => void;
  onStop: () => void;
  onDown: () => void;
}

const HardwareControl: React.FC<HardwareControlProps> = ({
  onUp,
  onStop,
  onDown,
}) => {
  const [selectedOption, setSelectedOption] = useState("Menu");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const menuOptions = [
    { label: "Refresh", value: "refresh" },
    { label: "Restart", value: "restart" },
    { label: "Clear Error", value: "clearError" },
  ];

  const handleMenuSelect = (option: string) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
    switch (option) {
      case "refresh":
        alert("Refreshed");
        break;
      case "restart":
        alert("Restarted");
        break;
      case "clearError":
        alert("Error Cleared");
        break;
      default:
        break;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-base font-semibold text-gray-700 mb-6 ml-4">Control Hardware</h3>
      <div className="flex flex-col items-center w-full gap-4 px-10 space-y-3">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-2">
          <button
            onClick={onUp}
            className="w-56 bg-green-600 text-white py-3 rounded-lg font-medium text-base shadow-md hover:bg-green-700 transition duration-200 text-center"
          >
            Up
          </button>
          <button
            onClick={onStop}
            className="w-56 bg-red-500 text-white py-3 rounded-lg font-medium text-base shadow-md hover:bg-red-600 transition duration-200 text-center"
          >
            Stop
          </button>
          <button
            onClick={onDown}
            className="w-56 bg-yellow-500 text-white py-3 rounded-lg font-medium text-base shadow-md hover:bg-yellow-600 transition duration-200 text-center"
          >
            Down
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-2">
          <div className="relative w-56">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium text-base shadow-md hover:bg-blue-600 transition duration-200 flex items-center justify-between"
            >
              {selectedOption}
              <span className="ml-2">▼</span>
            </button>
            {isMenuOpen && (
              <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                {menuOptions.map((option) => (
                  <div
                    key={option.value}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleMenuSelect(option.label)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Input value..."
            className="w-56 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
          />
          <button className="w-56 bg-green-600 text-white py-3 px-4 rounded-lg font-medium text-base shadow-md hover:bg-green-700 transition duration-200">
            Open To
          </button>
        </div>
      </div>
    </div>
  );
};

export default HardwareControl;