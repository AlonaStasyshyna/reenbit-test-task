import { BackButton } from 'components/BackButton/BackButton';
import { CharacterInfo } from 'components/CharacterInfo/CharacterInfo';
import { Main } from 'components/Main/Main';

const CharacterPage = () => {
  return (
    <>
      <BackButton />
      <Main>
        <CharacterInfo />
      </Main>
    </>
  );
};

export default CharacterPage;
