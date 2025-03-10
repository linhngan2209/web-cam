'use client'

const gateData = [
  { label: 'Refresh Time', value: '12:34:25', icon: '⏱️' },
  { label: 'Status', value: 'Normal', icon: '✅' },
  { label: 'Condition', value: 'Stop', icon: '⚙️' },
  { label: 'Open/Close State', value: '12.5 %', icon: '🚪' },
  { label: 'Temperature', value: '35°C', icon: '🌡️' },
  { label: 'Voltage', value: '220V', icon: '🔋' },
  { label: 'Error status', value: 'No Error', icon: '❌' },
]

const GateInfoItem = ({ icon, label, value }: any) => (
  <div className="grid grid-cols-2">
    <div className="flex items-center gap-3">
      <span className="text-xl">{icon}</span>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
    <div className="text-right">
      <span className="text-sm font-semibold text-gray-700">{value}</span>
    </div>
  </div>
)

const GateInfo = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-base font-semibold text-gray-700 mb-6 ml-4">Gate Information</h3>
      
      {/* Trên mobile: hiển thị theo kiểu dọc, các mục cách đều
         Trên desktop: hiển thị 2 cột với các mục căn chỉnh song song */}
      <div className="px-4 md:px-8">
        {/* Hiển thị riêng Refresh Time trên mobile */}
        <div className="md:hidden mb-6">
          <GateInfoItem {...gateData[0]} />
        </div>
        
        {/* Grid layout cho desktop */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-12">
          {/* Cột 1 - bao gồm Refresh Time */}
          <div className="space-y-6 mr-6">
            <GateInfoItem {...gateData[0]} />
            <GateInfoItem {...gateData[1]} />
            <GateInfoItem {...gateData[2]} />
            <GateInfoItem {...gateData[3]} />
          </div>
          
          {/* Cột 2 - có padding top để căn chỉnh */}
          <div className="space-y-6 pt-12 ml-6">
            <GateInfoItem {...gateData[4]} />
            <GateInfoItem {...gateData[5]} />
            <GateInfoItem {...gateData[6]} />
          </div>
        </div>
        
        {/* Layout cho mobile - hiển thị các mục còn lại theo dọc */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          <GateInfoItem {...gateData[1]} />
          <GateInfoItem {...gateData[2]} />
          <GateInfoItem {...gateData[3]} />
          <GateInfoItem {...gateData[4]} />
          <GateInfoItem {...gateData[5]} />
          <GateInfoItem {...gateData[6]} />
        </div>
      </div>
    </div>
  )
}

export default GateInfo