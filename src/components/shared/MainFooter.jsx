import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import logo from "../../assets/image/logo.png";

const MainFooter = () => {
  return (
    <Footer
      container
      className="dark:bg-gray-900 dark:text-white rounded-none"
    >
      <div className="w-full">
        {/* Top Section */}
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <img
              className="w-56 dark:brightness-75"
              src={logo}
              alt="logo"
            />
          </div>
          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            {/* About Section */}
            <div>
              <Footer.Title
                title="About NexusTech"
                className="dark:text-white"
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-white"
                >
                  Company Overview
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-white"
                >
                  Our Services
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-white"
                >
                  Careers
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-white"
                >
                  Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* Support Section */}
            <div>
              <Footer.Title
                title="Support"
                className="dark:text-white"
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-white"
                >
                  Contact Us
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-white"
                >
                  Help Center
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-white"
                >
                  FAQ
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* Legal Section */}
            <div>
              <Footer.Title
                title="Legal"
                className="dark:text-white"
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-white"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-white"
                >
                  Terms & Conditions
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="dark:text-gray-400 hover:dark:text-white"
                >
                  Cookie Policy
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        {/* Divider */}
        <Footer.Divider className="dark:border-gray-700" />
        {/* Bottom Section */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          {/* Copyright */}
          <Footer.Copyright
            href="https://nexustech.com"
            by="NexusTech™"
            year={2025}
            className="dark:text-gray-400"
          />
          {/* Social Icons */}
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://facebook.com/nexustech"
              icon={BsFacebook}
              className="dark:text-gray-400 hover:dark:text-blue-500"
            />
            <Footer.Icon
              href="https://linkedin.com/company/nexustech"
              icon={BsLinkedin}
              className="dark:text-gray-400 hover:dark:text-blue-500"
            />
            <Footer.Icon
              href="https://twitter.com/nexustech"
              icon={BsTwitter}
              className="dark:text-gray-400 hover:dark:text-blue-500"
            />
            <Footer.Icon
              href="https://github.com/nexustech"
              icon={BsGithub}
              className="dark:text-gray-400 hover:dark:text-gray-200"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MainFooter;