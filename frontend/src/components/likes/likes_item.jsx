import React from "react";
import { Link } from "react-router-dom";

class LikesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  likesRender() {
    const { like } = this.props;
    return (
      <div>
        <h1>{like.dog_name}</h1>
        <Link to={`/dogs/${like.dog_id}`}>
          <img style={{ width: "500px" }} src={like.dog_image} alt="" />
        </Link>
      </div>
    );
  }

  render() {
    return <div className="">{this.likesRender()}</div>;
  }
}

export default LikesIndexItem;
