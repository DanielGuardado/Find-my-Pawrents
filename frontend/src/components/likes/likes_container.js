import { connect } from "react-redux";
import { fetchUserLikes } from "../../actions/like_action";
import LikesIndex from "./likes";

const mapStateToProps = (state) => {
  debugger;
  return {
    currentUser: state.session.user,
    likes: Object.values(state.likes),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUserLikes: (userId) => dispatch(fetchUserLikes(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikesIndex);
