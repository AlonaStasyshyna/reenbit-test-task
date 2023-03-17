import { Img, Item, List, Span, Text, Title } from './CharacterInfo.styled';

export const CharacterInfo = ({
  character: { name, status, species, type, gender, image, origin },
}) => {
  return (
    <>
      <Img src={image} alt={name} />
      <Title>{name}</Title>
      <Text>Informations</Text>

      <List>
        <Item>
          Gender
          <Span>{gender || 'unknown'}</Span>
        </Item>
        <Item>
          Status
          <Span>{status || 'unknown'}</Span>
        </Item>
        <Item>
          Specie
          <Span>{species || 'unknown'}</Span>
        </Item>
        <Item>
          Origin
          <Span>{origin.name || 'unknown'}</Span>
        </Item>
        <Item>
          Type
          <Span>{type || 'unknown'}</Span>
        </Item>
      </List>
    </>
  );
};
