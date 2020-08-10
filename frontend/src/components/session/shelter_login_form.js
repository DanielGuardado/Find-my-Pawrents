import React from "react";
import { withRouter } from "react-router-dom";

class ShelterLoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentShelter === true) {
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
    this.props.login(shelter);
    this.setState({ username: "", password: "" });
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
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
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
            <button type="submit">Login</button>
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

export default withRouter(ShelterLoginForm);
