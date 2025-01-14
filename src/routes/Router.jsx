import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import DashBoard from "../layouts/DashBoard";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";

//
const Router = () => {
  return (
    <Routes>
      {/* Public layouts */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      {/* private layouts */}
      <Route path="/dashboard" element={<DashBoard />}></Route>
      {/* auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
};

export default Router;
