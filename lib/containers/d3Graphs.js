// modules/Repos.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { VictoryChart } from 'victory-chart';
import { VictoryLine } from 'victory-line';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { getWaterData } from '../actions/db_actions';
import CountryList from '../containers/countryList';

var plottingData = [{ x: '1990', y: 0 }, { x: '1992', y: 0 }, { x: '1994', y: 0 }, { x: '1996', y: 0 }, { x: '1998', y: 0 }];

class VictoryPlots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waterProcessed: plottingData,
      povertyProcessed: plottingData,
      foodProcessed: plottingData,
      visible: false

    };

    this.processingData = this.processingData.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  processingData() {
    var processWaterData = [];
    var processPovertyData = [];
    var processFoodData = [];

    for (var i = 0; i < this.props.waterData.length; i++) {
      if (this.props.waterData[i].category === 'Water Pollution') {
        processWaterData.push({
          x: this.props.waterData[i].year,
          y: this.props.waterData[i].value
        });
      }
    }

    for (var i = 0; i < this.props.waterData.length; i++) {
      if (this.props.waterData[i].category === 'Poverty') {
        processPovertyData.push({
          x: this.props.waterData[i].year,
          y: this.props.waterData[i].value
        });
      }
    }

    for (var i = 0; i < this.props.waterData.length; i++) {
      if (this.props.waterData[i].category === 'Food Scarcity') {
        processFoodData.push({
          x: this.props.waterData[i].year,
          y: this.props.waterData[i].value
        });
      }
    }

    this.setState({ waterProcessed: processWaterData });
    this.setState({ povertyProcessed: processPovertyData });
    this.setState({ foodProcessed: processFoodData });
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    if (this.state.visible) {
      if (Array.isArray(this.props.waterData)) {
        return React.createElement(
          'div',
          { className: 'graphs-visible' },
          React.createElement(
            'div',
            null,
            React.createElement(
              'button',
              { className: 'btn-plot', onClick: this.processingData.bind(this) },
              'Plot Graph'
            ),
            React.createElement(
              'button',
              { className: 'btn-close', onClick: this.hide.bind(this) },
              'X'
            )
          ),
          React.createElement(
            VictoryChart,
            null,
            React.createElement(VictoryAxis, {
              label: 'Improved water resource'
            }),
            React.createElement(VictoryAxis, { dependentAxis: true,
              label: '% of population'
            }),
            React.createElement(VictoryBar, {
              data: this.state.waterProcessed,
              dataAttributes: [{ fill: 'cornflowerblue' }],
              animate: { velocity: 0.02 }
            })
          ),
          React.createElement(
            VictoryChart,
            null,
            React.createElement(VictoryAxis, {
              label: '% of population undernourished'
            }),
            React.createElement(VictoryAxis, { dependentAxis: true,
              label: '% of population'
            }),
            React.createElement(VictoryBar, {
              data: this.state.foodProcessed,
              dataAttributes: [{ fill: 'orange' }],
              animate: { velocity: 0.02 }
            })
          ),
          React.createElement(
            VictoryChart,
            null,
            React.createElement(VictoryAxis, {
              label: 'people living under $3.90/day'
            }),
            React.createElement(VictoryAxis, { dependentAxis: true,
              label: '% of population'
            }),
            React.createElement(VictoryBar, {
              data: this.state.povertyProcessed,
              dataAttributes: [{ fill: 'green' }],
              animate: { velocity: 0.02 }
            })
          )
        );
      }
    }

    if (!this.state.visible || !this.state.waterData) {
      return React.createElement(
        'div',
        { className: 'graphs' },
        React.createElement(
          'h1',
          { onClick: this.show.bind(this) },
          React.createElement('img', { src: '/src/images/chart-min.png', alt: 'chart' })
        )
      );
    }
  }
}; // End of Component

function mapStateToProps({ waterData }) {
  return { waterData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getWaterData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VictoryPlots);