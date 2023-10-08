import axios from "axios";

axios.defaults.withCredentials = true; 
export const axiosInstance = axios.create({
    baseURL:"http://127.0.0.1:5000/",
});
