import React from "react";
("use client");
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
const TopNavbar = () => {
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
      <div className="flex md:order-2">
        {/* dropdown on profile click */}
        <Dropdown arrowIcon={false} inline label={<Avatar rounded />}>
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      {/* Navlinks */}
      <Navbar.Collapse>
        <Navbar.Link>
          <NavLink to="/">Home</NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink to="/about">About</NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink to="/contact">Contact</NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
