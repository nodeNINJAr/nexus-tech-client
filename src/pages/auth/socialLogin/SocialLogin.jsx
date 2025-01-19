import React, { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import EmployeeDetailsModal from "../../../components/modal/EmployeeDetailsModal";

// 
const SocialLogin = () => {
  // show modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [authMethod, setAuthMethod] = useState(null);
  const showModal = () => {
    setIsModalVisible(true);
  };

  // signIn by google
  const handleGoogleLogin = () => {
    setAuthMethod("google");
    showModal();
  };

  // github login
  const handleGithubSignIn = () => {
    setAuthMethod("github");
    showModal();
  };

  //
  return (
    <div className="py-4">
      <div className="flex justify-between items-center gap-6 mb-4">
        <p className="w-1/2 border border-gray-400"></p>
        <span className="text-2xl font-rubik text-gray-400 font-medium">
          or
        </span>
        <p className="w-1/2 border border-gray-400"></p>
      </div>
      <div className="flex justify-center items-center gap-4">
        {" "}
        <span
          onClick={handleGoogleLogin}
          className="border border-gray-400 rounded-full p-3 cursor-pointer"
        >
          <FaGoogle className="text-xl text-green-500" />
        </span>
        <span
          onClick={handleGithubSignIn}
          className="border border-gray-400 rounded-full p-3 cursor-pointer"
        >
          <FaGithub className="text-xl text-gray-800" />
        </span>
      </div>
        <EmployeeDetailsModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          authMethod={authMethod}
        />
    </div>
  );
};

export default SocialLogin;
