import { connect } from "react-redux";
import { fetchDog } from "../../actions/dog_actions";
import DogShow from "./dog_show";

const mapStateToProps = (state, ownProps) => {
  return {
    dog: state.dogs,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDog: (dogId) => dispatch(fetchDog(dogId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DogShow);
