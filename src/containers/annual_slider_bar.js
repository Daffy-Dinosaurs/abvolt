import React, { Component } from 'react';
import { connect } from 'react-redux';
import worldGlobe from '../components/world_view.js';
import { overallAnnualData } from '../selectors/annual_selector';
import { issueSelect, colorPopulate } from '../selectors/category_selector';

//NOTE: This should be renamed to AnnualDataSlider
class AnnualDataSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2002,
      currentIssue: '',
      issueSelected: false,
    };

    this.renderSlider = this.renderSlider.bind(this);
    this.setYear = this.setYear.bind(this);
    this.getCurrentIssue = this.getCurrentIssue.bind(this);
    this.setCategory = this.setCategory.bind(this);
  };

  setYear(event) {
    this.setState({ year: event.target.value },
      this.getCurrentIssue(this.props.allData, this.state.year, this.state.currentIssue)
    );
  };

  setCategory(category) {
    this.setState({ currentIssue: category,  issueSelected: true });
  };

  getCurrentIssue(data, year, category) {
    const info = colorPopulate(issueSelect(overallAnnualData(data, year), category));
    worldGlobe.renderGlobeStats(info[0], info[1], info[2], category);
  };

  renderSlider() {
    return (
      <div>
      <div className="barSlider">
        <input type="range" min="1990"
            max="2015"
            step="1"
            id="fader"
            onChange={ this.setYear }
            >
          <datalist id="steplist">
            <output id="volume">2002</output>
          </datalist>
        </input>
      <span>{this.state.year}</span>
      </div>
      <div className="issues">
        <ul>
        <li className='category' onClick={this.setCategory.bind(this, 'Poverty')}>Poverty</li>
        <li className='category' onClick={this.setCategory.bind(this, 'Water Pollution')}>Water Pollution</li>
        <li className='category' onClick={this.setCategory.bind(this, 'Food Scarcity')}>Food Scarcity</li>
        </ul>
      </div>
    </div>
    );
  }

  render() {
    if (!this.state.issueSelected) {
      return (
        <div className="issues">
          <ul>
          <li className='category' onClick={this.setCategory.bind(this, 'Poverty')}>Poverty</li>
          <li className='category' onClick={this.setCategory.bind(this, 'Water Pollution')}>Water Pollution</li>
          <li className='category' onClick={this.setCategory.bind(this, 'Food Scarcity')}>Food Scarcity</li>
          </ul>
        </div>
      );
    } else {
      return (
        this.renderSlider()
      );
    }
  }

};

function mapStateToProps({ allData }) {
  return { allData };
};

export default connect(mapStateToProps)(AnnualDataSlider);
