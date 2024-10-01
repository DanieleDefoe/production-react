import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const rootNode = document.getElementById('root');

if (!rootNode) throw new Error('Root node not found');

createRoot(rootNode).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
