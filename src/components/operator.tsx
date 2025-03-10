'use client'

const OperationRecord: React.FC = () => {
  const records = [
    {
      time: '2025/03/15  14:32:45',
      operator: 'Linhngan',
      manipulation: 'Stop',
      status: 'Success',
    },
    {
      time: '2025/03/15  14:28:10',
      operator: 'Linhngan',
      manipulation: 'Open to 25.5%',
      status: 'Success',
    },
    {
      time: '2025/03/15  14:15:22',
      operator: 'Linhngan',
      manipulation: 'restart',
      status: 'Success',
    },
    {
      time: '2025/03/15  14:00:00',
      operator: 'Linhngan',
      manipulation: 'Cleared error',
      status: 'Success',
    },
    {
      time: '2025/03/15  14:15:22',
      operator: 'Linhngan',
      manipulation: 'restart',
      status: 'Failed',
    },
    {
      time: '2025/03/15  14:15:22',
      operator: 'Linhngan',
      manipulation: 'restart',
      status: 'Success',
    },
    {
      time: '2025/03/15  14:15:22',
      operator: 'Linhngan',
      manipulation: 'Up',
      status: 'Success',
    },
    {
      time: '2025/03/15  14:15:22',
      operator: 'Linhngan',
      manipulation: 'Down',
      status: 'Success',
    },
  ]

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-8 border border-gray-200">
      <h2 className="text-base font-semibold text-gray-700 mb-4">Operation Record</h2>
      <div className="overflow-x-auto" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
              <th className="py-3 px-6">Time</th>
              <th className="py-3 px-6">Operator</th>
              <th className="py-3 px-6">Manipulation</th>
              <th className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {records.map((record, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-6 whitespace-nowrap">{record.time}</td>
                <td className="py-3 px-6 whitespace-nowrap">{record.operator}</td>
                <td className="py-3 px-6 whitespace-nowrap">{record.manipulation}</td>
                <td
                  className={`py-3 px-6 whitespace-nowrap font-medium ${
                    record.status === 'Success' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {record.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OperationRecord