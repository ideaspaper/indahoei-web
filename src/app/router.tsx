import {useMemo} from 'react';
import {createBrowserRouter} from 'react-router';
import {RouterProvider} from 'react-router/dom';

import Error from '@/app/routes/error';
import {Layout} from '@/components/layout';
import {APP_PATH_MAP} from '@/config/paths';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const extractComponent = (m: any) => {
  const {default: Component} = m;
  return {Component};
};

const createAppRouter = () =>
  createBrowserRouter([
    {
      Component: Layout,
      children: [
        {
          index: true,
          lazy: () => import('@/app/routes/home').then(extractComponent),
          ErrorBoundary: Error,
        },
        {
          path: APP_PATH_MAP.about.path,
          lazy: () => import('@/app/routes/about').then(extractComponent),
          ErrorBoundary: Error,
        },
        {
          path: APP_PATH_MAP.projects.path,
          lazy: () => import('@/app/routes/projects').then(extractComponent),
          ErrorBoundary: Error,
        },
        {
          path: APP_PATH_MAP.speaking.path,
          lazy: () => import('@/app/routes/speaking').then(extractComponent),
          ErrorBoundary: Error,
        },
        {
          path: APP_PATH_MAP.uses.path,
          lazy: () => import('@/app/routes/uses').then(extractComponent),
          ErrorBoundary: Error,
        },
        {
          path: '*',
          lazy: () => import('@/app/routes/not-found').then(extractComponent),
          ErrorBoundary: Error,
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};
