import { PageLoader } from '@/shared/ui';
import { lazy, Suspense } from 'react';

const AboutPageAsync = lazy(() => import('./AboutPage'));

const AboutPageLazy = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <AboutPageAsync />
    </Suspense>
  );
};

export { AboutPageLazy as AboutPage };
