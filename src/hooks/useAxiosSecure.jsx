import axios from "axios";

const axiosSecure = axios.create({
  baseUrl: "http://localhost:5173",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
