import React from "react";
import { Link } from "react-router-dom";

class AppointmentIndexItem extends React.Component {
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

  update = (change) => {
    const { appointment } = this.props;

    let appointment1 = {
      id: appointment._id,
      appt_time: appointment.appt_time,
      appt_date: appointment.appt_date,
      phone_number: appointment.phone_number,
      comments: appointment.comments,
      appt_status: change,
      shelter_id: appointment.shelter_id,
      user_id: appointment.user_id,
      dog_id: appointment.dog_id,
      image: appointment.image,
      dog_name: appointment.dog_name,
    };
    debugger
    this.props.updateAppointment(appointment1);
  };

  AppointmentRender() {
    const { appointment } = this.props;
    return (
      <tr className="tablevalues" id={appointment.appt_status}>
        <td>{appointment.dog_name}</td>
        <td>{appointment.appt_date}</td>
        <td>{appointment.appt_time}</td>
        <td>{appointment.phone_number}</td>
        <td className="comments">{appointment.comments}</td>
        <td>{appointment.appt_status}</td>
        {/* {this.availibleDog()} */}
        <div className="tablebuttons">
          <button
            id="btn-approve"
            className="appt-button"
            onClick={() => this.update("Approved")}
          >
            Approve
          </button>
          <button
            id="btn-disapprove"
            className="appt-button"
            onClick={() => this.update("Disapproved")}
          >
            Disapprove
          </button>
        </div>
      </tr>
    );
  }

  render() {
    return <div className="">{this.AppointmentRender()}</div>;
  }
}

export default AppointmentIndexItem;
