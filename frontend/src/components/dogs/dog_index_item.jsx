import React from "react";
import { Link } from "react-router-dom";
import likeicon from "./like-icon.png";
import commenticon from "./comment-icon.png";

class DogIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
    };

    this.toogleClass = this.toogleClass.bind(this);
  }

  toogleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  dogRender() {
    const { dog } = this.props;
    return (
      <ul>
        <Link to={`/dogs/${dog._id}`}>
          <div id="dog-index-page-card-container">
            <div id="dog-index-page-image-container">
              <img id="dog-index-page-image" src={dog.image} alt="1" />
            </div>
            <div className="dog-index-page-list-content-container">
              <li>
                <span>Name:</span> {dog.name}
              </li>
              <li>
                <span>Age:</span>
                {dog.age}
              </li>
              <li>
                <span>Status:</span>
                {dog.adoption_status}
              </li>
              <div id="icon-container">
                <img id="icons" src={likeicon} />
                <img id="icons" src={commenticon} />
              </div>
            </div>
          </div>
        </Link>
      </ul>
    );
  }

  render() {
    return <div className="">{this.dogRender()}</div>;
  }
}

export default DogIndexItem;
