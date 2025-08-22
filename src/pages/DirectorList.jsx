import { Link, useOutletContext } from "react-router-dom";

const DirectorList = () => {
  const { directors } = useOutletContext();

  if (!directors || directors.length === 0)
    return <p>No directors found. Add one!</p>;

  return (
    <ul>
      {directors.map((director) => (
        <li key={director.id}>
          <Link to={`${director.id}`}>{director.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DirectorList;