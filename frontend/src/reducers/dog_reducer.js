import { RECEIVE_DOGS, RECEIVE_DOG, REMOVE_DOG } from "../actions/dog_actions";

const dogReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DOGS:
      return action.dogs.data;
    case RECEIVE_DOG:
      return action.dog.data;
    default:
      return state;
  }
};
//add removedog
export default dogReducer;
