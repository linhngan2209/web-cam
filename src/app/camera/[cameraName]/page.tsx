"use client";

import LoadingComponent from '@/components/Loading';
import { cameraFeeds } from '@/data/videos';
import { CameraFeed } from '@/model/videosModel';
import { useParams } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import ReactPlayer from 'react-player';

const CameraPage = () => {
  const [camera, setCamera] = useState<CameraFeed | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false); // Trạng thái điều khiển việc phát video
  const { cameraName } = useParams();

  // Hàm này để đảm bảo rằng trạng thái video luôn cập nhật đúng
  const handleVideoLoad = useCallback(() => {
    setIsPlaying(true); // Khi video được load, bật chế độ chơi video
  }, []);

  useEffect(() => {
    if (cameraName && typeof cameraName === 'string') {
      const cameraId = parseInt(cameraName);
      const camFind = cameraFeeds.find(cam => cam.id === cameraId); // Dùng find thay vì filter
      setCamera(camFind || null); // Nếu không tìm thấy camera, set null
    }
    setLoading(false); // Đặt loading = false sau khi camera đã được xác nhận
  }, [cameraName]);

  useEffect(() => {
    if (camera) {
      setIsPlaying(false); // Khi camera thay đổi, dừng video cũ
    }
  }, [camera]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white min-h-[90vh] rounded-xl shadow-lg">
      {camera && camera.videoUrl ? (
        <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
          <ReactPlayer
            key={camera.id} // Tái tạo lại component khi camera thay đổi
            url={camera.videoUrl}
            playing={isPlaying} // Phát video khi trạng thái `isPlaying` là true
            controls={true}
            width="100%"
            height="100%"
            className="rounded-lg shadow-lg"
            onReady={handleVideoLoad} // Khi video sẵn sàng, gọi hàm này
          />
        </div>
      ) : (
        <p className="text-center mt-4">Không có video để hiển thị</p>
      )}

      {camera && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Thông tin chi tiết:</h2>
          <p>Tên: {camera.name}</p>
          <p>Thời lượng: {camera.timestamp}</p>
        </div>
      )}
    </div>
  );
};

export default CameraPage;
