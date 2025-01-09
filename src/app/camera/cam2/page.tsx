'use client';

import HLSStream from '@/components/Hls';

const CameraPage = () => {
    return (
        <div className="container mx-auto p-4 bg-[#1A202C] text-white min-h-[90vh] rounded-xl shadow-lg flex justify-center items-center">
            <div className="w-full max-w-[640px] max-h-[360px] rounded-xl">
                <HLSStream videoUrl="http://160.22.122.122:8080/hls/stream.m3u8" />
            </div>
        </div>
    );
};

export default CameraPage;
