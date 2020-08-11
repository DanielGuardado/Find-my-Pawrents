import axios from "axios";

export const fetchDogs = () => axios.get("/api/dogs/");
