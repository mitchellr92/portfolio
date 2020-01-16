import React, { Component } from "react";
import "./modal.css";

export class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      name: "",
      email: "",
      message: "",
      send: "none",
      display: "none",
    };
  }

  addMessage = event => {
    event.preventDefault();
    const addedMessage = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    this.props.newMessage(addedMessage);

    this.setState({
      name: "",
      email: "",
      message: "",
      send: "flex"
    });
  };

  inputHandleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div
        className={this.props.display}
      >
        <div className="modal-title">
          Get In Touch
          <div className="close-button" onClick={this.props.closeModal}>
            X
          </div>
        </div>
        <div className="send-message">
          <input
            className="Name"
            placeholder="Name"
            onChange={this.inputHandleChange}
            name="name"
            value={this.state.name}
          ></input>
          <input
            className="Email"
            placeholder="Email"
            onChange={this.inputHandleChange}
            name="email"
            value={this.state.email}
          ></input>
          <textarea
            rows="8"
            cols="55"
            className="Message"
            placeholder="Message"
            onChange={this.inputHandleChange}
            name="message"
            value={this.state.message}
          ></textarea>
        </div>
        <div className="send">
          <p className="send-button" onClick={this.addMessage}>
            Send
          </p>
          <p className="response" style={{ display: this.state.send }}>
            Thank you for reaching out! I will be getting back to you as soon as
            I can.
          </p>
        </div>
        <div className="contact">
          <div className="email">
            <i className="fas fa-mobile-alt"> :</i>
            <a href="telto:9517418669">951-741-8669</a>
          </div>
          <div className="phone">
            <i className="fas fa-envelope"> :</i>
            <a href="mailto:mitchellr92@live.com">mitchellr92@live.com</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
