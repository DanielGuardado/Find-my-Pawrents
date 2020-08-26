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
    debugger
    return (
      <ul>
        <div id="dog-appointment-page-card-container">
            <div id="dog-index-page-image-container">
                <img id="dog-index-page-image" src={appointment.image} alt="" />
            </div>
            <div className="dog-appointment-page-list-content-container">
                <li><span>Name:</span>{appointment.dog_name}</li>
                <li><span>Appointment Date:</span>{appointment.appt_date}</li>
                <li><span>Appointment Time:</span>{appointment.appt_time}</li>
                <li><span>Appointment Status:</span>{appointment.appt_status}</li>
                <li><span>Phone Number:</span>{appointment.phone_number}</li>
                <li><span>Comments:</span>{appointment.comments}</li>
            </div>
          </div>
      </ul>
    );
  }

  render() {
    return <div className="">{this.AppointmentRender()}</div>;
  }
}

export default UserAppointmentIndexItem;
