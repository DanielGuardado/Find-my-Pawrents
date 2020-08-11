import { connect } from "react-redux";
import { logout } from "./../../actions/session_actions";
import NavBar from "./navBar";
import { openModal } from "./../../actions/modal_actions";

const msp = (state) => {
  return {
    currentUser: state.session,
  };
};

const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(msp, mdp)(NavBar);
