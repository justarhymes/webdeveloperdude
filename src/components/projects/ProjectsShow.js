import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimateHeight from 'react-animate-height';
import ImagesLoaded from 'react-images-loaded';
import slugReplace from '../../utils/slugNames.js';
import { fetchProject } from '../../actions';
import Card from './Card';
import './projects_show.scss';

class ProjectsShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchProject(slug);
  }

  _toggleHeight = () => {
    const { height } = this.state;

    this.setState({
      height: height === 0 ? 'auto' : 0,
    });
  }

  renderSlugItem(item, className, extraText) {
    if (item) {
      return (
        <div className={ className }>
          { extraText } <span className="name">{slugReplace(item)}</span>
        </div>
      );
    }
  }

  renderType(type) {
    if (type) {
      return (
        <div className="attr">
          <strong>Type:</strong> {slugReplace(type)}
        </div>
      );
    }
  }

  renderTagItem(items, key) {
    return _.map(items, item => {
      if (item[key]) {
        return (
          <li key={item[key].id} className="task tag">
            { slugReplace(item[key].slug) }
          </li>
        );
      }
    });
  }

  renderCompanies(project) {
    if (project.data.client.slug || project.data.studio.slug) {
      return (
        <div className="companies">
          <div className="comp">
            Created
          </div>
          { this.renderSlugItem(project.data.client.slug, 'client comp', 'for') }
          { this.renderSlugItem(project.data.studio.slug, 'agency comp', 'with') }
        </div>
      )
    }
  }

  loadProject = () => {
    const { height } = this.state;

    if (height === 'auto') {
      return 'loaded'
    }
  }

  render() {
    if (this.props.project) {
      const { height } = this.state;
      const { project } = this.props;
      return(
        <AnimateHeight
          duration={ 500 }
          height={ height }
        >
          <ImagesLoaded
            className={`project ${this.loadProject()}`}
            onFail={ this._toggleHeight }
            done={ this._toggleHeight }
          >
            <aside className="project-side">
              <Card>
                <div className="wrapper">
                  <h2>{ project.data.title[0].text }</h2>
                   { this.renderSlugItem(
                     project.data.type.slug,
                     'attr',
                     <strong>Type:</strong>)
                   }
                  <div className="attr"><strong>Year:</strong> { project.data.year }</div>
                </div>
              </Card>
              <div className="skills">
                <h3 className="comment">Skills needed</h3>
                <ul className="inline">
                  { this.renderTagItem(project.data.project_skills, 'skills') }
                </ul>
              </div>
              <div className="links" ng-if="project.url.length">
                Vist <a href="http://url.com" title="visit url.com" target="new">url.com</a> <span ng-if="project.secondaryurl.length">or <a href="http://secondurl.com" title="visit secondurl.com" target="new">secondurl.com</a></span>
              </div>
            </aside>

            <div className="project-main">
              <img
                src={`https://s3-us-west-1.amazonaws.com/webdevdude/images/${project.data.abbreviation}/page01.jpg`}
                className="project-image"
                alt="{project.data.title[0].text} website"
              />
              <div className="tasks">
                <h3 className="comment">Tasks completed</h3>
                <ul className="inline">
                  { this.renderTagItem(project.data['project-tasks'], 'tasks') }
                </ul>
              </div>
              <div className="desc">{project.data.description[0].text}</div>
              {this.renderCompanies(project)}
            </div>
          </ImagesLoaded>
        </AnimateHeight>
      );
    }
    return <div>Loading</div>;
  }
}

function mapStateToProps({ projects }, ownProps) {
  return { project: projects[ownProps.match.params.slug] };
}

export default connect(mapStateToProps, { fetchProject })(ProjectsShow);
