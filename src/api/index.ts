import axios from "axios";

const createAxiosInstance = (token?: string) => {
  const instance = axios.create({
    baseURL: "https://192.168.1.3:5000/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return instance;
};

export default createAxiosInstance;
