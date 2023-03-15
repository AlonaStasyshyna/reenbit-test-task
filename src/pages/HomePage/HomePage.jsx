import { useEffect, useState } from 'react';
import { Logo } from 'components/Logo/Logo';
import { Main } from 'components/Main/Main';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { CharactersList } from 'components/CharactersList/CharactersList';
import { getCharacters, searchCharacters } from 'toApi/getData';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('name') || '';

  useEffect(() => {
    setIsLoading(true);

    if (query !== '') {
      searchCharacters(query)
        .then(res => {
          setError(null);
          setCharacters(res);
        })
        .catch(err => {
          setCharacters([]);
          setError(err);
        })
        .finally(setIsLoading(false));
    } else {
      getCharacters()
        .then(setCharacters)
        .catch(setError)
        .finally(setIsLoading(false));
    }
  }, [query]);

  const handleChange = searchQuery => {
    setSearchParams({ name: searchQuery });
  };

  return (
    <>
      <Logo />
      <Main>
        <SearchForm query={query} handleChange={handleChange} />
        {isLoading && <Loader />}
        {characters.length > 0 && <CharactersList characters={characters} />}
        {error && <p>Ooops! Something went wrong.</p>}
      </Main>
    </>
  );
};

export default HomePage;
