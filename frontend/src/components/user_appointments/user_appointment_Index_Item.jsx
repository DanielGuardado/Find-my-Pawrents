import React from "react";
import { Link } from "react-router-dom";

class UserAppointmentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStatus: false,
      appt_time: "",
      appt_date: "",
      comments: "",
      phone_number: "",
      appt_status: "Pending Approval",
      // shelter_id: "",
      // dog_id: "",
    };
  }

  AppointmentRender() {
    const { appointment } = this.props;
    return (
      <div>
        <h1>{appointment.dog_name}</h1>
        <h1>{appointment.appt_date}</h1>
        <h1>{appointment.appt_time}</h1>
        <h1>{appointment.appt_status}</h1>
        <h1>{appointment.phone_number}</h1>
        <h1>{appointment.comments}</h1>
        <img style={{ width: "500px" }} src={appointment.image} alt="" />
      </div>
    );
  }

  render() {
    return <div className="">{this.AppointmentRender()}</div>;
  }
}

export default UserAppointmentIndexItem;
