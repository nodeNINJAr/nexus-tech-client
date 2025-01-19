import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../components/shared/TopNavbar";
import MainFooter from "../components/shared/MainFooter";


const Layouts = () => {
  return (
    <div className="container mx-auto bg-gray-100">
      {/* navbar */}
      <TopNavbar />
      {/*main content */}
      <main className="mx-auto ">
        <Outlet />
      </main>
      {/* footer */}
      <MainFooter />
    </div>
  );
};

export default Layouts;
