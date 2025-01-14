import React, { useState } from "react";
("use client");
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Select,
  Spinner,
  TextInput,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "./socialLogin/SocialLogin";
import useAuth from "../../components/hooks/useAuth";
import { imageUpload } from "../../utilitis/utilitis";

// sign up from
const SignUp = () => {
  // auth
  const { userSignUp, userProfileUpdate } = useAuth();

  // show hide pass
  const [showPass, setShowPass] = useState(true);
  const [showRepeatPass, setShowRepeatPass] = useState(true);
  const [loading, setLoading] = useState(true);
  // collect from data
  const [fromData, setFromData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    setLoading(!loading);
    setFromData(data);
    // when function work finished then run userSignUp
    const photoURL = await imageUpload({image:data?.userImage[0]});
    // userSignUp on fireBase
       try{
        await userSignUp(data?.userEmail, data?.userPass)
        await userProfileUpdate(data?.userName, photoURL);
       }
       catch(err){
           console.log(err);
       }finally{
        setLoading(loading);
       }
  };

  //
  return (
    <div className="container mx-auto py-10">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-6  font-roboto">
        {/* left side */}
        <div className="w-full md:w-4/12 lg:w-1/2 mx-auto">
          <img src="" alt="" />
        </div>
        {/* right side */}
        <div className="w-full md:w-8/12 lg:w-1/2 mx-auto">
          <h1 className="text-4xl font-semibold text-black font-orbitron mb-3">
            Sign Up
          </h1>
          <p className="text-xl text-gray-700 font-roboto mb-6">
            Enter details to create your account
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="sm:flex justify-between gap-6 truncate">
              <div className="w-full sm:w-1/2 m-auto mb-4 sm:mb-0">
                {/* name */}
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Your Name" />
                </div>
                <TextInput
                  type="text"
                  placeholder="Write your name"
                  {...register("userName", { required: true })}
                  shadow
                />
                {errors.userName?.type === "required" && (
                  <p role="alert" className="text-sm text-red-600 font-roboto">
                    Name is required
                  </p>
                )}
              </div>
              <div className="w-full sm:w-1/2 m-auto">
                {/* email */}
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Your email" />
                </div>
                <TextInput
                  type="email"
                  placeholder="example@gmail.com"
                  {...register("userEmail", { required: true })}
                  shadow
                />
                {errors.userEmail?.type === "required" && (
                  <p role="alert" className="text-sm text-red-600 font-roboto">
                    Email is required
                  </p>
                )}
              </div>
            </div>
            {/* file and role input */}
            <div className="sm:flex justify-between items-center gap-6">
              {/* image */}
              <div className="w-full sm:w-1/2 m-auto mb-4 sm:mb-0">
                <div className="mb-2 block">
                  <Label htmlFor="file" value="Upload file" />
                </div>

                <FileInput
                  id="file"
                  type="file"
                  {...register("userImage", { required: true })}
                />
                {errors.userImage?.type === "required" && (
                  <p role="alert" className="text-sm text-red-600 font-roboto">
                    Image is required
                  </p>
                )}
              </div>
              {/* user role */}
              <div className="w-full sm:w-1/2 m-auto">
                <div className="mb-2 block">
                  <Label htmlFor="countries" value="Choose your role" />
                </div>
                <Select
                  defaultValue={"default"}
                  {...register("userRole", { required: true })}
                  id="countries"
                  required
                >
                  <option disabled value="default">
                    Select Your Role
                  </option>
                  <option value="hr">HR</option>
                  <option value="employee">Employee</option>
                </Select>
                {errors.userRole?.type === "required" && (
                  <p role="alert" className="text-sm text-red-600 font-roboto">
                    UserRole is required
                  </p>
                )}
              </div>
            </div>
            {/* password */}
            <div className="sm:flex justify-between items-center gap-6">
              <div className="w-full sm:w-1/2 m-auto mb-4 sm:mb-0 reletive">
                <div className="mb-2 block">
                  <Label htmlFor="password2" value="Your password" />
                </div>
                {/* pass show hide */}
                <div className="relative">
                  <TextInput
                    {...register("userPass", {
                      pattern:
                        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=\[\]{};:'"\\|,.<>?/`~]).{6,}$/,
                      required: true,
                    })}
                    type={!showPass ? "text" : "password"}
                    shadow
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
                {/* error message */}
                <p role="alert" className="text-sm text-red-600 font-roboto">
                  {errors?.userPass?.type === "pattern" &&
                    "Password must be at least 6 characters long, include at least one uppercase letter, and one special character."}
                  {errors?.userPass?.type === "required" &&
                    " Password is required"}
                </p>
              </div>
              {/* repeat-password */}
              <div className="w-full sm:w-1/2 m-auto mx-auto">
                <div className="mb-2 block">
                  <Label htmlFor="" value="Repeat password" />
                </div>
                <div className="relative">
                  <TextInput
                    {...register("repeatPassword", { required: true })}
                    id="repeat-password"
                    type={showRepeatPass ? "password" : "text"}
                    shadow
                  />
                  {/* pass and hide */}
                  {showRepeatPass ? (
                    <FaEye
                      onClick={() => setShowRepeatPass(!showRepeatPass)}
                      className="absolute right-2 top-1/2 bottom-1/2 -translate-y-1/2 "
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setShowRepeatPass(!showRepeatPass)}
                      className="absolute right-2 top-1/2 bottom-1/2 -translate-y-1/2 "
                    />
                  )}
                </div>
                {/* error */}
                {errors.userPass?.type === "required" ||
                  (fromData?.userPass !== fromData?.repeatPassword && (
                    <p
                      role="alert"
                      className="text-sm text-red-600 font-roboto"
                    >
                      Password doesnt match
                    </p>
                  ))}
              </div>
            </div>

            {/* term and condition */}
            <div className="flex items-center gap-2">
              <Checkbox {...register("term", { required: true })} id="agree" />
              <Label htmlFor="agree" className="flex">
                I agree with the&nbsp;
                <Link
                  to={"/"}
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  terms and conditions
                </Link>
              </Label>
            </div>
            <Button type="submit">
              {" "}
              {!loading && (
                <Spinner aria-label="Spinner button example" size="sm" />
              )}
              <span className="pl-3"> Register new account</span>
            </Button>
          </form>
          <p className="text-xl text-black font-normal mt-4">
            Already Registered?{" "}
            <Link className="text-blue-600" to="/login">
              Login
            </Link>
          </p>
          {/* social login */}
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
