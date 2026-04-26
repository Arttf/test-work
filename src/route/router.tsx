import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { SidebarLayout } from '../features/sidebar/ui';
import { ErrorPage } from '../pages/error/ErrorPage';
import { HomePage } from '../pages/home/HomePage';
import { NotFoundPage } from '../pages/not-found/NotFoundPage';
import { TaskPage } from '../pages/task/TaskPage';
import { appPaths } from './path';

const router = createBrowserRouter([
  {
    element: (
      <SidebarLayout>
        <Outlet />
      </SidebarLayout>
    ),
    errorElement: <ErrorPage />,
    path: appPaths.home,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <TaskPage />,
        path: 'tasks/:taskId',
      },
      {
        element: <NotFoundPage />,
        path: '*',
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
