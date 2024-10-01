import { lazy, Suspense } from 'react';

const MainPageAsync = lazy(() => import('./MainPage'));

const MainPageLazy = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainPageAsync />
    </Suspense>
  );
};

export { MainPageLazy as MainPage };
