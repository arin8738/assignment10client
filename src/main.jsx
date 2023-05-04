import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './componends/header/Home.jsx';
import Login from './componends/login/login.jsx';
import Register from './componends/login/register.jsx';
import Blog from './componends/Blog/Blog.jsx';
import ChefDetails from './componends/view-details/ChefDetails.jsx';
import ErrorPage from './componends/footer/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

    ]
  },

  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/blog',
    element: <Blog></Blog>
  },
  {
    path: "/chef-details/:id",
    element: <ChefDetails></ChefDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000/chef-data/${params.id}`)

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
