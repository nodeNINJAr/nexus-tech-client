import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import DashBoard from "../layouts/DashBoard";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import WorkSheet from "../pages/private/employee/WorkSheet";
import PaymentHistory from "../pages/private/employee/PaymentHistory";
import EmployeeList from "../pages/private/hr/EmployeeList";
import EmployeeDetails from "../pages/private/hr/EmployeeDetails";
import EmployeeProgress from "../pages/private/hr/EmployeeProgress";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/profile/Profile";
import EmployeePrivate from "./EmployeePrivate";

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
      <Route path="dashboard" element={<PrivateRoute><DashBoard /></PrivateRoute>}>
        <Route path="profile" element={<Profile />} />
       {/*employee privet routes  */}
        <Route path="work-sheet" element={<EmployeePrivate><WorkSheet /></EmployeePrivate>} />
        <Route path="payment-history" element={<EmployeePrivate><PaymentHistory /></EmployeePrivate>} />
        {/* hr private routes */}
        <Route path="employee-list" element={<EmployeeList />} />
        <Route path="details/:slug" element={<EmployeeDetails />} />
        <Route path="progress" element={<EmployeeProgress />} />
        {/* admin-private routes */}
      </Route>
      {/* auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
};

export default Router;
