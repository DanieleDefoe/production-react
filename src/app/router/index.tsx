import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from 'react-router-dom';
import App from '../App';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<MainPage />} />
    <Route path="about" element={<AboutPage />} />
  </Route>
);

export const router = createBrowserRouter(routes);
