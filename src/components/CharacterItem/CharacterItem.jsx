import { Link, useLocation } from 'react-router-dom';
import { Img, Item, Text, Title, Wrapper } from './CharacterItem.styled';

export const CharacterItem = ({ id, name, species, image }) => {
  const location = useLocation();

  return (
    <Item>
      <Link to={`/characters/${id}`} state={{ from: location }}>
        <Img src={image} alt={name} />
        <Wrapper>
          <Title>{name.length > 20 ? name.slice(0, 18) + '...' : name}</Title>
          <Text>{species}</Text>
        </Wrapper>
      </Link>
    </Item>
  );
};
