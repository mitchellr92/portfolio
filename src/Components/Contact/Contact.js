import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }

  inputHandleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="contact-container">
        <div className="contact-header">
          <h2>Please feel free to reach out to me:</h2>
        </div>
        <div className="top-half">
          <input
            className="name"
            placeholder="Name"
            name="name"
            onChange={this.inputHandleChange}
            value={this.state.name}
          />
          <input
            className="email"
            placeholder="Email"
            name="email"
            onChange={this.inputHandleChange}
            value={this.state.email}
          />
        </div>
        <div className="bottom-half">
          <input
            className="subject"
            placeholder="Subject"
            name="subject"
            onChange={this.inputHandleChange}
            value={this.state.subject}
          />
          <textarea
            className="message"
            placeholder="Message"
            name="message"
            onChange={this.inputHandleChange}
            value={this.state.message}
          />
        </div>
        <div className="buttons">
          <button className="button send"><span>Send</span></button>
          <button className="button clear"><span>Clear</span></button>
        </div>
      </div>
    );
  }
}

export default Contact;
