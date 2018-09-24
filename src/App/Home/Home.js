import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-title">
          Matthew Angelini
        </div>
        <p>
          Senior Software Engineer, consultant, home renovation enthusiast and 
          husband to an amazing artist. The work and projects shown on this site 
          are mostly personal, but feel free to reach out to learn about some of my consulting work.
        </p>
      </div>
    );
  }
};