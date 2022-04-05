import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
});

export default api;

export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API?.toString() || "";
