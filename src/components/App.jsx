import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';

const LazyHomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LazyCharacterPage = lazy(() =>
  import('../pages/CharacterPage/CharacterPage')
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LazyHomePage />} />
        <Route path="/:characterId" element={<LazyCharacterPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
