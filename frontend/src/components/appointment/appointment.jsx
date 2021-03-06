import React from "react";
import AppointmentIndexItem from "./appointment_Index_Item";
import NavBar from "./../navBar/navBar_container";
import "./appointment.scss";

class AppointmentIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAppointments(this.props.shelterId);
  }

  componentWillMount() {
    this.props.fetchDogs();
  }

  appointmentShow() {
    if (typeof this.props.appointments === "undefined") {
      return null;
    }
    let dogNames = [];
    this.props.dogs.forEach((el) => dogNames.push(el.name));
    const appointments = this.props.appointments.map((appointment, idx) => {
      // let dog = this.props.fetchDog(appointment.dog_id)
      if (dogNames.includes(appointment.dog_name)) {
        return (
          <AppointmentIndexItem
            key={idx}
            appointment={appointment}
            updateAppointment={this.props.updateAppointment}
            dogs={this.props.dogs}
          />
        );
      }
    });

    return <div>{appointments}</div>;
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="appointments-page-list-container">
          <h1 id="all-appts-title1">Here are all your appointments!</h1>
          <table className="appttable">
            <tr className="tableheaders">
              <th>Name</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th>Phone Number</th>
              <th className="comments">Comments</th>
              <th>Appointment Status</th>
              <th>Approved?</th>
            </tr>
            {this.appointmentShow()}
          </table>
        </div>
      </div>
    );
  }
}
export default AppointmentIndex;

// appt_date: "2020-08-13"
// appt_status: "Pending Approval"
// appt_time: "12:13"
// comments: "b"
// dog_id: "5f355afa1d8457742e3ea85b"
// phone_number: "631-123-1232"
