import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Errorpage from "../Pages/Error/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }

    ],
  },
]);

export default router;
