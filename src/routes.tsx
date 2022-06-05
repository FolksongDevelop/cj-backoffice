
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
// import DashboardLayout from './layouts/dashboard';
import BaseLayout from './layouts/base-layout';
//
// import Login from './pages/Login';
// import Register from './pages/Register';
// import DashboardApp from './pages/DashboardApp';
// import Products from './pages/Products';
// import Blog from './pages/Blog';
// import User from './pages/User';
// import NotFound from './pages/Page404';

import Auth from './pages/auth'

// Status
import Status404 from '@/layouts/status/404'

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // {
    //   path: '/dashboard',
    //   element: <DashboardLayout />,
    //   children: [
    //     { path: 'app', element: <DashboardApp /> },
    //     { path: 'user', element: <User /> },
    //     { path: 'products', element: <Products /> },
    //     { path: 'blog', element: <Blog /> }
    //   ]
    // },
    {
      path: '/',
      element: <BaseLayout />,
      children: [
        // { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'authen', element: <Auth /> },
        // { path: 'register', element: <Register /> },
        { path: '404', element: <Status404 /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    // { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}