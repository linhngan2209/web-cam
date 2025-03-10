'use client'

import { Circle } from 'lucide-react'

interface Camera {
  id: number
  camera_name: string
  camera_url: string
  isActive: boolean
}

interface CameraFeedProps {
  cameras: Camera[]
  activeCamerasCount: number
}

export default function CameraFeed({ cameras, activeCamerasCount }: CameraFeedProps) {
  console.log(cameras)
  if (!Array.isArray(cameras)) {
    return <div>Invalid cameras data</div>
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <div className="flex items-center gap-2 mt-2 px-4">
        <Circle className="w-2 h-2 fill-green-500 text-green-500 animate-pulse" />
        <span className="text-sm text-gray-700">{activeCamerasCount} Camera active</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
        {cameras.map((camera) => (
          <div
            key={camera.id}
            className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden"
          >
            <video
              className="w-full h-full object-cover"
              controls
              controlsList="nodownload nofullscreen"
            >
              <source src={camera.camera_url} type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ thẻ video.
            </video>
            {camera.isActive && (
              <div className="absolute top-4 left-4 right-4 flex justify-end text-white">
                <div className="flex items-center gap-2 bg-black/30 px-2 py-1 rounded-full">
                  <Circle className="w-2 h-2 fill-red-500 text-red-500 animate-pulse" />
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}