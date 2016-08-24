import React, { Component } from 'react';
import { Link } from 'react-router';
import Tour from 'react-user-tour';

export default class UserTour extends Component {

  constructor() {
    super();
    this.state = {
      isTourActive: true,
      tourStep: 1
    };
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Tour, {
        active: this.state.isTourActive,
        step: this.state.tourStep,
        onNext: step => this.setState({ tourStep: step }),
        onBack: step => this.setState({ tourStep: step }),
        onCancel: () => this.setState({ isTourActive: false }),
        steps: [{
          step: 1,
          selector: '#c20',
          title: React.createElement(
            'div',
            null,
            'WELCOME TO HEARTBEAT!'
          ),
          body: React.createElement(
            'div',
            null,
            'Here you can click on any country to find out more about its poverty levels, water pollution index, and food security. '
          )
        }, {
          step: 2,
          selector: '#c20',
          title: React.createElement(
            'div',
            null,
            'Country List'
          ),
          body: React.createElement(
            'div',
            null,
            'Click on any country to view it on the globe and read more about its statistics.'
          )
        }, {
          step: 3,
          selector: '.issues',
          title: React.createElement(
            'div',
            null,
            'ISSUES'
          ),
          body: React.createElement(
            'div',
            null,
            'Click on an issue to see a color comparison of that issue on the globe!.'
          )
        }, {
          step: 4,
          selector: '.barSlider',
          title: React.createElement(
            'div',
            null,
            'SLIDER BAR'
          ),
          body: React.createElement(
            'div',
            null,
            'Moving the slider bar changes the year. The colors on the globe also update to reflect that year.'
          )
        }, {
          step: 5,
          selector: '.newsfeed-feed',
          title: React.createElement(
            'div',
            null,
            'ICONS'
          ),
          body: React.createElement(
            'div',
            null,
            'Click on a news feed icon to see what people are saying about a particular issue for a particular country.'
          )
        }, {
          step: 6,
          selector: '.land',
          title: React.createElement(
            'div',
            null,
            'GLOBE'
          ),
          body: React.createElement(
            'div',
            null,
            'Drag the globe to browse regions of the world, and click on a country to learn more about that country.'
          )
        }]
      })
    );
  }
}