export const CharacterItem = ({ name, species, image }) => {
  return (
    <li>
      <img src={image} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>{species}</p>
      </div>
    </li>
  );
};
