import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PageError } from '@/widgets/PageError';
import { type RouteObject } from 'react-router-dom';
import App from '../../../../app/App';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteObject[] = [
  {
    path: RoutePath[AppRoutes.MAIN],
    element: <App />,
    errorElement: <PageError />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
      },
      {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
      },
    ],
  },
];
