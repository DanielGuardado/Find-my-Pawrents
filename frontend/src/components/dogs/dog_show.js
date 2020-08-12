import { connect } from "react-redux";
import { fetchDog } from "../../actions/dog_actions";
import DogIndex from "./dog_index";

const mapStateToProps = (state, ownProps) => {
  return {
    dog: state.dogs[ownProps.match.params.id],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDog: (dogId) => dispatch(fetchDog(dogId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DogShow);
