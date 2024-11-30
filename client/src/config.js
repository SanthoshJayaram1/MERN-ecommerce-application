import axios from "axios";

axios.defaults.withCredentials = true; 
export const axiosInstance = axios.create({
    // baseURL:"https://ecomshoppify.onrender.com/",
    // baseURL: "http://localhost:5000/",
    baseURL:"http://ec2-65-1-95-35.ap-south-1.compute.amazonaws.com/"
});
