import React from "react";
import { Link } from "react-router-dom";
class MyDogsIndex extends React.Component {
  dogDelete() {
    return (
      <button onClick={() => this.props.deleteDog(this.props.dog._id)}>
        Remove Dog
      </button>
    );
  }

  render() {
    const { dog } = this.props;
    return (
      <ul>
        <img id="dog-index-page-image" src={dog.image} alt="1" />
        <Link to={`/dogs/${dog._id}`}>
          <li>{dog.name}</li>
        </Link>
        <li>{dog.age}</li>
        <li>{dog.breed}</li>
        {/* <li>{dog.gender}</li> */}
        {/* <li>{dog.strengths}</li> */}
        <li>{dog.adoption_status}</li>
        {/* <li>{dog.description}</li> */}
        <li>{dog.date}</li>
        {this.dogDelete()}
      </ul>
    );
  }
}
export default MyDogsIndex;
