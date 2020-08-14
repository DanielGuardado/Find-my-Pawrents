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
        <div id="dog-index-page-card-container">
          <Link to={`/dogs/${dog._id}`}>
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
            </div>
          </Link>
          <div id="icon-container">
            <button className="index-like-btn">
              <img className="like-button" src={likeicon} />
            </button>
            <button className="comment-btn">
              <img className="comment-button" src={commenticon} />
            </button>
          </div>
        </div>
      </ul>
    );
  }

  render() {
    return <div className="">{this.dogRender()}</div>;
  }
}

export default DogIndexItem;
