import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import ActiveCountry from '../containers/country-view';
import CountryList from '../containers/countryList';
import TwitterFeed from '../containers/twitter_feed';
import Globe from '../containers/globeContainer';
import Bar from '../containers/bar';
import VictoryPlots from '../containers/d3Graphs';
import Intro from './introduction';
import NewsOutlet from '../containers/news_outlet';
import UserTour from './tourTips';
import { requestCountries, getAllData } from '../actions/db_actions';

class App extends Component{
  constructor(props) {
    super(props);

    //TODO: We need to build a spinner that that runners until the data populates
  }

  componentDidMount() {
    //NOTE: This should run once to populate the state with countries
    this.props.requestCountries();
    this.props.getAllData();
  }

  render() {
    // <Intro />

    return (
      <div className="main">
        <CountryList />
        <div className="globe">
          <Globe />
        </div>
        <Bar />
        <ActiveCountry />
        <NewsOutlet />
        <TwitterFeed />
        <VictoryPlots />
        <UserTour />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestCountries,
    getAllData,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
