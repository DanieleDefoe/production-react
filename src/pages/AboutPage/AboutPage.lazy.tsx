import { lazy, Suspense } from 'react';

const AboutPageAsync = lazy(() => import('./AboutPage'));

const AboutPageLazy = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutPageAsync />
    </Suspense>
  );
};

export { AboutPageLazy as AboutPage };
