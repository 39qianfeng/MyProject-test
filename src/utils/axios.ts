// src/utils/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000, // 请求超时时间
});

export default axiosInstance;
