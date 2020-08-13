import { RECEIVE_DOGS, RECEIVE_DOG, REMOVE_DOG } from "../actions/dog_actions";

const dogReducer = (state = {}, action) => {
  Object.freeze(state);
  let copy = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_DOGS:
      let obj = {};
      action.dogs.data.forEach((dog) => {
        obj[dog._id] = dog;
        // Object.assign(obj, { [dog._id]: dog });
      });
      return obj;
    case RECEIVE_DOG:
      return Object.assign(
        {},
        {
          [action.dog.data._id]: action.dog.data,
        }
      );
    case REMOVE_DOG:
      delete copy[action.dogId];
      return copy;
    default:
      return state;
  }
};
//add removedog
export default dogReducer;
