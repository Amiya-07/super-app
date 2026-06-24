'use client';

interface MovieModalProps {
  movie: any;
  onClose: () => void;
}

export default function MovieModal({
  movie,
  onClose,
}: MovieModalProps) {
  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 text-white p-6 rounded-2xl max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-96 object-cover rounded-lg"
        />

        <h2 className="text-2xl font-bold mt-4">
          {movie.Title}
        </h2>

        <p className="text-gray-400">
          Year: {movie.Year}
        </p>

        <p className="mt-4">
          IMDB ID: {movie.imdbID}
        </p>

        <button
          onClick={onClose}
          className="mt-5 bg-red-500 px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}