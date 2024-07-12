import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Main = lazy(() =>
  import("../pages/Main/Main").then((module) => ({
    default: module.Main,
  }))
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);
