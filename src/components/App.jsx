import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';

const LazyHomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LazyCharacterPage = lazy(() =>
  import('../pages/CharacterPage/CharacterPage')
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/characters" element={<LazyHomePage />} />
        <Route
          path="/characters/:characterId"
          element={<LazyCharacterPage />}
        />
      </Routes>
    </Suspense>
  );
};
