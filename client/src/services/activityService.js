import axios from "axios";

const API = "https://devsync-server-zi13.onrender.com/api/activities";

export const getActivities = async () => {
  const res = await axios.get(API);
  return res.data;
};