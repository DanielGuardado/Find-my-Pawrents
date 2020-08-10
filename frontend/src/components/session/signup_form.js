import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        // debugger
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
          email: this.state.email,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          password: this.state.password,
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
          <div className="signup-form-container">
            <form onSubmit={this.handleSubmit}>
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
                  <input
                    className="signup-submit"
                    type="submit"
                    value="Sign up!"
                  />
                  <div className="render-errors">{this.renderErrors()}</div>
                </div>
              </div>
            </form>
          </div>
        );
    }
}

export default withRouter(SignupForm);