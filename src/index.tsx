import { router } from '@/app/router';
import '@/shared/config/i18n/i18n';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from './app/providers/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from './app/providers/ThemeProvider/ThemeProvider';

const rootNode = document.getElementById('root');

if (!rootNode) throw new Error('Root node not found');

createRoot(rootNode).render(
  <StrictMode>
    <Suspense>
      <ErrorBoundary>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ErrorBoundary>
    </Suspense>
  </StrictMode>
);
