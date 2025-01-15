import React from 'react';
import axios from 'axios'

export const axiosSecure = axios.create({
   baseURL:`${import.meta.env.VITE_base_url}`,
   withCredentials:true,

})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;