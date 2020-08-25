import React from "react";
import { storage } from "./firebase";
import "./new_dog.scss";
import NavBar from "./../navBar/navBar_container";

class NewDogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      breed: "",
      age: "",
      description: "",
      strengths: "",
      image: null,
      shelter_id: this.props.currentUser.id,
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.setState({ errors: {} });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
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

  preview() {
    if (this.state.image) {
      return <img src={this.state.image} alt="" style={{ width: "500px" }} />;
    }
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let dog = {
      name: this.state.name,
      gender: this.state.gender,
      breed: this.state.breed,
      age: this.state.age,
      description: this.state.description,
      strengths: this.state.strengths,
      image: this.state.image,
      shelter_id: this.state.shelter_id,
    };
    this.props
      .createDog(dog)
      .then(() => this.props.history.push(`/my_dogs`))
      .catch((err) => {
        this.props.receiveErrors(err.response.data);
      });
  }

  handleChange = (e) => {
    let image;
    if (e.target.files[0]) {
      image = e.target.files[0];
      // this.setState({ image: image });
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              this.setState({ image: url });
            });
        }
      );
    }
  };

  // handleUpload = () => {
  //   const { image } = this.state;
  //   const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {},
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //         .ref("images")
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then((url) => {
  //           this.setState({ image: url });
  //         });
  //     }
  //   );
  // };

  render() {
    return (
      <div className="new-dog-form-master-container">
        <NavBar className="new-dog-form-nav" />
        <div className="new-dog-form-container">
          {/* <button onClick={this.handleUpload}>Upload</button> */}
          {/* <button className="signup-submit" onClick={this.handleSubmit}>
          Submit dog
        </button> */}
          <div className="new-dog-form-image" />
          <form className="new-dog-form-box" onSubmit={this.handleSubmit}>
            <div className="new-dog-input-container">
              <div className="new-dog-form-top-level">
                <h2 className="new-dog-header">Adoption Form</h2>
              </div>
              <div className="new-dog-form">
                <div className="new-dog-name-input-box">
                  <div className="input-titles">Name</div>
                  <input
                    className="input-boxes"
                    type="text"
                    value={this.state.name}
                    onChange={this.update("name")}
                  />
                </div>
                <br />
                <div className="new-dog-gender-input-box">
                  <div className="gender-buttons">
                    <label>Gender </label>
                    <div className="radio-buttons">
                      <input
                        className=""
                        name="gender"
                        type="radio"
                        value="Male"
                        onChange={this.update("gender")}
                      />
                      Male
                    </div>
                    <div className="radio-buttons">
                      <input
                        className=""
                        name="gender"
                        type="radio"
                        value="Female"
                        onChange={this.update("gender")}
                      />
                      Female
                    </div>
                  </div>
                </div>
                <br />
                <div className="new-dog-breed-input-box">
                  <div className="input-titles">Breed</div>
                  <input
                    className="input-boxes"
                    type="text"
                    value={this.state.breed}
                    onChange={this.update("breed")}
                  />
                </div>
                <br />
                <div className="new-dog-age-input-box"></div>
                <div className="input-titles">Age</div>
                <input
                  className="input-boxes"
                  type="text"
                  value={this.state.age}
                  onChange={this.update("age")}
                />
                <br />
                <div className="new-dog-description-input-box">
                  <div className="input-titles">Description</div>
                  <input
                    className="input-boxes"
                    type="text"
                    value={this.state.description}
                    onChange={this.update("description")}
                  />
                </div>
                <br />
                <div className="new-dog-strengths-input-box">
                  <div className="input-titles">Strengths</div>
                  <input
                    className="input-boxes"
                    type="text"
                    value={this.state.strengths}
                    onChange={this.update("strengths")}
                  />
                </div>
                <br />
                <div>
                  <input
                    className="file-upload"
                    type="file"
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <input
                    className="new-dog-submit"
                    type="submit"
                    value="List for Adoption!"
                  />
                  <br />
                  {/* <div className="preview">{this.preview()}</div> */}
                </div>
                <div className="render-errors">{this.renderErrors()}</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// <div>
//   test
//   <input type="file" onChange={this.handleChange} />
//   <button onClick={this.handleUpload}>Upload</button>
//   <button className="signup-submit" onClick={this.handleSubmit}>
//     Submit dog
//   </button>
// </div>;

export default NewDogForm;
