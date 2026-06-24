'use client';

import { useEffect, useState } from 'react';
import { fetchNews } from '@/services/news';

export default function NewsCard() {
  const [articles, setArticles] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        setArticles(data);
      } catch (error) {
        console.error('News Error:', error);
      }
    };

    loadNews();
  }, []);

  useEffect(() => {
    if (!articles.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % articles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [articles]);

  if (!articles.length) {
    return (
      <div className="bg-white rounded-3xl p-4 text-black">
        Loading News...
      </div>
    );
  }

  const article = articles[current];

  return (
    <div className="bg-white rounded-3xl overflow-hidden text-black">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="font-bold">
          {article.title}
        </h3>

        <p className="text-sm mt-2">
          {article.description}
        </p>
      </div>
    </div>
  );
}