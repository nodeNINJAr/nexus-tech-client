import { Route, Routes } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DashBoard from "../layouts/DashBoard";

//
const Router = () => {
  return (
    <Routes>
      {/* Public layouts */}
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      {/* private layouts */}
      <Route path="/dashboard" element={<DashBoard />}></Route>
    </Routes>
  );
};

export default Router;
