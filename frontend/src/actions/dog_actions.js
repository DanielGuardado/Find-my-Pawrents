import * as DogAPIUtil from "../util/dog_api_util";

export const RECEIVE_DOGS = "RECEIVE_DOGS";
export const RECEIVE_DOG = "RECEIVE_DOG";
export const REMOVE_DOG = "REMOVE_DOG";

export const receiveDogs = (dogs) => ({
  type: RECEIVE_DOGS,
  dogs,
});

export const receiveDog = (dog) => ({
  type: RECEIVE_DOG,
  dog,
});

export const removeDog = (dogId) => ({
  type: REMOVE_DOG,
  dogId,
});

export const fetchDogs = () => (dispatch) =>
  DogAPIUtil.fetchDogs().then((dogs) => dispatch(receiveDogs(dogs)));

export const fetchDog = (dogId) => (dispatch) =>
  DogAPIUtil.fetchDog(dogId).then((dog) => dispatch(receiveDog(dog)));

export const createDog = (dog) => (dispatch) =>
  DogAPIUtil.createDog(dog).then((dog) => dispatch(receiveDog(dog)));

export const updateDog = (dog) => (dispatch) =>
  DogAPIUtil.updateDog(dog).then((dog) => dispatch(receiveDog(dog)));

export const deleteDog = (dogId) => (dispatch) =>
  DogAPIUtil.deleteDog(dogId).then(() => dispatch(removeDog(dogId)));
