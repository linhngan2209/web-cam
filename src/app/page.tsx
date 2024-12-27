'use client'

import { useState, useEffect } from 'react'
import LiveIcon from '@/share/icon/live'
import { Circle } from 'lucide-react'
import { cameraFeeds } from '@/data/videos'


export default function SecurityCameraGrid() {
  const [isVisible, setIsVisible] = useState<number | null>(null) 

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(null), 10000)
    return () => clearTimeout(timer) 
  }, [])

  const handleMouseEnter = (id: number) => {
    setIsVisible(id) 
  }

  const handleMouseLeave = () => {
    setIsVisible(null) 
  }

  return (
    <div className="min-h-screen rounded-lg bg-gray-900 p-4">
      <div className="flex items-center justify-between mb-4 text-white">
        <div className="flex items-center gap-2">
          <Circle className="w-2 h-2 fill-green-500 text-green-500" />
          <span className="text-sm">{cameraFeeds.filter(cam => cam.isActive).length} Camera Active</span>
        </div>
        <button className="hover:bg-gray-800 p-2 rounded-full">
          <LiveIcon />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {cameraFeeds.map((camera) => (
          <div
            key={camera.id}
            className="relative"
            onMouseEnter={() => handleMouseEnter(camera.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <video className="w-full h-full object-cover rounded-md border-2 border-[#444D56]" controls>
                <source src={camera.videoUrl} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ thẻ video.
              </video>
            </div>
           
              <div className="absolute top-4 left-4 right-4 flex justify-between text-white">
                <div className="text-lg font-medium">{camera.name}</div>
                <div className="flex items-center gap-2">
                  <Circle className="w-2 h-2 fill-red-500 text-red-500 animate-pulse" />
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}
