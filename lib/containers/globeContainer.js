import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import d3 from 'd3';
import worldGlobe from '../components/world_view.js';

class Globe extends Component {
  componentDidMount() {
    worldGlobe.go();
  }

  renderGlobe() {
    worldGlobe.go(this.props.globeCountry);
  }

  render() {
    if (!this.props.globeCountry) {
      return React.createElement('div', null);
    } else {
      return React.createElement(
        'h1',
        null,
        this.renderGlobe()
      );
    }
  }
}

function mapStateToProps({ globeCountry }) {
  return { globeCountry };
}

export default connect(mapStateToProps)(Globe);