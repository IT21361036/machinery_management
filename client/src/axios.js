import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8800/api/",
  timeout: 1000,
});

export default axiosInstance;
