import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../shared/TopNavbar";
import MainFooter from "../shared/MainFooter";

const Layouts = () => {
  return (
    <div className="container mx-auto">
      {/* navbar */}
      <TopNavbar />
      {/*main content */}
      <main className="mx-auto w-11/12">
        <Outlet />
      </main>
      {/* footer */}
      <MainFooter />
    </div>
  );
};

export default Layouts;
