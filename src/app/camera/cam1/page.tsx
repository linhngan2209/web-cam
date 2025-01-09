'use client';

import CameraStream from '@/components/camera_frame';
import FPSDisplay from '@/components/Fps_display'; 

const CameraPage = () => {
  return (
    <div className="container mx-auto p-4 bg-[#1A202C] text-white min-h-[90vh] rounded-xl shadow-lg">
      <CameraStream 
        sseUrl="http://160.22.122.122:8001/sse" 
        className="mx-auto sm:w-4/5" 
      />
      <FPSDisplay /> 
    </div>
  );
};

export default CameraPage;
