import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;

export const fetchNews = async () => {
  const response = await axios.get(
    `https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=${API_KEY}`
  );

  return response.data.articles;
};