import React, { Component } from 'react';
import { connect } from 'react-redux';
import './card.scss';

class Card extends Component {
  render() {
    return(
      <div className="card">
        { this.props.children }
      </div>
    );
  }
}

export default connect()(Card);
