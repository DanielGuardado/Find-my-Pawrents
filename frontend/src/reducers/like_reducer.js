import {
  RECEIVE_DOG_COUNT,
  RECEIVE_LIKE,
  RECEIVE_LIKES,
  REMOVE_LIKE,
  CLEAR_LIKES,
} from "../actions/like_action";

const likeReducer = (state = {}, action) => {
  Object.freeze(state);
  let copy = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_LIKES:
      let obj = {};
      action.likes.data.forEach((like) => {
        obj[like._id] = like;
        // Object.assign(obj, { [dog._id]: dog });
      });
      return obj;
    case RECEIVE_DOG_COUNT:
      return Object.assign({}, state, { ["count"]: action.count });
    case RECEIVE_LIKE:
      return Object.assign({}, state, action.like.data);
    case REMOVE_LIKE:
      delete copy[action.likeId];
      return copy;
    case CLEAR_LIKES:
      return [];  
    default:
      return state;
  }
};

export default likeReducer;
