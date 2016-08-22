import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { globeAction, selectCountry } from '../actions/global_actions';
import { getTweets, getNews } from '../actions/media_actions';
import { getWaterData } from '../actions/db_actions';

class CountryList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //NOTE: If I need this the pull it from props
      // term: this.props.requestCountries(),
    };

    //NOTE: not sure why this is here
    // this.state.term;
  }

  renderList() {
    return this.props.countryList.map((country) => {
      return (
        <li className="list-country-item" id={'c' + country.localeId}
        key={country.countryName}
        onClick={(event) => {
          event.preventDefault();
          this.props.selectCountry(country);
          this.props.globeAction(country);
          this.props.getTweets(country);
          this.props.getNews(country);
          this.props.getWaterData(country.id);
        }}>{ country.countryName }</li>
      );
    });
  }

  render() {
    return (
      <div className="side-view-left">
        <h4>Select a Country </h4>
          <ul className="list" > { this.renderList() } </ul>
      </div>
    );
  }
}

function mapStateToProps({ countryList }) {
  return { countryList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectCountry,
    globeAction,
    getTweets,
    getNews,
    getWaterData,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
