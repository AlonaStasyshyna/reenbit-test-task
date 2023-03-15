import { Link, useLocation } from 'react-router-dom';

export const CharacterItem = ({ id, name, species, image }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/${id}`} state={{ from: location }}>
        <img src={image} alt={name} />
        <div>
          <h1>{name}</h1>
          <p>{species}</p>
        </div>
      </Link>
    </li>
  );
};
