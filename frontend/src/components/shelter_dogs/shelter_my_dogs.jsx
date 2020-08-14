import React from "react";
import NavBar from "./../navBar/navBar_container";
import MyDogIndexItem from "./shelter_index_item";
import "./shelter_my_dogs_index.scss";
import { Link } from "react-router-dom";
import ShelterBackgroundPic from "./shelter-dog-background.jpg";

class MyDogsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchShelterDogs(this.props.currentUser.id);
  }

  dogShow() {
    const dog = this.props.dogs.map((dog, idx) => (
      <MyDogIndexItem key={idx} dog={dog} deleteDog={this.props.deleteDog} />
    ));
    return <div className="dog-index-page-list-container">{dog}</div>;
  }

  render() {
    if (this.props.dogs.length === 0) {
      return (
        <div className="no-dogs-page">
          <NavBar />
          <div className="shelter-my-dogs-background">
            <img src={ShelterBackgroundPic} />
          <div className="no-dogs-page-container">
            <div className="no-dogs">
              <p>You have no dogs!</p>
            </div>
            <div className="add-dog-here-button">
              <Link to="/new_dog" />
              <button className="add-dog-here">Add Dogs Here</button>
            </div>
          </div>
          </div>

        </div>
      );
    } else {
      return (
        <div>
          <NavBar />
          <div className="dog-index-page-main-container">{this.dogShow()}</div>
        </div>
      );
    }
  }
}
export default MyDogsIndex;
