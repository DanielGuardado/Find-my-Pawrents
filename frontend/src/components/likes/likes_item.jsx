import React from "react";
import { Link } from "react-router-dom";

class LikesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  likesRender() {
    const { like } = this.props;
    return (
      <ul>
        <div id="dog-like-page-card-container">
          <Link id='test-link' to={`/dogs/${like.dog_id}`}>
            <div id="dog-like-page-image-container">
              <img id="dog-like-page-image"  src={like.dog_image} alt="" />
              {/* <img id="imageheart"  src={like.dog_image} alt="" /> */}
            </div>
            <div className="dog-like-page-list-content-container">
                <li>
                  <h1>{like.dog_name}</h1>
                </li>
            </div>
          </Link>
        </div>
      </ul>
    );
  }

  render() {
    return <div className="">{this.likesRender()}</div>;
  }
}

export default LikesIndexItem;
