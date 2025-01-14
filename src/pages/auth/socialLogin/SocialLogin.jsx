import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../../components/hooks/useAuth";

const SocialLogin = () => {
const {userSignInByGoogle,userSignInByGithub} = useAuth();
  // signIn by google
  const handleGoogleLogin=()=>{
    // call the function
    userSignInByGoogle()
    .then(result =>{
       console.log(result);
    })
    .catch(err =>{
        console.log(err);
    })
  }

  // github login
  const handleGithubSignIn=()=>{
   // call the function
    userSignInByGithub()
    .then(result =>{
       console.log(result);
    })
    .catch(err =>{
        console.log(err);
    })
  }


// 
  return (
    <div className="py-4">
      <div className="flex justify-between items-center gap-6 mb-4">
        <p className="w-1/2 border border-gray-400"></p>
        <span className="text-2xl font-rubik text-gray-400 font-medium">or</span>
        <p className="w-1/2 border border-gray-400"></p>
      </div>
      <div className="flex justify-center items-center gap-4">
        {" "}
        <span onClick={handleGoogleLogin} className="border border-gray-400 rounded-full p-3 cursor-pointer">
          <FaGoogle className="text-xl text-green-500" />
        </span>
        <span onClick={handleGithubSignIn} className="border border-gray-400 rounded-full p-3 cursor-pointer">
          <FaGithub className="text-xl text-gray-800"/>
        </span>
      </div>
    </div>
  );
};

export default SocialLogin;
