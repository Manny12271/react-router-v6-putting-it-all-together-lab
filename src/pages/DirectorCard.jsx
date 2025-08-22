import { useParams, useOutletContext, Outlet, Link } from "react-router-dom";

const DirectorCard = () => {
  const { directorId } = useParams(); // get ID from URL
  const { directors } = useOutletContext(); // get directors from context

  // find the director by ID
  const director = directors.find((d) => d.id === directorId);

  if (!director) return <h2>Director not found.</h2>;

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>

      <h3>Movies:</h3>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>

      <Link to={`movies/new`}>Add New Movie</Link>

      {/* Outlet for nested movie routes */}
      <Outlet context={{ director, directors }} />
    </div>
  );
};

export default DirectorCard;