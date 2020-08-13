import React from "react";
import { Link } from "react-router-dom";


class AppointmentIndexItem extends React.Component {
    constructor(props) {
        super(props);
   
    }



    AppointmentRender() {
        return (
                <h1>Hi from Appointment Index Item</h1>
        );
    }

    render() {
        return <div className="">{this.AppointmentRender()}</div>;
    }
}

export default AppointmentIndexItem;
