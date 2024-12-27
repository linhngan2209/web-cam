import React from "react";

const LoadingComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-30">
      <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingComponent;
