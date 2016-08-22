import React, { Component } from 'react';
import { connect } from 'react-redux';
import worldGlobe from '../components/world_view.js';
import { overallAnnualData } from '../selectors/annual_selector';
import { issueSelect, colorPopulate } from '../selectors/category_selector';

//NOTE: This should be renamed to AnnualDataSlider
class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2002,
      currentIssue: '',
    };

    this.setYear = this.setYear.bind(this);
    this.getCurrentIssue = this.getCurrentIssue.bind(this);
    this.setCategory = this.setCategory.bind(this);
  };

  //NOTE: My main concern is whether the category assignment will effect this
  setYear(event) {
    console.log('props in setYear: ', this.props);
    this.setState({ year: event.target.value },
      this.getCurrentIssue(this.props.allData, this.state.year, this.state.currentIssue)
    );
  };

  setCategory(category) {
    this.setState({ currentIssue: category });
  };

  //TODO: Refactor. Currently iterating through all data to pull category and year.
  // create category selector and use it with the annual selector. We are then
  // setting the color pattern.
  getCurrentIssue(data, year, category) {
    console.log('args in getCurrentIssue: ', data, year, category);
    const info = colorPopulate(issueSelect(overallAnnualData(data, year), category));
    worldGlobe.renderGlobeStats(info[0], info[1], info[2], category);
  };

  render() {
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
};

function mapStateToProps({ allData }) {
  return { allData };
};

export default connect(mapStateToProps)(Bar);

// <li className='category' onClick={ function () {this.setCategory('Food Scarcity')}>Food Scarcity</li>


//NOTE: This should be converted into a selector and imported
// getAnnualData() {
//   let storage = [];
//
//   for (var i = 0; i < this.props.allData.length; i++) {
//     if (this.props.allData[i].year == this.state.year) {
//       storage.push(this.props.allData[i]);
//     }
//   }
//
//   this.statsButton(this.state.currentIssue);
// }

// getCurrentIssue(category) {
//   // console.log('stats button being called');
//   let stats = [];
//   let lowrange = undefined;
//   let highrange = 0;
//
//   for (var i = 0; i < this.props.allData.length; i++) {
//     if (this.props.allData[i].year == this.state.year) {
//       if (this.props.allData[i].category === category) {
//         if (this.props.allData[i].value === 0) {
//           //do nothing
//         } else {
//           if (lowrange === undefined) {
//             lowrange = this.props.allData[i].value;
//           }
//
//           if (lowrange > this.props.allData[i].value) {
//             lowrange = this.props.allData[i].value;
//           }
//
//           if (highrange < this.props.allData[i].value) {
//             highrange = this.props.allData[i].value;
//           }
//
//           stats.push(this.props.allData[i]);
//         }
//       }
//     }
//   }
//
//   this.setState({ currentIssue: category });
//   worldGlobe.renderGlobeStats(stats, lowrange, highrange, category);
// }

// getCurrentIssue () {
//   console.log('CURRENT ISSUE : ', this.state.currentIssue);
// }
