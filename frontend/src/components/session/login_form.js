import React from "react";
import { withRouter } from "react-router-dom";
// import { login } from '../../util/session_api_util';

class LoginForm extends React.Component {
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
    if (nextProps.currentUser === true) {
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

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props
      .login(user)
      .then(this.props.closeModal)
      .catch((err) => {
        this.props.receiveErrors(err.response.data)
      });
      debugger
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

  render() {
    return (
      <div className="login-form-container">
        <form className="login-form-box" onSubmit={this.handleSubmit}>
          <div className="login-input-container">
            <div className="login-form-top-level">
              <h2 className="login-header">Log In</h2>
              <div>{this.props.otherForm}</div>
            </div>
            <div className="login-form">
              <div className="login-email-input-box">
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
              <div className="login-password-input-box">
                <div className="input-titles">Password</div>
                <input
                  className="input-boxes"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
              </div>
              <br />
              <div className="render-errors">{this.renderErrors()}</div>
              <input className="login-submit" type="submit" value="Log in!" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
