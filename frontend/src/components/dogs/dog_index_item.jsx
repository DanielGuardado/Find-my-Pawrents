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
          <li className="dog-item-name">
            <span className="dog-age">
              {dog.name} <span>Age: {dog.age}</span>
            </span>
          </li>
          <Link to={`/dogs/${dog._id}`}>
            <div id="dog-index-page-image-container">
              <img
                className="dog-pad"
                id="dog-index-page-image"
                src={dog.image}
                alt="1"
              />
            </div>
            <div className="dog-index-page-list-content-container list-pad">
              <li className="stat-pad">
                <span>Strenths: {dog.strengths}</span>
                <span className="avail">Status: {dog.adoption_status}</span>
              </li>
              <div id="icon-container">
                <img id="like-icon" src={likeicon} />
                <img id="comment-icon" src={commenticon} />
              </div>
            </div>
          </Link>
        </div>
      </ul>
    );
  }

  render() {
    return <div className="">{this.dogRender()}</div>;
  }
}

export default DogIndexItem;
