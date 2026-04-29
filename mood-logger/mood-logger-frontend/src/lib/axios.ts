import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:8080", // or process.env.REACT_APP_API_URL for CRA
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
