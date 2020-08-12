import React from "react";
class DogShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStatus: false,
      appt_time: "",
      appt_date: "",
      comments: "",
      phone_number: "",
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
        <ul className="">
          <li>{dog.name}</li>
          <li>{dog.age}</li>
          <li>{dog.adoption_status}</li>
          <li>{dog.breed}</li>
          <li>{dog.strengths}</li>
          <li>{dog.gender}</li>
          <li>{dog.description}</li>
          <li>{dog.date}</li>
          <img src={dog.image} alt="1" style={{ width: "500px" }} />
          {this.apptBtn()}
        </ul>
      );
    }
  }
  appForm() {
    if (this.state.formStatus) {
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="time">Choose a time for your appointment:</label>
              <input
                onChange={this.update("appt_time")}
                type="time"
                name="time"
                min="9:00"
                step="600"
                max="18:00"
                required
              />
              <small>Shelter hours</small>
            </div>
            <div>
              <label htmlFor="cal">Pick a date</label>
              <input
                onChange={this.update("appt_date")}
                type="date"
                name="cal"
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Give us that PHONE</label>
              <input
                onChange={this.update("phone_number")}
                type="tel"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
              <small>Format: 123-456-7890</small>
            </div>
            <div>
              <label htmlFor="comments">Questions or comments</label>
              <textarea
                onChange={this.update("comments")}
                name="comments"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button type="submit">Schedule Appt</button>
          </form>
        </>
      );
    }
  }
  apptBtn() {
    return (
      <>
        <button
          onClick={() => this.setState({ formStatus: !this.state.formStatus })}
        >
          Schedule now!
        </button>
      </>
    );
  }

  render() {
    return (
      <div className="">
        {this.dogRender()}
        {this.appForm()}
      </div>
    );
  }
}

export default DogShow;
