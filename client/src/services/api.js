import axios from "axios";

const api = axios.create({
baseURL: "https://devsync-server-zi13.onrender.com/api",
});

export default api;