import React from "react";
import LikesIndexItem from "./likes_item";
import NavBar from "./../navBar/navBar_container";
import "./likes.scss";

class LikesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserLikes(this.props.currentUser.id);
  }
  componentWillMount() {
    this.props.fetchDogs();
  }

  likesShow() {
    if (typeof this.props.likes === "undefined") {
      return null;
    }
    let dogNames = [];
    this.props.dogs.forEach((el) => dogNames.push(el.name));

    const likes = this.props.likes.map((like, idx) => {
      // let dog = this.props.fetchDog(appointment.dog_id)
      if (dogNames.includes(like.dog_name)) {
        return <LikesIndexItem key={idx} like={like} />;
      }
    });

    return <div className="dog-like-page-list-container">{likes}</div>;
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1 id="all-appts-title">Here are all your likes</h1>
        <div className="dog-like-page-main-container">{this.likesShow()}</div>
      </div>
    );
  }
}
export default LikesIndex;
