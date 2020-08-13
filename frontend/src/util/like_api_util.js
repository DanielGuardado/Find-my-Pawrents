import axios from "axios";

export const createLike = (like) => axios.post("/api/likes", like);
export const fetchDogLikes = (dogId) =>
  axios.get(`/api/likes/dog/${dogId}/count`);
