import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/App';
import { AppLayout } from '@/layouts';

const WelcomePage = lazy(() => import('@/pages/Welcome'));

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <WelcomePage />
              </Suspense>
            ),
          },
          // Feature routes will be added here
        ],
      },
    ],
  },
]);
