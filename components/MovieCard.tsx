interface MovieCardProps {
  movie: any;
  onClick: () => void;
}

export default function MovieCard({
  movie,
  onClick,
}: MovieCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        bg-zinc-900
        rounded-xl
        overflow-hidden
        cursor-pointer
        transition-all
        duration-300
        hover:scale-105
      "
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-72 object-cover"
      />

      <div className="p-3">
        <h3 className="font-semibold">
          {movie.Title}
        </h3>

        <p className="text-gray-400 text-sm">
          {movie.Year}
        </p>
      </div>
    </div>
  );
}