import React, { Component } from "react";
import "./modal.css";

export class Modal extends Component {


  render() {
    return (
      <div className="contact-container">
        <div className="modal-title">Get In Touch</div>
        <div className="send-message">
          <input className="Name" placeholder="Name"></input>
          <input className="Email" placeholder="Email"></input>
          <input className="Message" placeholder="Message"></input>
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
