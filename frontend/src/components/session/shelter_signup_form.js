import React from "react";
import { withRouter } from "react-router-dom";

class ShelterSignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      shelter_name: "",
      address: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const shelter = Object.assign({}, this.state);
    this.props.signup(shelter, this.props.history);
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

  renderForm() {
    const { shelter_name, email, password, address } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Shelter Name:
            <input
              type="text"
              value={shelter_name}
              onChange={this.update("shelter_name")}
              placeholder="Shelter name"
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={this.update("address")}
              placeholder="Address"
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={this.update("email")}
              placeholder="Email"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <button type="submit">Sign up</button>
          </label>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div>
        {this.renderForm()}
        {this.renderErrors()}
      </div>
    );
  }
}

export default withRouter(ShelterSignupForm);
