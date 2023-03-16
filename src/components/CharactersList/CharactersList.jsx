import { CharacterItem } from 'components/CharacterItem/CharacterItem';
import { List } from './CharactersList.styled';

export const CharactersList = ({ characters }) => {
  return (
    <List>
      {characters.map(({ id, name, species, image }) => (
        <CharacterItem
          key={id}
          id={id}
          name={name}
          species={species}
          image={image}
        />
      ))}
    </List>
  );
};
