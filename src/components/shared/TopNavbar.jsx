import React from "react";
("use client");
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import useRole from "../hooks/useRole";

// 
const TopNavbar = () => {
  // 
  const [userRole] = useRole();
  // user from auth
  const { user, userSignOut } = useAuth();
  // user sign out
  const handleSignOut = () => {
    // function call
    userSignOut()
      .then(() => {})
      .catch(() => {});
  };

  //
  return (
    <Navbar fluid rounded className="sticky top-0">
      <Navbar.Brand>
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          NexusTech
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 text-xl font-normal text-gray-800">
        {/* dropdown on profile click */}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            user ? <Avatar className="mr-2 md:mr-0" img={user?.photoURL} rounded /> : <Avatar rounded />
          }
        >
          {user ? <>
            <Dropdown.Header>
            <span className="block text-sm font-exo2">{user?.displayName}</span>
            <span className="block truncate text-sm font-medium">
              {user?.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item as={Link} to={`${userRole=== "employee" && "/dashboard/work-sheet" || userRole === "hr" && "/dashboard/employee-list" || userRole === "admin" && "/dashboard"}`} className="flex justify-start items-center gap-1 text-sm font-normal font-roboto"><LuLayoutDashboard />Dashboard</Dropdown.Item>
          <Dropdown.Item as={Link} to={'/dashboard/profile'} className="flex justify-start items-center gap-1 text-sm font-normal font-roboto"><CgProfile />Profile</Dropdown.Item>
          <Dropdown.Divider />
          
            <Dropdown.Item onClick={handleSignOut} className="font-medium flex justify-start items-center  gap-[5px] text-lg font-exo2">
              Sign out <FaSignOutAlt />
            </Dropdown.Item>
          </>
           : (
            <Dropdown.Item>
              <Link to="/login" className="font-medium flex justify-start items-center gap-[2px] text-lg font-exo2">
                LogIn <IoLogInOutline />
              </Link>
            </Dropdown.Item>
          )}
        </Dropdown>
        <Navbar.Toggle />
      </div>
      {/* Navlinks */}
      <Navbar.Collapse>
        <Navbar.Link as={NavLink} to="/">Home</Navbar.Link>
        <Navbar.Link as={NavLink}  to="/about">About</Navbar.Link>
        <Navbar.Link as={NavLink}  to="/services">Services</Navbar.Link>
        <Navbar.Link as={NavLink}  to="/contact-us">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
