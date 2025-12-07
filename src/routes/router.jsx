import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Chef from "../pages/Chef/Chef";

export const router = createBrowserRouter([
  {
    path: "/",
       Component: RootLayout,
    children: [
      {
        index: true,
        Component:Home
      },
      {
        path:'chef',
        element:<PrivateRoute><Chef></Chef></PrivateRoute>
      }
]},
{
  path: "/",
  Component: AuthLayout,
  children:[
    {
      path:"/login",
      Component:Login
    },
    {
      path:"/register",
      Component:Register
    }
  ]
}
]);