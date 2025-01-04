"use client";

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

const CameraPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (Hls.isSupported() && videoRef.current) {
      const hls = new Hls();

      hls.loadSource('http://160.22.122.122:8080/hls/stream.m3u8'); 
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error("HLS.js Error:", data);
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              setError('Lỗi mạng. Vui lòng kiểm tra kết nối!');
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              setError('Lỗi media. Đang cố gắng khắc phục...');
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              setError('Không thể phát video.');
              break;
          }
        }
      });

      return () => {
        hls.destroy();
      };
    } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = 'http://160.22.122.122:8080/hls/live.m3u8';
    } else {
      setError('Trình duyệt của bạn không hỗ trợ HLS.');
    }
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white min-h-[90vh] rounded-xl shadow-lg">
      <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
        {error ? (
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        ) : (
          <div className="video-container">
            <video
              ref={videoRef}
              controls
              autoPlay
              className="video-player w-full h-full rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraPage;
