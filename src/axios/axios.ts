import axios from "axios";

const key = import.meta.env.VITE_API_KEY;

export const axiosInstance = axios.create({
  baseURL: `https://geo.ipify.org/api/v2/country,city?apiKey=${key}`,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
