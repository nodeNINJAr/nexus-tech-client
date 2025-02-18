import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import DashBoard from "../layouts/DashBoard";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/ContactUs";
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
import HrPrivate from "./HrPrivate";
import AdminPrivate from "./AdminPrivate";
import AllEmployeeList from "../pages/private/admin/AllEmployeeList";
import Payroll from "../pages/private/admin/Payroll";
import Services from "../pages/public/Services";
import ContactUs from "../pages/public/ContactUs";
import AdminDashBoard from "../pages/private/admin/AdminDashBoard";
import NotFound from "../pages/error/NotFound";
import EmployeeDashboard from "../pages/private/employee/EmployeeDashboard";
import HrDashboard from "../pages/private/hr/HrDashboard";

//
const Router = () => {
  return (
    <Routes>
      {/* Public layouts */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Route>
      {/* private layouts */}
      <Route path="dashboard" element={<PrivateRoute><DashBoard /></PrivateRoute>}>
        <Route path="profile" element={<Profile />} />
       {/*employee privet routes  */}
        {/* <Route index element={<EmployeePrivate><EmployeeDashboard /></EmployeePrivate>} /> */}
        <Route path="work-sheet" element={<EmployeePrivate><WorkSheet /></EmployeePrivate>} />
        <Route path="payment-history" element={<EmployeePrivate><PaymentHistory /></EmployeePrivate>} />
        {/* hr private routes */}
        {/* <Route index element={<HrPrivate><HrDashboard/></HrPrivate>} /> */}
        <Route path="employee-list" element={<HrPrivate><EmployeeList /></HrPrivate>} />
        <Route path="details/:employeeId" element={<HrPrivate><EmployeeDetails /></HrPrivate>} />
        <Route path="progress" element={<HrPrivate><EmployeeProgress /></HrPrivate>} />
        {/* admin-private routes */}
        <Route path="all-employee-list" element={<AdminPrivate><AllEmployeeList/></AdminPrivate>} />
        <Route path="payroll" element={<AdminPrivate><Payroll/></AdminPrivate>} />
        {/* <Route index element={<AdminPrivate><AdminDashBoard /></AdminPrivate>} /> */}
      </Route>
      {/* auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      {/*  */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
