'use client'

import { useQuery } from '@tanstack/react-query'
import CameraFeed from '@/components/CameraFeed'
import HardwareControl from '@/components/control_hardware'
import GateInfo from '@/components/gate_condition'
import OperationRecord from '@/components/operator'
import ScheduleComponent from '@/components/ScheduleComponent'
import { useParams } from 'next/navigation'
import axiosInstance from '@/services/apiClient'
import Loading from '@/components/Loading'

interface Camera {
  id: number
  camera_name: string
  camera_url: string
  isActive: boolean
}

const fetchCameraFeeds = async (id: string) => {
  const response = await axiosInstance.get(`/api/user/get-hardware/with-camera-by/${id}`)
  return response.data.data.cameras
}

export default function SecurityCameraGrid() {
  const params = useParams()
  const id = params.id as string

  const {
    data: cameraFeeds = [],
    isLoading,
    error,
  } = useQuery<Camera[]>({
    queryKey: ['cameraFeeds', id],
    queryFn: () => fetchCameraFeeds(id), 
  })

  if (isLoading) return <Loading />
  if (error) return <div>Error: {error.message}</div>

  const activeCamerasCount = cameraFeeds ? cameraFeeds.length : 0

  return (
    <div className="min-h-screep-6">
      <div className="mb-8">
        <CameraFeed
          cameras={cameraFeeds}
          activeCamerasCount={activeCamerasCount}
        />
      </div>

      <div className="mb-8">
        <HardwareControl
          onUp={() => console.log('Camera up')}
          onStop={() => console.log('Camera stop')}
          onDown={() => console.log('Camera down')}
        />
      </div>

      <div className="mt-4 space-y-8">
        <GateInfo />
        <OperationRecord />
        <ScheduleComponent />
      </div>
    </div>
  )
}