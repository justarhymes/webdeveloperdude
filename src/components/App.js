import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';
import ScrollToTop from './ScrollToTop';
import Header from './sections/Header';
import ProjectsList from './projects/ProjectsList';
import ProjectsShow from './projects/ProjectsShow';
import Footer from './sections/Footer';

class App extends Component {
  componentWillMount() {
    this.props.fetchProjects();
  }
  renderProjectShowRoute = () => {
    if (this.props.projects) {
      return(
        <Route exact path="/projects/:slug" component={ProjectsShow} />
      );
    }
  }
  render() {
    if (!this.props.projects) return null;
    return (
      <Router>
        <ScrollToTop>
          <Header />
          { this.renderProjectShowRoute() }
          <ProjectsList projectList={ this.props.projects } />
          <Footer />
        </ScrollToTop>
      </Router>
    );
  }
}

function mapStateToProps({ projects }) {
  return { projects };
}

export default connect(mapStateToProps, { fetchProjects })(App);
