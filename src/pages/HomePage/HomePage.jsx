import { Logo } from 'components/Logo/Logo';
import { Main } from 'components/Main/Main';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { CharactersList } from 'components/CharactersList/CharactersList';

const HomePage = () => {
  return (
    <>
      <Logo />
      <Main>
        <SearchForm />
        <CharactersList />
      </Main>
    </>
  );
};

export default HomePage;
