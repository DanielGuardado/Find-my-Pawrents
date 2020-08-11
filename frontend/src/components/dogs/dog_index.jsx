import React from "react";
import DogIndexItem from "./dog_index_item";

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
    return <div className="">{this.dogShow()}</div>;
  }
}
export default DogIndex;
