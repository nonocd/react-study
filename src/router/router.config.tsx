import { RouteObject } from 'react-router-dom';
import BasicLayout from '@/layouts/BasicLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Login from '@/pages/Login';
import RoleList from '@/pages/role/RoleList';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BasicLayout />,
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
