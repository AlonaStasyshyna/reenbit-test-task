import axios from 'axios';
import { charactersMapper } from '../utils/charactersMapper';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
  const { data } = await axios('/character');

  return charactersMapper(data.results);
};

export const getCharacterById = async id => {
  const { data } = await axios(`/character/${id}`);

  return data;
};

export const searchCharacters = async query => {
  const { data } = await axios('/character', {
    params: { name: query },
  });

  return charactersMapper(data.results);
};
