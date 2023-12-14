import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, Navbar } from "./components";
import UserProvider from "./context/UserProvider";

const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to={"/about"} />} />
      </Routes>
    </UserProvider>
  );
};

export default MainApp;
