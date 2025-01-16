import React, { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {useNavigate } from "react-router-dom";
import EmployeeDetailsModal from "../../../components/modal/EmployeeDetailsModal";
import useAuth from "../../../components/hooks/useAuth";
// import { userInfoSaveToDb } from "../../../utilitis/utilitis";
// import { notification } from "antd";

const SocialLogin = () => {
  // //
  // const { userSignInByGoogle, userSignInByGithub } = useAuth();

  // // navigate
  // const navigate = useNavigate();
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
    // // call the function
    // userSignInByGoogle()
    //   .then((result) => {
    //     userInfoSaveToDb({
    //       userEmail: result?.user?.email,
    //       userName: result?.user?.displayName,
    //       userImage: result?.user?.photoURL,
    //       userRole: "employee",
    //     });
    //     notification.success({
    //       message: (
    //         <p className="text-base font-medium font-rubik text-green-500">
    //           Successfully logged in using Google!
    //         </p>
    //       ),
    //       placement: "topRight",
    //     });
    //     navigate("/dashboard");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  // github login
  const handleGithubSignIn = () => {
    setAuthMethod("github");
    showModal();
    // call the function
    // userSignInByGithub()
    //   .then((result) => {
    //     userInfoSaveToDb({
    //       userEmail: result?.user?.email,
    //       userName: result?.user?.displayName,
    //       userImage: result?.user?.photoURL,
    //       userRole: "employee",
    //     });
    //     notification.success({
    //       message: (
    //         <p className="text-base font-medium font-rubik text-green-500">
    //           Successfully logged in with your credentials!
    //         </p>
    //       ),
    //       placement: "topRight",
    //     });
    //     navigate("/dashboard");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
