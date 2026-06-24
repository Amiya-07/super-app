'use client';

import { useEffect, useState } from 'react';
import { fetchNews } from '@/services/news';

interface Article {
  title: string;
  description: string;
  urlToImage: string;
}

export default function NewsCard() {
  const [articles, setArticles] = useState<Article[]>([]);
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
    if (articles.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % articles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [articles]);

  if (articles.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-4 text-black h-[270px] flex items-center justify-center">
        Loading News...
      </div>
    );
  }

  const article = articles[current];

  return (
    <div className="bg-white rounded-3xl overflow-hidden text-black h-[270px] shadow-lg">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-32 object-cover"
        />
      )}

      <div className="p-4">
        <h2 className="font-bold text-lg line-clamp-2">
          {article.title}
        </h2>

        <p className="text-sm mt-2 text-gray-700 line-clamp-3">
          {article.description}
        </p>

        <p className="text-xs text-gray-500 mt-3">
          Article {current + 1} of {articles.length}
        </p>
      </div>
    </div>
  );
}