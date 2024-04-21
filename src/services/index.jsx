import axios from "axios";

export const bookAPI = axios.create({ baseURL: "http://localhost:3001" });
