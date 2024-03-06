import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import { RegisterPage } from "./pages/register.page";
import Community from "./pages/Community";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<Community />} path="/community"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
