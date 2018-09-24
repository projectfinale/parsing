import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AppHeader extends Component {
  render() {
    return (
      <div className="app-header">
        <Link className="full-size" to="/">Matthew Angelini</Link>
        <Link className="small-size" to="/">MA</Link>
      </div>
    );
  }
};