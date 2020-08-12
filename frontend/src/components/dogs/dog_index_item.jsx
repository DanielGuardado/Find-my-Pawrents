import React from "react";
import { Link } from "react-router-dom";

class DogIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  dogRender() {
    const { dog } = this.props;
    return (
      <ul className="">
        <Link to={`/dogs/${dog._id}`}>
          <li>{dog.name}</li>
        </Link>
        <li>{dog.age}</li>
        <li>{dog.adoption_status}</li>
        <li>{dog.breed}</li>
        <li>{dog.strengths}</li>
        <li>{dog.gender}</li>
        <li>{dog.description}</li>
        <li>{dog.date}</li>
        <img src={dog.image} alt="1" style={{ width: "500px" }} />
      </ul>
    );
  }

  render() {
    return <div className="">{this.dogRender()}</div>;
  }
}

export default DogIndexItem;
