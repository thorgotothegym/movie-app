import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Login = lazy(() =>
  import("../pages/Login/Login").then((module) => ({
    default: module.Login,
  }))
);

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);
