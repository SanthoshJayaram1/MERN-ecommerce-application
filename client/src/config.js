import axios from "axios";

axios.defaults.withCredentials = true; 
export const axiosInstance = axios.create({
    // baseURL:"https://ecomshoppify.onrender.com/",
    baseURL:"http://localhost:5000/",
});
