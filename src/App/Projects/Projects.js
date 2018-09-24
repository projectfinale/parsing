import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AppHeader from '../AppHeader';
import { Link } from 'react-router-dom';
import { ProjectData } from '../../Data/ProjectData'
import './Projects.css';

export default class Projects extends Component {
  componentDidMount() {
    console.log('Okay: ', ProjectData);
  }
  render() {
    const projectList = Object.keys(ProjectData).map((item, i) => {
      return (
        <Grid item sm={6} md={6} lg={4} key={i}>
          <Link to={`/project/${item}`}>
            <img className="projects-img" src={require(`../../_assets/images/${item}.png`)} alt="" />
          </Link>
        </Grid>
      )
    });
    return (
      <div>
        <AppHeader />
        <div className="projects">
          <Grid container spacing={24}>
            {projectList}
          </Grid>
        </div>
      </div>
    );
  }
};