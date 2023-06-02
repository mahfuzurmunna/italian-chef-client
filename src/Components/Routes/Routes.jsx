import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Errorpage from "../Pages/Error/Errorpage";
import Chefdetails from "../Pages/ChefDetails/Chefdetails";
import PrivateRoute from "./PrivateRoute";
import LoadingSpinner from "../../../../../../react-projects/next-page-book-with-reactrouter/nextPage-complete-main/nextPage-complete-main/src/components/LoadingSpinner";
import Loadingspinner from "../Loadingspinner/Loadingspinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: ":id",
        element: (
         <PrivateRoute>
          <Chefdetails></Chefdetails>
         </PrivateRoute>
        ),
      },
      {
        path: '/loader',
        element : <Loadingspinner></Loadingspinner>
      }
    ],
  },
]);

export default router;
