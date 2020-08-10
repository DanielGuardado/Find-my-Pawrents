import { connect } from 'react-redux';
import { logout } from './../../actions/session_actions'
import { shelterLogout } from './../../actions/shelter_session_actions'
import NavBar from './navBar'


const msp = (state) => {
    // debugger
    return{
        currentUser: state.userSession.user,
        shelterUser: state.shelterSession.user
    }
}

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    shelterLogout: () => dispatch(shelterLogout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(msp,mdp)(NavBar)