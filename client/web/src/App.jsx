import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import LoginAndSignInPage from "./pages/singin&register.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<LoginAndSignInPage />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
