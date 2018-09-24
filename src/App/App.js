import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Project from './Projects/Project/Project';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="links">
            <Link to="/projects">
              <Button>Projects</Button>
            </Link>
            <a href="http://toriandmatt.com/resume.pdf">
              <Button>Resume</Button>
            </a>
            <Link to="/contact">
              <Button>Contact</Button>
            </Link>
          </div>
          <Route exact path="/" render={(info) => <Home match={info.match} /> } />
          <Route exact path="/contact" render={(info) => <Contact match={info.match} /> } />
          <Route exact path="/projects" render={(info) => <Projects match={info.match} /> } />
          <Route exact path="/project/:projectId" render={(info) => <Project match={info.match} /> } />
        </div>
      </Router>
    );
  }
};