import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppHeader from '../../AppHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectData } from '../../../Data/ProjectData';
import './Project.css';

export default class Project extends Component {
  constructor(props){
    super(props);
    this.state = { 
      value: 0
    };
  }
  componentDidMount() {
    console.log('Okay: ', this.props.match.projectId);
  }
  render() {
    const paragraphs = ProjectData[this.props.match.params.projectId].paragraphs.map((item, i) => {
      return <p key={i}>{item}</p>;
    });
    return (
      <div>
        <AppHeader />
        <div className="project">
          <Grid container spacing={24}>
            <Grid item sm={6}>
              <img className="project-img" src={require(`../../../_assets/images/${this.props.match.params.projectId}.png`)} />
            </Grid>
            <Grid item sm={6} style={{position:'relative'}}>
              <div className="project-details">
                <div className="project-title">{ProjectData[this.props.match.params.projectId].title}</div>
                {paragraphs}
                <p>
                  Check it out: { ProjectData[this.props.match.params.projectId].link ? <a href={ProjectData[this.props.match.params.projectId].link}>{ProjectData[this.props.match.params.projectId].title}</a> : <i>No Link Available</i> }
                  <br/>Source code: { ProjectData[this.props.match.params.projectId].github ? <a href={ProjectData[this.props.match.params.projectId].github}>Github</a> : <i>Client Confidential</i> }
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      
    );
  }
};