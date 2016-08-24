import { combineReducers } from 'redux';
import ActiveCountry from './reducer_active_country';
import CountryList from './reducer_countryList';
import TwitterFeed from './reducer_twitter_feed';
import GlobeAction from './reducer_globe_action';
import WaterData from './reducer_d3Chart_data';
import NewsFeed from './reducer_news_outlet';
import AllData from './reducer_all_data';
import Issue from './active_issue.reducer';

//TODO: Redux clean up is required. We are rewriting state. THIS IS INCORRECT.
// Reducers can be restructed, however it will also require refactoring how we
// access the data in React. Selctors can be created to adapt to this
// adjustment. I beleive it will improve speed and general make the application
// more redux compliant.

const rootReducer = combineReducers({
  globeCountry: GlobeAction,
  activeCountry: ActiveCountry,
  countryList: CountryList,
  twitterFeed: TwitterFeed,
  waterData: WaterData,
  clearCountry: ActiveCountry,
  clearTweets: TwitterFeed,
  newsFeed: NewsFeed,
  clearNews: NewsFeed,
  allData: AllData,
  issue: Issue
});

export default rootReducer;