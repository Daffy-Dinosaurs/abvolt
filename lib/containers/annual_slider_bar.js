import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import worldGlobe from '../components/world_view.js';
import { overallAnnualData } from '../selectors/annual_selector';
import { issueSelect, colorPopulate } from '../selectors/category_selector';
import { setIssue } from '../actions/global_actions';

//NOTE: This should be renamed to AnnualDataSlider
class AnnualDataSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2002,
      currentIssue: '',
      issueSelected: false
    };

    this.renderSlider = this.renderSlider.bind(this);
    this.setYear = this.setYear.bind(this);
    this.getCurrentIssue = this.getCurrentIssue.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  setYear(event) {
    this.setState({ year: event.target.value }, this.getCurrentIssue(this.props.allData, this.state.year, this.state.currentIssue));
  }

  setCategory(category) {
    this.setState({ currentIssue: category, issueSelected: true });

    //NOTE: by creating this action I might have just made the above line obsolete
    this.props.setIssue(category);
  }

  getCurrentIssue(data, year, category) {
    const info = colorPopulate(issueSelect(overallAnnualData(data, year), category));
    worldGlobe.renderGlobeStats(info[0], info[1], info[2], category);
  }

  renderSlider() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'barSlider' },
        React.createElement(
          'input',
          { type: 'range', min: '1990',
            max: '2015',
            step: '1',
            id: 'fader',
            onChange: this.setYear
          },
          React.createElement(
            'datalist',
            { id: 'steplist' },
            React.createElement(
              'output',
              { id: 'volume' },
              '2002'
            )
          )
        ),
        React.createElement(
          'span',
          null,
          this.state.year
        )
      ),
      React.createElement(
        'div',
        { className: 'issues' },
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            { className: 'category', onClick: this.setCategory.bind(this, 'Poverty') },
            'Poverty'
          ),
          React.createElement(
            'li',
            { className: 'category', onClick: this.setCategory.bind(this, 'Water Pollution') },
            'Water Pollution'
          ),
          React.createElement(
            'li',
            { className: 'category', onClick: this.setCategory.bind(this, 'Food Scarcity') },
            'Food Scarcity'
          )
        )
      )
    );
  }

  render() {
    if (!this.state.issueSelected) {
      return React.createElement(
        'div',
        { className: 'issues' },
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            { className: 'category', onClick: this.setCategory.bind(this, 'Poverty') },
            'Poverty'
          ),
          React.createElement(
            'li',
            { className: 'category', onClick: this.setCategory.bind(this, 'Water Pollution') },
            'Water Pollution'
          ),
          React.createElement(
            'li',
            { className: 'category', onClick: this.setCategory.bind(this, 'Food Scarcity') },
            'Food Scarcity'
          )
        )
      );
    } else {
      return this.renderSlider();
    }
  }

};

function mapStateToProps({ allData }) {
  return { allData };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setIssue
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnualDataSlider);