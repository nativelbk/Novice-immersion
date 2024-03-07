/** @format */

/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import { RegisterPage } from "./pages/register.page";
import DashboarPage from "./pages/dashboard.page";
import path from "path";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<DashboarPage />} path="/dashboard" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
