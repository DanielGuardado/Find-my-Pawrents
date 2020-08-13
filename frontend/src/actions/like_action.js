import * as Like_API_Util from "../util/like_api_util";
export const RECEIVE_DOG_COUNT = "RECEIVE_DOG_COUNT";
export const RECEIVE_LIKE = "RECEIVE_LIKE";

export const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like,
});

export const receiveDogLikeCount = (count) => ({
  type: RECEIVE_DOG_COUNT,
  count,
});

export const createLike = (like) => (dispatch) =>
  Like_API_Util.createLike(like).then((like) => dispatch(receiveLike(like)));
export const fetchDogLikes = (count) => (dispatch) =>
  Like_API_Util.fetchDogLikes(count).then((count) =>
    dispatch(receiveDogLikeCount(count))
  );
