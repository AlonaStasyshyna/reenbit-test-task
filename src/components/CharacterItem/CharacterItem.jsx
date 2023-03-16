import { Link, useLocation } from 'react-router-dom';
import { Img, Item, Text, Title, Wrapper } from './CharacterItem.styled';

export const CharacterItem = ({ id, name, species, image }) => {
  const location = useLocation();

  const arrOhName = name.split(' ');
  const sliceName = arrOhName.slice(0, arrOhName.length - 1).join(' ') + ' ...';

  return (
    <Item>
      <Link to={`/characters/${id}`} state={{ from: location }}>
        <Img src={image} alt={name} />
        <Wrapper>
          <Title>{name.length > 20 ? sliceName : name}</Title>
          <Text>{species}</Text>
        </Wrapper>
      </Link>
    </Item>
  );
};
