import React from "react";
import DogIndexItem from "./dog_index_item";
import NavBar from './../navBar/navBar_container'
import './dog_index.scss'

class DogIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDogs();
  }

  dogShow() {
    const dog = this.props.dogs.map((dog, idx) => (
      <DogIndexItem key={idx} dog={dog} />
    ));
    return <div className="">{dog}</div>;
  }

  render() {
    return  (
      <div>
        <NavBar />
        <div className="dog-index-page-main-container">{this.dogShow()}</div>
      </div>
    )
  }
}
export default DogIndex;
