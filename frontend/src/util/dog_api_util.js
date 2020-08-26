import axios from "axios";

export const fetchDogs = () => axios.get("/api/dogs");

export const fetchDog = (dogId) => axios.get(`/api/dogs/${dogId}`);

export const createDog = (dog) => axios.post("/api/dogs", dog);

export const updateDog = (dog) =>
  axios.post(`/api/dogs/${dog._id}/update`, dog);

export const deleteDog = (dogId) => axios.delete(`/api/dogs/${dogId}`);

export const fetchShelterDogs = (shelterId) =>
  axios.get(`/api/dogs/user/${shelterId}`);
