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
      
        }};

    componentDidMount() {
        debugger
        this.props.fetchDog(this.props.appointment.dog_id);
        // if (this.props.dog) {
        //     this.setState({ shelter_id: this.props.dog.shelter_id });
        //     this.setState({ dog_id: this.props.dog.dog_id });
        // }
    }


    AppointmentRender() {
        debugger

        if (typeof this.props.dog === 'undefined') {
            return null;
        }

        const {appointment,dog} = this.props

        return (
            <div>
                <h1>{appointment.appt_date}</h1>
                <div className="dog-age">Age: {dog.age}</div>
            </div >
        );
    }

    render() {
        return <div className="">{this.AppointmentRender()}</div>;
    }
}

export default AppointmentIndexItem;
