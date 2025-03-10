import React, { useState } from 'react';

const ScheduleComponent: React.FC = () => {
    const [timers, setTimers] = useState([
        { id: 1, timer: 'Timer 1', open: '10.2', time: '10:00', days: [] },
        { id: 2, timer: 'Timer 2', open: '12.0', time: '12:00', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        { id: 3, timer: 'Timer 3', open: '15.0', time: '15:00', days: ['Tue', 'Wed'] },
        { id: 4, timer: 'Timer 4', open: '18.0', time: '18:00', days: ['Fri'] },
        { id: 5, timer: 'Timer 5', open: '21.0', time: '21:00', days: ['Sat'] },
        { id: 6, timer: 'Timer 6', open: '24.0', time: '00:00', days: ['Thu', 'Fri'] },
        { id: 7, timer: 'Timer 7', open: '27.0', time: '03:00', days: ['Fri'] },
        { id: 8, timer: 'Timer 8', open: '30.0', time: '06:00', days: ['Thu'] },
        { id: 9, timer: 'Timer 9', open: '33.0', time: '09:00', days: ['Fri'] },
        { id: 10, timer: 'Timer 10', open: '36.0', time: '12:00', days: [] },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTimer, setCurrentTimer] = useState<any>(null);
    const [openError, setOpenError] = useState<string>('');

    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const handleEdit = (timer: any) => {
        setCurrentTimer(timer);
        setOpenError('');
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentTimer(null);
        setOpenError('');
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'open') {
            const regex = /^\d+(\.\d{0,1})?$/;

            if (value === '' || regex.test(value)) {
                const numValue = parseFloat(value || '0');

                if (value === '' || numValue <= 100.0) {
                    setCurrentTimer((prev: any) => ({ ...prev, [name]: value }));
                    setOpenError('');
                } else {
                    setOpenError('Value must not exceed 100.0');
                }
            }
        } else {
            setCurrentTimer((prev: any) => ({ ...prev, [name]: value }));
        }
    };

    const formatOpenValue = () => {
        if (currentTimer && currentTimer.open) {
            const numValue = parseFloat(currentTimer.open);
            const cappedValue = Math.min(numValue, 100.0);
            const formattedValue = cappedValue.toFixed(1);
            setCurrentTimer((prev: any) => ({ ...prev, open: formattedValue }));
            if (cappedValue <= 100.0) {
                setOpenError('');
            }
        }
    };

    const validateOpenValue = (): boolean => {
        if (!currentTimer || !currentTimer.open) {
            setOpenError('Please enter a value');
            return false;
        }
        const numValue = parseFloat(currentTimer.open);
        if (isNaN(numValue)) {
            setOpenError('Invalid value');
            return false;
        }
        if (numValue > 100.0) {
            setOpenError('Value must not exceed 100.0');
            return false;
        }
        return true;
    };

    const handleTimeChange = (value: string, type: 'hours' | 'minutes') => {
        const timeComponents = currentTimer.time.split(':');
        let hours = parseInt(timeComponents[0]);
        let minutes = parseInt(timeComponents[1]);
        if (type === 'hours') {
            hours = parseInt(value);
        } else {
            minutes = parseInt(value);
        }
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const newTime = `${formattedHours}:${formattedMinutes}`;
        setCurrentTimer((prev: any) => ({ ...prev, time: newTime }));
    };

    const handleDayChange = (day: string) => {
        setCurrentTimer((prev: any) => {
            const updatedDays = prev.days.includes(day)
                ? prev.days.filter((d: string) => d !== day)
                : [...prev.days, day];
            return { ...prev, days: updatedDays };
        });
    };

    const handleSubmit = () => {
        formatOpenValue();
        setTimeout(() => {
            if (validateOpenValue()) {
                const updatedTimers = timers.map((timer) =>
                    timer.id === currentTimer.id ? currentTimer : timer
                );
                setTimers(updatedTimers);
                closeModal();
            }
        }, 50);
    };

    return (
        <div className="p-8 w-full bg-white rounded-lg shadow-md border border-gray-200">
            <h1 className="text-base font-bold mb-4 text-gray-700">Schedule Timers</h1>
            <div className="overflow-hidden rounded-lg shadow-sm bg-white">
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-4 border border-gray-300">
                                </th>
                                <th className="py-3 px-4 text-center text-xs font-semibold text-gray-700 border border-gray-300">
                                    OPEN
                                </th>
                                <th className="py-3 px-4 text-center text-xs font-semibold text-gray-700  border border-gray-300">
                                    TIME
                                </th>
                                {daysOfWeek.map((day, index) => (
                                    <th key={index} className="py-3 px-4 text-center text-xs font-semibold text-gray-700 border border-gray-300">
                                        {day}
                                    </th>
                                ))}
                                <th className="py-3 px-4 border border-gray-300">
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {timers.map((timer, index) => (
                                <tr key={timer.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition-colors`}>
                                    <td className="py-3 px-4 text-center text-sm text-gray-800 font-medium border border-gray-300">
                                        {timer.timer}
                                    </td>
                                    <td className="py-3 px-4 text-center text-sm text-gray-800 border border-gray-300">
                                        {timer.open}%
                                    </td>
                                    <td className="py-3 px-4 text-center text-sm text-gray-800 border border-gray-300">
                                        {timer.time}
                                    </td>
                                    {daysOfWeek.map((day, index) => (
                                        <td key={index} className="py-3 px-4 text-center border border-gray-300">
                                            <div className={`w-6 h-6 mx-auto border-2 flex items-center justify-center rounded-md
                            ${timer.days.includes(day) ? "border-blue-500 bg-blue-200 text-blue-700" : "border-gray-300 bg-gray-50 text-gray-400"}`}>
                                                {timer.days.includes(day) && <span className="text-xs">✔️</span>}
                                            </div>
                                        </td>
                                    ))}
                                    <td className="py-3 px-4 text-center border border-gray-300">
                                        <button
                                            onClick={() => handleEdit(timer)}
                                            className="bg-blue-500 text-white text-sm py-1 px-3 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 "
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>

            {isModalOpen && currentTimer && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-blue-100 border-2 border-blue-800 max-w-lg w-full relative shadow-lg rounded-md overflow-hidden">
                        <div className="flex justify-between items-center bg-blue-500 px-3 py-2 border-b-2 border-blue-800">
                            <h2 className="font-bold text-white text-sm">{currentTimer.timer}</h2>
                            <button
                                onClick={closeModal}
                                className="bg-black text-white font-bold px-2 w-6 h-6 flex items-center justify-center hover:bg-gray-800 transition-colors rounded-full text-xs"
                            >
                                X
                            </button>
                        </div>

                        <div className="p-8">
                            <div className="mb-4 ml-4 flex items-center">
                                <label className="block w-28 font-medium text-gray-800 text-sm">Percent open</label>
                                <div className="flex flex-col">
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            name="open"
                                            value={currentTimer.open}
                                            onChange={handleChange}
                                            onBlur={formatOpenValue}
                                            placeholder="Ex: xx.x"
                                            className={`border-2 ${openError ? 'border-red-500' : 'border-gray-400'} px-2 py-1 w-24 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none rounded-md text-sm text-gray-700`}
                                        />
                                        <span className="ml-2 text-gray-800 text-sm">%</span>
                                    </div>
                                    {openError && (
                                        <span className="text-red-500 text-xs mt-1">{openError}</span>
                                    )}
                                </div>
                            </div>

                            <div className="mb-4 ml-4 flex items-center">
                                <label className="block w-28 font-medium text-gray-800 text-sm">Time</label>
                                <div className="flex items-center">
                                    <input
                                        type="number"
                                        min="0"
                                        max="23"
                                        value={currentTimer.time.split(':')[0]}
                                        onChange={(e) => handleTimeChange(e.target.value, 'hours')}
                                        className="border-2 border-gray-400 px-2 py-1 w-14 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none rounded-md text-sm text-gray-700"
                                    />
                                    <span className="mx-1 text-gray-800 font-bold text-sm">:</span>
                                    <input
                                        type="number"
                                        min="0"
                                        max="59"
                                        value={currentTimer.time.split(':')[1]}
                                        onChange={(e) => handleTimeChange(e.target.value, 'minutes')}
                                        className="border-2 border-gray-400 px-2 py-1 w-14 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none rounded-md text-sm text-gray-700"
                                    />
                                </div>
                            </div>

                            <div className="mb-10">
                                <label className="block font-medium mb-4 ml-4 text-gray-800 text-sm">Day of the week</label>
                                <div className="grid grid-cols-7 gap-1 w-full space-x-2">
                                    {daysOfWeek.map((day) => (
                                        <button
                                            key={day}
                                            type="button"
                                            onClick={() => handleDayChange(day)}
                                            className={`py-1 border-2 transition-colors text-xs rounded-md ${currentTimer.days.includes(day)
                                                ? 'bg-blue-500 text-white border-blue-700 hover:bg-blue-600'
                                                : 'bg-gray-200 text-gray-700 border-gray-500 hover:bg-gray-300'
                                                }`}
                                        >
                                            {day}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="bg-green-500 text-white py-1 px-8 font-medium border-2 border-green-700 hover:bg-green-600 transition-colors shadow-md rounded-md text-sm"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ScheduleComponent;