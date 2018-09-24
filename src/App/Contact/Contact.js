import React, { Component } from 'react';
import AppHeader from '../AppHeader';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <div className="contact">
          <p>
            Feel free to reach out to me using whichever method is easiest for you :)
            <div>
              <a href="mailto:matt@projectfinale.com">Email</a>
              <a href="https://www.linkedin.com/in/matthew-angelini/">LinkedIn</a>
              <a href="https://github.com/projectfinale">Github</a>
              <a href="https://www.instagram.com/matt.angelini/">Instagram</a>
            </div>
          </p>
        </div>
      </div>
    );
  }
};