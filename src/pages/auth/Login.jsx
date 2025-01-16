import React, { useState } from "react";

import { Button, Checkbox, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "./socialLogin/SocialLogin";
import useAuth from "../../components/hooks/useAuth";
import { notification } from "antd";

const Login = () => {
  // auth
  const {userSignIn } = useAuth();
  // show hide pass
  const [showPass, setShowPass] = useState(true);
  const [loading , setLoading] = useState(true);
   // navigate
   const navigate = useNavigate();
  // sign in
  const handleUserSignIn = (e) => {
    setLoading(!loading)
    e.preventDefault();
    const userEmail = e.target.userEmail.value;
    const userPass = e.target.userPass.value;
    // call the function
    userSignIn(userEmail, userPass)
      .then(() => {
        setLoading(loading);
        notification.success({
          message: (
            <p className="text-base font-medium font-rubik text-green-500">
              Successfully logged in with your credentials!
            </p>
          ),
          placement: "topRight",
        });
        navigate('/dashboard')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //
  return (
    <div className="py-20 container mx-auto w-11/12 flex flex-col md:flex-row justify-between items-center gap-6 font-roboto">
      {/* left side */}
      <div className="w-full md:w-4/12 lg:w-1/2 mx-auto">
        <img src="" alt="" />
      </div>
      <div className="w-full md:w-8/12 lg:w-1/2 mx-auto ">
        <h1 className="text-4xl font-semibold text-black font-orbitron mb-3">
          Sign In
        </h1>
        <p className="text-xl text-black font-normal mb-8">
          Need an account?
          <Link className="text-blue-600 ml-1" to="/signup">
            Sign Up
          </Link>
        </p>
        <form onSubmit={handleUserSignIn} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              name="userEmail"
              id="email2"
              type="email"
              placeholder="example@gmail.com"
              required
              shadow
            />
          </div>

          <div className="w-full m-auto mb-4 sm:mb-0 reletive">
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            {/* pass show hide */}
            <div className="relative w-full">
              <TextInput
                name="userPass"
                type={!showPass ? "text" : "password"}
                shadow
                placeholder="Write your password"
              />
              {showPass ? (
                <FaEye
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-2 top-1/2 bottom-1/2 -translate-y-1/2 "
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-2 top-1/2 bottom-1/2 -translate-y-1/2 "
                />
              )}
            </div>
          </div>
          <div className="flex justify-between items-center gap-6 mt-2">
            <div className="flex items-center gap-2">
              <Checkbox id="accept" defaultChecked />
              <Label htmlFor="accept" className="flex">
                Remember me
              </Label>
            </div>
            <p className="text-blue-600 font-medium text-sm hover:underline cursor-pointer">
              Forgot Password
            </p>
          </div>
          {/*  */}
          <Button type="submit">
            {!loading && <Spinner aria-label="Spinner button example" size="sm" />}
            <span className="pl-3"> Login</span>
          </Button>
        </form>
        {/* social login */}
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
