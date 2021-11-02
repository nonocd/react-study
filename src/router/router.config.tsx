import { RouteObject } from 'react-router-dom';
import BasicLayout from '@/layouts/BasicLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Login from '@/pages/Login';
import RoleList from '@/pages/role/RoleList';
import { RequireAuth } from '@/app/auth/useAuth';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <RequireAuth>
        <BasicLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      { path: '/role', element: <RoleList /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default routes;
