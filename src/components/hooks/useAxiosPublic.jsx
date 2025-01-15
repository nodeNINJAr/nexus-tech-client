import React from 'react';
import axios from 'axios'


const axiosPublic = axios.create({
    baseURL:import.meta.env.VITE_base_url,
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;