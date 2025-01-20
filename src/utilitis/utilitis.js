import axios from "axios"

export const imageUpload= async(imageData)=>{
  const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imagebb_api_key}`,imageData,{headers:{'Content-Type': 'multipart/form-data'}} )
  return data?.data?.display_url
}

//user data save to database
export const userInfoSaveToDb= async(userInfo)=>{
  const {data} = await axios.post(`${import.meta.env.VITE_base_url}/users`,userInfo);
  return data
}


// 
export const fetchUserRoleFromAPI = async (email) => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_base_url}/user/role/${email}`);
    return data; // Ensure the key matches your backend's response
  } catch {
    return null; // Fallback to null or a default role
  }
};