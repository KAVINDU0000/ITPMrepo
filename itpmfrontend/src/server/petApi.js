// src/server/petApi.js
import axios from "axios";

// If your backend runs on a different host/port, adjust the base URL
const API_BASE = "http://localhost:3001/api/pets";

export const createPet = (petData) => axios.post(API_BASE, petData);
export const updatePet = (id, petData) => axios.put(`${API_BASE}/${id}`, petData);
export const deletePet = (id) => axios.delete(`${API_BASE}/${id}`);
export const getPetsByEmail = (email) => axios.get(`${API_BASE}/by-email/${email}`);
