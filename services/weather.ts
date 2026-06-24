import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const fetchWeather = async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Bhubaneswar&units=metric&appid=${API_KEY}`
  );

  return response.data;
};