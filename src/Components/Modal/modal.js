import React, { Component } from "react";
import "./modal.css";

export class Modal extends Component {
  render() {
    return (
      <div
        className="contact-container"
        style={{ display: this.props.display }}
      >
        <div className="modal-title">
          Get In Touch<div className="close-button" onClick={this.props.closeModal}>X</div>
        </div>
        <div className="send-message">
          <input className="Name" placeholder="Name"></input>
          <input className="Email" placeholder="Email"></input>
          <textarea
            rows="8"
            cols="50"
            className="Message"
            placeholder="Message"
          ></textarea>
        </div>
        <button>Send</button>
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
