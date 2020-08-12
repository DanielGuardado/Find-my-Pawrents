import React from "react";
import { storage } from "./index";

class NewDogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kyle",
      gender: "Male",
      breed: "Cool",
      age: "16",
      description: "I'm very smart",
      strengths: "Shapeshifter",
      image: null,
      shelter_id: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.createDog(dog);
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] });
    }
  };

  handleUpload = () => {
    const { image } = this.state;
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
  };
  render() {
    return (
      <div>
        test
        <input type="file" onChange={this.handleChange} />
        <button onClick={this.handleUpload}>Upload</button>
        <button className="signup-submit" onClick={this.handleSubmit}>
          Submit dog
        </button>
      </div>
    );
  }
}

export default NewDogForm;
