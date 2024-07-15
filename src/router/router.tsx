import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Main = lazy(() =>
  import("../pages/Main/Main").then((module) => ({
    default: module.Main,
  }))
);

const Login = lazy(() =>
  import("../pages/Login/Login").then((module) => ({
    default: module.Login,
  }))
);

const Layout = lazy(() =>
  import("../pages/Layout/Layout").then((module) => ({
    default: module.Layout,
  }))
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
