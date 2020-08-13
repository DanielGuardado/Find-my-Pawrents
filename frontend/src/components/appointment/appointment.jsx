import React from "react";
import AppointmentIndexItem from "./appointment_Index_Item";
import NavBar from "./../navBar/navBar_container";
// import "./dog_index.scss";

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
            <AppointmentIndexItem key={idx} appointment={appointment}/>
        ));
        return <div className="dog-index-page-list-container">{appointments}</div>;
    }

    render() {
        debugger
        return (
            <div>
                <NavBar />
                <div className="dog-index-page-main-container">{this.appointmentShow()}</div>
            </div>
        );
    }
}
export default AppointmentIndex;
