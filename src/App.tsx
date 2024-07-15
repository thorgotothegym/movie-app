import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./pages/Layout/Layout";
import { Login } from "./pages/Login/Login";
import { Main } from "./pages/Main/Main";

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/start" element={<Main />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
