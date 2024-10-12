import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppRoutes, RoutePath } from '@/shared/config';
import { PageError } from '@/widgets/PageError';
import { type RouteObject } from 'react-router-dom';
import App from '../../../../app/App';

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
