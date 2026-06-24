'use client';

import { useEffect, useState } from 'react';

export default function TimerCard() {
  const [seconds, setSeconds] = useState(18000); // 5 hours

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return (
    <div className="bg-[#1F2544] text-white rounded-3xl p-6">
      <h2 className="text-xl font-bold mb-4">
        Countdown Timer
      </h2>

      <div className="text-center text-5xl font-bold">
        {String(hrs).padStart(2, '0')}:
        {String(mins).padStart(2, '0')}:
        {String(secs).padStart(2, '0')}
      </div>

      <button
        className="mt-6 w-full bg-red-400 text-white py-2 rounded-full"
      >
        Start
      </button>
    </div>
  );
}