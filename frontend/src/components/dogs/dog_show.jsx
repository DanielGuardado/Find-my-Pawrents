import React from "react";
import "./dog_show.scss";
import NavBar from "./../navBar/navBar_container";


class DogShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStatus: false,
      appt_time: "",
      appt_date: "",
      comments: "",
      phone_number: "",
      appt_status: "Pending Approval",
      shelter_id: this.props.dog.shelter_id,
      dog_id: this.props.dog.id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchDog(this.props.match.params.dogId);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
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
    };
    this.props.createAppointment(appointment)
      .catch((err) => {
        this.props.receiveErrors(err.response.data);
      });
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
                  <div className="dog-date">Listed Date: {dog.date}</div>
                </div>
              </div>
            </div>
            <div>{this.apptBtn()}</div>
          </div>
        </div>
      );
    }
  }
  appForm() {
    if (this.state.formStatus) {
      return (
        <div className="appt-form-container">
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
                  <small className="phone-format"> (format: 123-456-7890)</small>
                </div>
                <div className="questions-comments">
                  <label htmlFor="comments">Questions or comments:</label>
                  {/* <div className="comments">
                  <textarea name="comments" cols="30" rows="10"></textarea>
                </div> */}
                  <div className="comments">
                    <textarea
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
  apptBtn() {
    return (
      <>
        <button
          className="appt-btn"
          onClick={() => this.setState({ formStatus: !this.state.formStatus })}
        >
          ⇊ Schedule now ⇊
        </button>
      </>
    );
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
    )
  }
}

export default DogShow;
