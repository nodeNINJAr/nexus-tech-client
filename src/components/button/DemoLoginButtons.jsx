import React from "react";
import { Button, Tag } from "antd"; // Import Ant Design Button and Tag

const DemoLoginButtons = ({handleDemoLogin}) => {

  // 
  return (
    <>
      {/* Tag or Heading */}
      <div className="text-center mb-4 w-full">
        <Tag color="blue" className="text-lg font-semibold py-2 px-4 w-full">
          Choose Test Your Role
        </Tag>
      </div>
      <div className="flex justify-between items-start gap-4 mb-4 flex-wrap sm:flex-nowrap">
        {/* Employee Login Button */}
        <Button
          onClick={()=>handleDemoLogin({email:'xomiwakoj@mailinator.com', pass:"Pa$$w0rd!"})}
          type="primary"
          className="bg-blue-500 text-white hover:bg-blue-600 transition duration-300 w-full md:w-4/12"
        >
          Login as Employee
        </Button>

        {/* HR Login Button */}
        <Button
          onClick={()=>handleDemoLogin({email:'vysefetil@mailinator.com', pass:"Pa$$w0rd!"})}
          type="default"
          className="bg-green-500 text-white hover:bg-green-600 transition duration-300 w-full md:w-4/12 "
        >
          Login as HR
        </Button>

        {/* Admin Login Button */}
        <Button
          onClick={()=>handleDemoLogin({email:'suzume99@gmail.com', pass:"Pa$$w0rd!"})}
          type="danger"
          className="bg-red-500 text-white hover:bg-red-600 transition duration-300 w-full md:w-4/12"
        >
          Login as Admin
        </Button>
      </div>
    </>
  );
};

export default DemoLoginButtons;
