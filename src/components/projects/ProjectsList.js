import _ from 'lodash';
import React, { Component } from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import ImagesLoaded from 'react-images-loaded';
import Card from './Card';
import slugReplace from '../../utils/slugNames.js';
import pathCheck from '../../utils/pathCheck.js';
import './projects_list.scss';

class ProjectsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    };
  }

  _handleLoad = () => {
    this.setState({
      loaded: true
    });
  }

  renderProjectsTitle = () => {
    const { pathname } = this.props.location;
    if (pathCheck(pathname)) {
      return (
        <h3 className="other-projects-title comment">Other projects</h3>
      );
    }
  }

  renderProjects(projects) {
    if (projects) {
      return _.map(projects, singleProject => {
        return (
          <article className="project-grid-item" key={`${singleProject.slug}-${singleProject.id}`}>
            <Card>
              <img src={`https://s3-us-west-1.amazonaws.com/webdevdude/images/${singleProject.data.abbreviation}/thumb.jpg`} alt="{singleProject.data.title[0].text} project" />
              <div className="card-about wrapper">
                <h3 className="site-name">{singleProject.data.title[0].text}</h3>
                <div className="site-meta">
                  <span className="site-type">{slugReplace(singleProject.data.type.slug)}</span>
                  <span className="site-year">{singleProject.data.year}</span>
                </div>
              </div>
              <Link to={`/projects/${singleProject.slug}`} className="overlay" title={`More details about ${singleProject.data.title[0].text}`}>
                <span>Click for more&nbsp;details</span>
              </Link>
            </Card>
          </article>
        );
      });  
    }
  }

  loadProjects = () => {
    const { loaded } = this.state;
    if (loaded) {
      return 'loaded'
    }
  }

  render() {
    const projects = this.props.projectList;
    return(
      <section className="projects">
        { this.renderProjectsTitle() }
        <ImagesLoaded
          className={`project-grid ${this.loadProjects()}`}
          onFail={ this._handleLoad }
          done={ this._handleLoad }
        >
          {this.renderProjects(projects)}
        </ImagesLoaded>
      </section>
    );
  }
}

export default withRouter(connect()(ProjectsList));
