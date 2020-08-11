import React from "react";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      shelter_status: "",
      address: "",
      shelter_name: "",
      errors: {},
      trigger: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     then(this.props.history.push("/"));
  //   }
  // }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      password: this.state.password,
      shelter_status: this.state.shelter_status,
      shelter_name: this.state.shelter_name,
      address: this.state.address,
    };

    this.props
      .signup(user, this.props.history)
      .then(this.props.history.push("/login"))
      .then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  triggerForm() {
    if (this.state.trigger) {
      return (
        <>
          <div className="">
            <div className="">Shelter Name</div>
            <input
              className="input-boxes"
              type="text"
              value={this.state.shelter_name}
              onChange={this.update("shelter_name")}
              placeholder="Shelter Name"
            />
          </div>
          <div className="">
            <div className="input-titles">Address</div>
            <input
              className="input-boxes"
              type="text"
              value={this.state.address}
              onChange={this.update("address")}
              placeholder="Address"
            />
          </div>
        </>
      );
    }
  }

  render() {
    return (
      <div className="signup-form-container">
        <form className="form-box" onSubmit={this.handleSubmit}>
          <div className="signup-input-container">
            <div className="signup-form-top-level">
              <h2 className="signup-header">Sign Up</h2>
              <div>{this.props.otherForm}</div>
            </div>
            <div className="signup-form">
              <div className="email-input-box">
                <div className="input-titles">Email</div>
                <input
                  className="input-boxes"
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
              </div>
              <br />
              <div className="first-name-input-box">
                <div className="input-titles">First Name</div>
                <input
                  className="input-boxes"
                  type="text"
                  value={this.state.first_name}
                  onChange={this.update("first_name")}
                  placeholder="First Name"
                />
              </div>
              <br />
              <div className="last-name-input-box">
                <div className="input-titles">Last Name</div>
                <input
                  className="input-boxes"
                  type="text"
                  value={this.state.last_name}
                  onChange={this.update("last_name")}
                  placeholder="Last Name"
                />
              </div>
              <br />
              <div className="password-input-box"></div>
              <div className="input-titles">Password</div>
              <input
                className="input-boxes"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <div className=""></div>
              <div className="">Are you a shelter?</div>
              Yes
              <input
                className=""
                name="status"
                type="radio"
                value="SHELTER"
                onChange={this.update("shelter_status")}
                onClick={() => this.setState({ trigger: true })}
              />
              No
              <input
                className=""
                name="status"
                type="radio"
                value="USER"
                onChange={this.update("shelter_status")}
                onClick={() => this.setState({ trigger: false })}
              />
              <br />
              {this.triggerForm()}
              <input className="signup-submit" type="submit" value="Sign up!" />
              <div className="render-errors">{this.renderErrors()}</div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
