import React from "react";
import { storage } from "./firebase";
import "./new_dog.scss";
import NavBar from "../navBar/navBar_container";

class EditDogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.dog;
    this.state = {
      _id: this.props.dog._id,
      name: this.props.dog.name,
      adoption_status: this.props.dog.adoption_status,
      gender: this.props.dog.gender,
      breed: this.props.dog.breed,
      age: this.props.dog.age,
      description: this.props.dog.description,
      strengths: this.props.dog.strengths,
      image: this.props.dog.image,
      shelter_id: this.props.dog.shelter_id,
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.setState({ errors: {} });
  }

  // componentDidMount() {
  //   this.props.fetchDog(this.props.id);
  // }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {Object.keys(this.state.errors).map((error, i) => (
  //         <li key={`error-${i}`}>{this.state.errors[error]}</li>
  //       ))}
  //     </ul>
  //   );
  // }

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
      _id: this.state._id,
      name: this.state.name,
      adoption_status: this.state.adoption_status,
      gender: this.state.gender,
      breed: this.state.breed,
      age: this.state.age.toString(),
      description: this.state.description,
      strengths: this.state.strengths,
      image: this.state.image,
      shelter_id: this.state.shelter_id,
    };
    this.props
      .updateDog(dog)
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

  renderErrors() {
    if (this.state.errors) {
      return (
        <ul>
          {Object.keys(this.state.errors).map((error, i) => (
            <li key={`error-${i}`}>{this.state.errors[error]}</li>
          ))}
        </ul>
      );
    }
  }
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
    const { dog } = this.props;
    if (!dog) {
      return null;
    } else {
      return (
        <div className="new-dog-form-master-container">
          <NavBar className="new-dog-form-nav" />
          <div className="new-dog-form-container">
            {/* <button onClick={this.handleUpload}>Upload</button> */}
            {/* <button className="signup-submit" onClick={this.handleSubmit}>
            Submit dog
          </button> */}
            <img
              className="dog-image"
              src={this.state.image}
              alt="1"
              style={{ width: "500px" }}
            />
            <form className="new-dog-form-box" onSubmit={this.handleSubmit}>
              <div className="new-dog-input-container">
                <div className="new-dog-form-top-level">
                  <h2 className="new-dog-header">Edit Dog</h2>
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
                  <div className="new-dog-status-input-box">
                    <div className="gender-buttons">
                      <label>Adoption Status </label>
                      <div className="radio-buttons">
                        <input
                          className=""
                          name="adoption_status"
                          type="radio"
                          value="Available"
                          onChange={this.update("adoption_status")}
                          checked={this.state.adoption_status === "Available"}
                        />
                        Available
                      </div>
                      <div className="radio-buttons">
                        <input
                          className=""
                          name="adoption_status"
                          type="radio"
                          value="Adopted"
                          onChange={this.update("adoption_status")}
                          checked={this.state.adoption_status === "Adopted"}
                        />
                        Adopted
                      </div>
                    </div>
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
                          checked={this.state.gender === "Male"}
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
                          checked={this.state.gender === "Female"}
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
                      value="Update Dog"
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
}

// <div>
//   test
//   <input type="file" onChange={this.handleChange} />
//   <button onClick={this.handleUpload}>Upload</button>
//   <button className="signup-submit" onClick={this.handleSubmit}>
//     Submit dog
//   </button>
// </div>;

export default EditDogForm;
