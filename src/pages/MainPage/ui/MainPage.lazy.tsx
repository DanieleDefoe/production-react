import { PageLoader } from '@/shared/ui';
import { lazy, Suspense } from 'react';

const MainPageAsync = lazy(() => import('./MainPage'));

const MainPageLazy = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <MainPageAsync />
    </Suspense>
  );
};

export { MainPageLazy as MainPage };
