import React from "react";
import "./dog_show.scss";
import NavBar from "./../navBar/navBar_container";
import likeicon from "./like-icon.png";
class DogShow extends React.Component {
  constructor(props) {
    super(props);
    this.newData = React.createRef();
    this.state = {
      formStatus: false,
      submitStatus: false,
      appt_time: "",
      appt_date: "",
      comments: "",
      phone_number: "",
      appt_status: "Pending Approval",
      shelter_id: "",
      dog_id: "",
      // shelter_id: this.props.dog.shelter_id,
      // dog_id: this.props.dog.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.newData = this.newData.bind(this)
  }

  scrollTop = () => {
    window.scrollTo({
      top: 1300,
      behavior: "smooth",
    });
  };

  date() {
    const { dog } = this.props;
    if (dog.timestamps) {
      let day = dog.timestamps.slice(8, 10);
      let month = dog.timestamps.slice(5, 7);
      let year = dog.timestamps.slice(0, 4);
      let date = new Date(year, month, day);
      return <div>{date.toDateString()}</div>;
    }
  }
  handleLike = () => {
    let like = {
      dog_id: this.props.dog._id,
      user_id: this.props.currentUser.id,
      dog_name: this.props.dog.name,
      dog_image: this.props.dog.image,
    };
    this.props.createLike(like);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.formStatus !== this.state.formStatus) {
      this.scrollTop();
    }
  }

  componentDidMount() {
    this.props.fetchDog(this.props.id);
    this.props.fetchDogLikes(this.props.id);
    if (this.props.dog) {
      this.setState({ shelter_id: this.props.dog.shelter_id });
      this.setState({ dog_id: this.props.dog.dog_id });
    }
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  scrollBottom() {
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
  }

  handleForm = (e) => {
    this.setState({ formStatus: !this.state.formStatus });
  };
  handleSubmitMessage = (e) => {
    this.setState({ submitStatus: true });
  };

  submit() {
    if (this.state.submitStatus) {
      return <div>Your application has been succesfully submited!</div>;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let appointment = {
      appt_time: this.state.appt_time,
      appt_date: this.state.appt_date,
      comments: this.state.comments,
      phone_number: this.state.phone_number,
      appt_status: "Pending Approval",
      shelter_id: this.props.dog.shelter_id,
      dog_id: this.props.dog._id,
      dog_name: this.props.dog.name,
      image: this.props.dog.image,
    };
    this.props
      .createAppointment(appointment)
      .then(() => this.handleForm())
      .then(() => this.handleSubmitMessage())
      .catch((err) => {
        this.props.receiveErrors(err.response.data);
      });
  }

  dogLike() {
    if (this.props.dog && this.props.currentUser.id) {
      return (
        <button className="like-btn" onClick={this.handleLike}>
          <img className="like-button" src={likeicon} alt="" />
        </button>
      );
    }
  }

  dogDelete() {
    if (
      this.props.dog &&
      this.props.currentUser.id === this.props.dog.shelter_id
    ) {
      return (
        <button
          className="appt-submit"
          onClick={() =>
            this.props
              .deleteDog(this.props.dog._id)
              .then(() => this.props.history.push("/dogs"))
          }
        >
          Remove Dog
        </button>
      );
    }
  }

  dogRender() {
    const { dog } = this.props;
    if (!dog) {
      return;
    } else {
      return (
        <div className="dog-show-container">
          <div className="dog-show-sub-container">
            <div className="dog-show-info">
              <img
                className="dog-image"
                src={dog.image}
                alt="1"
                style={{ width: "500px" }}
              />
              <div className="dog-show-info-list">
                <div className="dog-name">{dog.name}</div>
                <div className="dog-show-infos">
                  <div className="dog-age">Age: {dog.age}</div>
                  <div className="dog-breed">Breed: {dog.breed}</div>
                  <div className="dog-gender">Gender: {dog.gender}</div>
                  <div className="dog-strengths">
                    Strengths: {dog.strengths}
                  </div>
                  <div className="dog-status">
                    Status: {dog.adoption_status}
                  </div>
                  <div className="dog-description">
                    <div className="dog-about">About:</div>
                    <div className="description">{dog.description}</div>
                  </div>
                  <div className="dog-date">Listed Date: {this.date()}</div>
                  {this.renderCount()}
                  {this.dogDelete()}
                </div>
              </div>
            </div>
            <div>{this.noLogMes()}</div>
            <div>{this.apptBtn()}</div>
            <div>{this.submit()}</div>
          </div>
        </div>
      );
    }
  }

  renderCount() {
    if (this.props.count) {
      return (
        <div className="dog-date">Total Likes: {this.props.count.data}</div>
      );
    }
  }

  appForm() {
    if (this.state.formStatus && !this.state.submitStatus) {
      return (
        <div ref={this.newData} className="appt-form-container">
          <div className="appt-form-box">
            <form className="appt-form" onSubmit={this.handleSubmit}>
              <h1 className="appt-header">Appointment</h1>
              <div className="appt-fill-in">
                <div className="choose-time">
                  <label htmlFor="time">Choose a time: </label>
                  <input
                    onChange={this.update("appt_time")}
                    type="time"
                    name="time"
                    min="9:00"
                    max="18:00"
                    required
                  />
                  <div className="shelter-hrs">
                    <small>*Shelter hours: Mon - Sun: 9AM - 6PM*</small>
                  </div>
                </div>
                <div className="choose-date">
                  <label htmlFor="cal">Choose a date: </label>
                  <input
                    onChange={this.update("appt_date")}
                    type="date"
                    name="cal"
                    required
                  />
                </div>
                <div className="phone-number">
                  <label htmlFor="phone">Phone number: </label>
                  <input
                    onChange={this.update("phone_number")}
                    type="tel"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                  />
                  <small className="phone-format">
                    {" "}
                    (format: 123-456-7890)
                  </small>
                </div>
                <div className="questions-comments">
                  <label htmlFor="comments">Questions or comments:</label>
                  {/* <div className="comments">
                  <textarea name="comments" cols="30" rows="10"></textarea>
                </div> */}
                  <div className="comments">
                    <textarea
                      className = "comments-questions"
                      onChange={this.update("comments")}
                      name="comments"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <input
                  className="appt-submit"
                  type="submit"
                  value="Make an Appointment"
                ></input>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }

  noLogMes() {
    if (!this.props.currentUser.id) {
      return (
        <div>
          <span
            className="log-color"
            onClick={() => this.props.openModal("login")}
          >
            Log in
          </span>{" "}
          to schedule an appointment and like!
        </div>
      );
    }
  }

  apptBtn() {
    if (
      !this.state.submitStatus &&
      this.props.dog.shelter_id !== this.props.currentUser.id &&
      this.props.currentUser.id
    ) {
      return (
        <div>
          {this.dogLike()}

          <button className="appt-btn" onClick={() => this.handleForm()}>
            ⇊ Schedule now ⇊
          </button>
        </div>
      );
    } else {
      (
        this.submit()
      );
    }
  }

  // render() {
  //   if(this.props.loggedIn) {
  //   return (
  //     <div className="">
  //       {this.dogRender()}
  //       {this.appForm()}
  //     </div>
  //   )} else {
  //     return (
  //       <div className="">
  //         {this.dogRender()}
  //       </div>
  //     );
  //   };
  // }

  render() {
    return (
      <div className="">
        <NavBar />
        {this.dogRender()}
        {this.appForm()}
      </div>
    );
  }
}

export default DogShow;
