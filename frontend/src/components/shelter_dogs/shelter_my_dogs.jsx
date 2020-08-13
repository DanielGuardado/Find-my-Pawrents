import React from "react";
import NavBar from "./../navBar/navBar_container";
import MyDogIndexItem from "./shelter_index_item";
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
        <>
          <NavBar />
          <div style={{ padding: "400px" }}>You have no dogs!</div>
        </>
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
