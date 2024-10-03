import { createBrowserRouter } from 'react-router-dom';
import { routeConfig } from './lib/config/routeConfig';

const routes = Object.values(routeConfig);

export const router = createBrowserRouter(routes);
