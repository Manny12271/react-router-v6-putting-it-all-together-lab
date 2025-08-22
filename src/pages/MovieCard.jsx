import { useParams, useOutletContext } from "react-router-dom";

const MovieCard = () => {
  const { directorId, movieId } = useParams();
  const { directors } = useOutletContext();

  // Find the director first
  const director = directors.find((d) => d.id === directorId);
  if (!director) return <h2>Director not found.</h2>;

  // Find the movie by ID
  const movie = director.movies.find((m) => m.id === movieId);
  if (!movie) return <h2>Movie not found.</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
      <p>
        Directed by: <strong>{director.name}</strong>
      </p>
    </div>
  );
};

export default MovieCard;