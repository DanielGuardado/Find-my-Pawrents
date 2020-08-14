import React from "react";
import LikesIndexItem from "./likes_item";
import NavBar from "./../navBar/navBar_container";

class LikesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserLikes(this.props.currentUser.id);
  }

  likesShow() {
    if (typeof this.props.likes === "undefined") {
      return null;
    }

    const likes = this.props.likes.map((like, idx) => (
      // let dog = this.props.fetchDog(appointment.dog_id)

      <LikesIndexItem key={idx} like={like} />
    ));

    return <div className="dog-index-page-list-container">{likes}</div>;
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1 id="all-appts-title">Here are all your likes</h1>
        <div className="">{this.likesShow()}</div>
      </div>
    );
  }
}
export default LikesIndex;
