import React from "react";
import AppointmentIndexItem from "./appointment_index_item_container";
import NavBar from "./../navBar/navBar_container";
import "./appointment.scss";

class AppointmentIndex extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchAppointments(this.props.shelterId);
    }

    appointmentShow() {
        debugger

        if (typeof this.props.appointments === 'undefined'){
            return null;
        }
        debugger


        const appointments = this.props.appointments.map((appointment, idx) => (
            // let dog = this.props.fetchDog(appointment.dog_id)

            <AppointmentIndexItem key={idx} 
                                appointment={appointment} 
                                // fetchDog={this.props.fetchDog}
                                // dog={this.props.dog}
                                />
        ));
        debugger

        return <div className="dog-index-page-list-container">{appointments}</div>;
    }

    render() {
        debugger
        return (
            <div>
                <NavBar />
                <h1 id='all-appts-title'>Here are all your appointments</h1>
                <div className="">{this.appointmentShow()}</div>
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