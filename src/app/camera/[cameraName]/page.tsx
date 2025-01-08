'use client';
import { useEffect, useRef, useState } from 'react';

const CameraPage = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const eventSource = new EventSource('http://160.22.122.122:8001/sse');

    eventSource.onopen = () => {
      console.log('SSE connection established');
      setIsConnected(true);
    };

    eventSource.addEventListener('close', () => {
      console.log('SSE connection closed');
      setIsConnected(false);
    });

    eventSource.onerror = (err) => {
      console.error('SSE Error:', err);
      setError('Lỗi kết nối SSE.');
    };

    eventSource.onmessage = (event) => {
      const frameData = event.data;
      if (frameData === 'No frame available') {
        console.log('No frame available');
      } else {
        try {
          const bytes = new Uint8Array(frameData.match(/.{1,2}/g)?.map((byte: string) => parseInt(byte, 16)) || []);
          const blob = new Blob([bytes], { type: 'image/jpeg' });
          const url = URL.createObjectURL(blob);

          if (imgRef.current) {
            imgRef.current.src = url;
          }
        } catch (err) {
          console.error('Error processing frame data:', err);
        }
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="container mx-auto p-4 bg-[#1A202C] text-white min-h-[90vh] rounded-xl shadow-lg">
      <div className="relative w-full sm:w-4/5 h-[70vh] rounded-lg overflow-hidden mx-auto">
        {error ? (
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        ) : isConnected ? (
          <div className="flex justify-center items-center w-full h-[70vh]">
            <img
              ref={imgRef}
              alt="Video stream"
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        ) : (
          <div className="text-center text-yellow-500">Đang kết nối...</div>
        )}
      </div>
    </div>
  );
};

export default CameraPage;
