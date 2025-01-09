'use client';

import { useEffect, useRef, useState } from 'react';

interface CameraStreamProps {
  sseUrl: string;
  className?: string; 
}

const CameraStream: React.FC<CameraStreamProps> = ({ sseUrl, className }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let eventSource: EventSource | null = null;
    let reconnectTimeout: NodeJS.Timeout | null = null;

    const connect = () => {
      eventSource = new EventSource(sseUrl);

      eventSource.onopen = () => {
        console.log('Kết nối SSE đã được thiết lập');
        setIsConnected(true);
        setError(null); 
      };

      eventSource.addEventListener('close', () => {
        console.log('Kết nối SSE đã bị đóng');
        setIsConnected(false);
        setError('Kết nối đã đóng.');
        reconnect(); 
      });

      eventSource.onerror = (err) => {
        console.error('Lỗi SSE:', err);
        setError('Lỗi kết nối SSE.');
        reconnect();
      };

      eventSource.onmessage = (event) => {
        const frameData = event.data;
        if (frameData === 'No frame available') {
          console.log('Không có khung hình nào');
        } else {
          try {
            const bytes = new Uint8Array(frameData.match(/.{1,2}/g)?.map((byte: string) => parseInt(byte, 16)) || []);
            const blob = new Blob([bytes], { type: 'image/jpeg' });
            const url = URL.createObjectURL(blob);

            if (imgRef.current) {
              imgRef.current.src = url;
            }
          } catch (err) {
            console.error('Lỗi khi xử lý dữ liệu khung hình:', err);
          }
        }
      };
    };

    const reconnect = () => {
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout);
      }
      reconnectTimeout = setTimeout(() => {
        connect();
      }, 3000); 
    };

    connect();

    return () => {
      if (eventSource) {
        eventSource.close();
      }
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout);
      }
    };
  }, [sseUrl]);

  return (
    <div className={`relative w-full h-[70vh] rounded-lg overflow-hidden ${className || ''}`}>
      {error ? (
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      ) : isConnected ? (
        <div className="flex justify-center items-center w-full h-full">
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
  );
};

export default CameraStream;
