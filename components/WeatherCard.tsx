'use client';

import { useEffect, useState } from 'react';
import { fetchWeather } from '@/services/weather';

export default function WeatherCard() {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather();
        setWeather(data);
      } catch (error) {
        console.error('Weather Error:', error);
      }
    };

    getWeather();
  }, []);

  if (!weather) {
    return (
      <div className="bg-[#101744] rounded-3xl p-6 text-white">
        Loading Weather...
      </div>
    );
  }

  return (
    <div className="bg-[#101744] rounded-3xl p-6 text-white">
      <h2 className="text-xl font-bold mb-4">
        Weather
      </h2>

      <p className="text-4xl font-bold">
        {Math.round(weather.main.temp)}°C
      </p>

      <p className="mt-2">
        Humidity: {weather.main.humidity}%
      </p>

      <p>
        Wind Speed: {weather.wind.speed} m/s
      </p>

      <p className="mt-2 text-sm text-gray-300">
        {weather.weather[0].description}
      </p>
    </div>
  );
}