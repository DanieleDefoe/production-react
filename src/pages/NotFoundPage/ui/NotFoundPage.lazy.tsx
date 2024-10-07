import { PageLoader } from '@/shared/ui';
import { lazy, Suspense } from 'react';

const NotFoundPageAsync = lazy(async () => {
  const { NotFoundPage } = await import('./NotFoundPage');
  return { default: NotFoundPage };
});

const NotFoundPageLazy = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <NotFoundPageAsync />
    </Suspense>
  );
};

export { NotFoundPageLazy as NotFoundPage };
