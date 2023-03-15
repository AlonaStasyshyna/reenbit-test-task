import { CharacterItem } from 'components/CharacterItem/CharacterItem';

export const CharactersList = ({ characters }) => {
  return (
    <ul>
      {characters.map(({ id, name, species, image }) => (
        <CharacterItem key={id} name={name} species={species} image={image} />
      ))}
    </ul>
  );
};
