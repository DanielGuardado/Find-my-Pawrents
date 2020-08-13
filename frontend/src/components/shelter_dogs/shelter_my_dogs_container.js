import { connect } from "react-redux";
import { fetchShelterDogs, deleteDog } from "../../actions/dog_actions";
import MyDogsIndex from "./shelter_my_dogs";

const mapStateToProps = (state) => {
  debugger;
  return {
    dogs: Object.values(state.dogs),
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchShelterDogs: (shelterId) => dispatch(fetchShelterDogs(shelterId)),
  deleteDog: (dogId) => dispatch(deleteDog(dogId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyDogsIndex);
