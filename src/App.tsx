import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ThemeProvider } from "./components/theme-provider";

const Layout = lazy(() =>
  import("./pages/Layout/Layout").then((module) => ({
    default: module.Layout,
  }))
);

const Login = lazy(() =>
  import("./pages/Login/Login").then((module) => ({
    default: module.Login,
  }))
);

const Main = lazy(() =>
  import("./pages/Main/Main").then((module) => ({
    default: module.Main,
  }))
);

const Register = lazy(() =>
  import("./pages/Register/Register").then((module) => ({
    default: module.Register,
  }))
);

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/create-account" element={<Register />} />
            <Route path="/start" element={<Main />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
