import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import LoginAndSignInPage from "./pages/singin&register.page";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<LoginAndSignInPage />} path="/login" />
        <Route element={<Dashboard />} path="/Dashboard" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
