import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from 'components/BackButton/BackButton';
import { CharacterInfo } from 'components/CharacterInfo/CharacterInfo';
import { Main } from 'components/Main/Main';
import { Loader } from 'components/Loader/Loader';
import { getCharacterById } from 'toApi/getData';

const CharacterPage = () => {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { characterId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getCharacterById(characterId)
      .then(setCharacter)
      .catch(setError)
      .finally(setIsLoading(false));
  }, [characterId]);

  return (
    <>
      {isLoading && <Loader />}
      {character && (
        <>
          <BackButton />
          <Main>
            <CharacterInfo character={character} />
          </Main>
        </>
      )}
      {error && <p>Ooops! Something went wrong.</p>}
    </>
  );
};

export default CharacterPage;
