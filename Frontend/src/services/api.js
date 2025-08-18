// src/services/api.js
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Uses your deployed backend
  headers: {
    "Content-Type": "application/json",
  },
});
