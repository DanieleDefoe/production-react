import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';

const rootNode = document.getElementById('root');

if (!rootNode) throw new Error('Root node not found');

createRoot(rootNode).render(
  <StrictMode>
    <App />
  </StrictMode>
);
