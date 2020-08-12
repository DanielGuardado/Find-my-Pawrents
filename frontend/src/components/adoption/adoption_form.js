import React from "react";
import { withRouter } from "react-router-dom";

class AdoptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      breed: "",
      age: "",
      description: "",
      strengths: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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
      name: this.state.name,
      gender: this.state.gender,
      breed: this.state.breed,
      age: this.state.age,
      description: this.state.description,
      strengths: this.state.strengths,
    };
    // this.props
    //   .catch((err) => {
    //     this.props.receiveErrors(err.response.data);
    //   });
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.props.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="adoption-form-container">
        <form className="adoption-form-box" onSubmit={this.handleSubmit}>
          <div className="adoption-input-container">
            <div className="adoption-form-top-level">
              <h2 className="adoption-header">Adoption Form</h2>
            </div>
            <div className="adoption-form">
              <div className="adoption-name-input-box">
                <div className="input-titles">Name</div>
                <input
                  className="input-boxes"
                  type="text"
                  value={this.state.name}
                  onChange={this.update("name")}
                />
              </div>
              <br />
              <div className="adoption-gender-input-box">
                <div className="input-titles">Gender</div>
                <input
                  className="input-boxes"
                  type="text"
                  value={this.state.gender}
                  onChange={this.update("gender")}
                />
              </div>
              <br />
              <div className="adoption-breed-input-box">
                <div className="input-titles">Breed</div>
                <input
                  className="input-boxes"
                  type="text"
                  value={this.state.breed}
                  onChange={this.update("breed")}
                />
              </div>
              <br />
              <div className="adoption-age-input-box"></div>
                <div className="input-titles">Age</div>
                <input
                  className="input-boxes"
                  type="text"
                  value={this.state.age}
                  onChange={this.update("age")}
                />
              <br />
              <div className="adoption-description-input-box">
                <div className="input-titles">Description</div>
                <input
                  className="input-boxes"
                  type="text"
                  value={this.state.description}
                  onChange={this.update("description")}
                />
              </div>
              <br />
              <div className="adoption-strengths-input-box">
                <div className="input-titles">Strengths</div>
                <input
                  className="input-boxes"
                  type="text"
                  value={this.state.strengths}
                  onChange={this.update("strengths")}
                />
              </div>
              <br />
              <input
                className="adoption-submit"
                type="submit"
                value="List for Adoption!"
              />
              <div className="render-errors">{this.renderErrors()}</div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(AdoptionForm);
