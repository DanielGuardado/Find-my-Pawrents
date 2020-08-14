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

  update(change) {
    const { appointment } = this.props;    
    this.setState({appt_status: change})
    debugger
    let appointment1 = {
      appt_time: appointment.appt_time,
      appt_date: appointment.appt_date,
      phone_number: appointment.phone_number,
      comments: appointment.comments,
      appt_status: this.state.appt_status,
      shelter_id: appointment.shelter_id,
      dog_id: appointment.dog_id,
      image: appointment.image,
      dog_name: appointment.dog_nam
    }
    debugger
    this.props.updateAppointment(appointment1)
  }

  AppointmentRender() {
    const { appointment } = this.props;
    return (
          <tr className="tablevalues">
            <td>{appointment.dog_name}</td>
            <td>{appointment.appt_date}</td>
            <td>{appointment.appt_time}</td>
            <td>{appointment.phone_number}</td>
            <td>{appointment.comments}</td>
            <td>{appointment.appt_status}</td>
            <div className="tablebuttons">
            <button id="btn-approve" className="appt-button" onClick={() => this.update("Approve") }>Approve</button>
          <button id="btn-disapprove" className="appt-button" onClick={() => this.update("Disapprove")}>Disapprove</button>
            </div> 
          </tr>

    );
  }

  render() {
    return <div className="">{this.AppointmentRender()}</div>;
  }
}

export default AppointmentIndexItem;
