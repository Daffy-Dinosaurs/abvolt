import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { globeAction, selectCountry } from '../actions/global_actions';
import { waterTweets, povertyTweets, foodScarcityTweets } from '../actions/media_actions';
import { getWaterData } from '../actions/db_actions';

class CountryList extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   //NOTE: If I need this the pull it from props
    //   // term: this.props.requestCountries(),
    // };
  }

  //TODO: continue this pattern
  typeOfTweet(country) {
    //NOTE: this could be made into a selector

    const { issue } = this.props;
    let category = issue.issue;

    if (category === 'Water Pollution') {
      this.props.waterTweets(country);
    }

    if (category === 'Poverty') {
      this.props.povertyTweets(country);
    }

    if (category === 'Food Scarcity') {
      this.props.foodScarcityTweets(country);
    }
  }

  renderList() {
    const { countryList } = this.props;

    return countryList.map(country => React.createElement(
      'li',
      { className: 'list-country-item', id: 'c' + country.localeId,
        key: country.countryName,
        onClick: event => {
          event.preventDefault();
          this.props.selectCountry(country);
          this.props.globeAction(country);
          this.typeOfTweet(country);

          // this.props.getNews(country);
          // this.props.getWaterData(country.id);
        } },
      country.countryName
    ));
  }

  render() {
    return React.createElement(
      'div',
      { className: 'side-view-left' },
      React.createElement(
        'h4',
        null,
        'Select a Country '
      ),
      React.createElement(
        'ul',
        { className: 'list' },
        ' ',
        this.renderList(),
        ' '
      )
    );
  }
}

function mapStateToProps({ countryList, issue }) {
  return { countryList, issue };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectCountry,
    globeAction,
    waterTweets,
    foodScarcityTweets,
    povertyTweets,

    // getNews,
    getWaterData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);