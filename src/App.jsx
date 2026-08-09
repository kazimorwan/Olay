import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MyNavbar from "./Components/Global/Header/MyNavbar";
import Home from "./Components/Landing/HomePage/Home";
import Login from "./Components/Global/Login";
import ErrorPage from "./Components/Global/ErrorPage";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <MyNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
