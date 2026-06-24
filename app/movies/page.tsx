'use client';

import { useEffect, useState } from 'react';
import { useStore } from '@/store/useStore';
import { fetchMovies } from '@/services/movies';
import MovieCard from '@/components/MovieCard';
import MovieModal from '@/components/MovieModal';

export default function MoviesPage() {
  const categories = useStore(
    (state) => state.categories
  );

  const [movies, setMovies] = useState<any[]>([]);
  const [selectedMovie, setSelectedMovie] =
    useState<any>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        let allMovies: any[] = [];

        for (const category of categories) {
          const data = await fetchMovies(category);

          if (data) {
            allMovies = [...allMovies, ...data];
          }
        }

        setMovies(allMovies);
      } catch (error) {
        console.error(error);
      }
    };

    loadMovies();
  }, [categories]);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Entertainment
      </h1>

      <div className="grid grid-cols-5 gap-5">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() =>
              setSelectedMovie(movie)
            }
          />
        ))}
      </div>

      <MovieModal
        movie={selectedMovie}
        onClose={() =>
          setSelectedMovie(null)
        }
      />
    </div>
  );
}