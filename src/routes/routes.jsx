import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home";
import PopularInstructors from "../Pages/Home/PopularInstructors/PopularInstructors";
import PopularClasses from "../Pages/Home/PopularClasses/PopularClasses";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Courses from "../Shared/courses/Courses";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Layout/Dashboard";
import MyCart from "../Pages/Home/Dashboard/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <PopularInstructors></PopularInstructors>,
      },
      {
        path: "/classes",
        element: <PopularClasses></PopularClasses>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <Courses></Courses>,
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);
