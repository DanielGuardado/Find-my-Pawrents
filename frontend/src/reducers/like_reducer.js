import { RECEIVE_DOG_COUNT, RECEIVE_LIKE } from "../actions/like_action";

const likeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DOG_COUNT:
      return action.count;
    case RECEIVE_LIKE:
      return action.like.data;
    default:
      return state;
  }
};

export default likeReducer;
