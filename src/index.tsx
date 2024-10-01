import { createRoot } from 'react-dom/client';
import Counter from './components/Counter';
import { StrictMode } from 'react';

const rootNode = document.getElementById('root');

if (rootNode) {
  createRoot(rootNode).render(
    <StrictMode>
      <Counter />
    </StrictMode>
  );
}
