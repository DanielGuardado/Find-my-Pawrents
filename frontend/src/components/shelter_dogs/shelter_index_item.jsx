import React from "react";
import { Link } from "react-router-dom";
class MyDogsIndex extends React.Component {
  dogDelete() {
    return (
      <button
        className="shelter-dog-page-delete-button"
        onClick={() => this.props.deleteDog(this.props.dog._id)}
      >
        Remove Dog
      </button>
    );
  }

  render() {
    const { dog } = this.props;
    return (
      <ul>
        <div id="dog-index-page-card-container">
          <Link to={`/dogs/${dog._id}`}>
            <div id="dog-index-page-image-container">
              <img id="dog-index-page-image" src={dog.image} alt="1" />
            </div>
            <div className="dog-index-page-list-content-container">
              <li>
                <span>Name: </span> {dog.name}
              </li>
              <li>
                <span>Age: </span>
                {dog.age}
              </li>
              <li>
                <span>Breed: </span>
                {dog.breed}
              </li>
              {/* <li>{dog.gender}</li> */}
              {/* <li>{dog.strengths}</li> */}
              <li>
                <span>Status: </span>
                {dog.adoption_status}
              </li>
              {/* <li>{dog.description}</li> */}
              <li>
                <span>Listed Date: </span>
                {dog.date}
              </li>
            </div>
          </Link>
          <div className="shelter-dog-page-delete-container">
          {this.dogDelete()}
          </div>
        </div>
      </ul>
    );
  }
}
export default MyDogsIndex;
