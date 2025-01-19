import React, { useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

//
const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_base_url}`,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const authInfo = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    //
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
       async(error) => {
        if (error.status === 401 || error.status === 403) {
         await authInfo?.userSignOut();
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
