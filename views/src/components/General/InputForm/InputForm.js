import React from "react";
import { local, traveler } from "./elements";
import Question from "./questions/questions";

class InputForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    avatar: "",
    address: "",
    bio: "",
    tourinfo: "",
    rate: 0
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.handleRegistration(this.state);
  };

  handleClose = () => {
    this.props.handleClose();
  };

  handleChange = (input, value) => {
    this.setState({ [input]: value });
  };
  render() {
    console.log(this.state);
    if (this.props.user === "local") {
      return (
        <div className="input-form">
          <p className="close" onClick={this.handleClose}>
            Close
          </p>
          <h1>Local Registration</h1>
          {local.map((question, i) => (
            <Question
              storeData={this.handleChange}
              key={i}
              name={question.name}
              label={question.label}
              type={question.type}
              placeholder={question.placeholder}
            />
          ))}
          <br />

          <button
            className="local-registration-btn"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      );
    } else {
      return (
        <div className="input-form">
          <p className="close" onClick={this.handleClose}>
            Close
          </p>
          <h1>Traveler Registration</h1>
          {traveler.map((question, i) => (
            <Question
              storeData={this.handleChange}
              key={i}
              name={question.name}
              label={question.label}
              type={question.type}
              placeholder={question.placeholder}
            />
          ))}
          <br />
          <button
            className="traveler-registration-btn"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      );
    }
  }
}

export default InputForm;
