export const CharacterInfo = ({
  character: { name, status, species, type, gender, image, origin },
}) => {
  return (
    <>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>Informations</p>

      <ul>
        <li>
          Gender
          <span>{gender}</span>
        </li>
        <li>
          Status
          <span>{status}</span>
        </li>
        <li>
          Specie
          <span>{species}</span>
        </li>
        <li>
          Origin
          <span>{origin.name}</span>
        </li>
        <li>
          Type
          <span>{type}</span>
        </li>
      </ul>
    </>
  );
};
