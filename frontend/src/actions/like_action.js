import * as Like_API_Util from "../util/like_api_util";
export const RECEIVE_DOG_COUNT = "RECEIVE_DOG_COUNT";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const CLEAR_LIKES = "CLEAR_LIKES"

export const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like,
});

export const removeLike = (likeId) => ({
  type: REMOVE_LIKE,
  likeId,
});

export const receiveLikes = (likes) => ({
  type: RECEIVE_LIKES,
  likes,
});

export const receiveDogLikeCount = (count) => ({
  type: RECEIVE_DOG_COUNT,
  count,
});

export const clearLikes = likes => ({
  type: CLEAR_LIKES,
  likes: [],
})

export const createLike = (like) => (dispatch) =>
  Like_API_Util.createLike(like).then((like) => dispatch(receiveLike(like)));

export const fetchDogLikeCount = (count) => (dispatch) =>
  Like_API_Util.fetchDogLikeCount(count).then((count) =>
    dispatch(receiveDogLikeCount(count))
  );

export const deleteLike = (likeId) => (dispatch) =>
  Like_API_Util.deleteLike(likeId).then(() => dispatch(removeLike(likeId)));

export const fetchDogLikes = (likes) => (dispatch) =>
  Like_API_Util.fetchDogLikes(likes).then((likes) =>
    dispatch(receiveLikes(likes))
  );

export const fetchUserLikes = (userId) => (dispatch) =>
  Like_API_Util.fetchUserLikes(userId).then((likes) =>
    dispatch(receiveLikes(likes))
  );
