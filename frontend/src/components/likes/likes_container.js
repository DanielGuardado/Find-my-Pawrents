import { connect } from "react-redux";
import { fetchUserLikes } from "../../actions/like_action";
import LikesIndex from "./likes";
import { fetchDogs } from "../../actions/dog_actions";
const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    likes: Object.values(state.likes),
    dogs: Object.values(state.dogs),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDogs: () => dispatch(fetchDogs()),
  fetchUserLikes: (userId) => dispatch(fetchUserLikes(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikesIndex);
