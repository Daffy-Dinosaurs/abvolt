import { combineReducers } from 'redux';
import ActiveCountry from './reducer_active_country';
import CountryList from './reducer_countryList';
import TwitterFeed from './reducer_twitter_feed';
import GlobeAction from './reducer_globe_action';
import WaterData from './reducer_d3Chart_data';
import NewsFeed from './reducer_news_outlet';
import AllData from './reducer_all_data';

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
});

export default rootReducer;
