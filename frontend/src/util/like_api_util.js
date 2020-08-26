import axios from "axios";

export const createLike = (like) => axios.post("/api/likes", like);
export const fetchDogLikeCount = (dogId) =>
  axios.get(`/api/likes/dog/${dogId}/count`);
export const fetchDogLikes = (dogId) => axios.get(`/api/likes/dog/${dogId}`);
export const fetchUserLikes = (userId) =>
  axios.get(`/api/likes/user/${userId}`);
export const deleteLike = (likedId) => axios.delete(`/api/likes/${likedId}`);
