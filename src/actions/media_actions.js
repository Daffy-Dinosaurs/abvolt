import * as mediaAction from './media_actions';
import axios from 'axios';

//I will need to import moments and have access too the state.

//------------------------------------------------------------------------------
// these actions should be diabling active country
//------------------------------------------------------------------------------

export function clearNews() {
  return {
    type: mediaAction.CLEAR_NEWS,
    payload: {},
  };
}

export function clearTweets() {
  return {
    type: mediaAction.CLEAR_TWEETS,
    payload: {},
  };
}

//------------------------------------------------------------------------------
// these actions make API requests
//------------------------------------------------------------------------------

// TODO:These actions should be broken into two steps. If the country has been
// called within the last 2 minutes we should render the tweets already pulled.
// Otherwise submit a new api request. we will need to check the state to see when
// the last tweet was called.

//NOTE: the below url should be move to a env.variable page and imported
export function getNews(country) {
  //check current time against last called
  if (state.country) {
    //google this
    let request;
    const currentTime = moment();
    const lastCaled = state.country[0].time;

    //this is presumptious, if the time span is the desired time
    if (currentTime - lastCaled > 2) {
      request = state.country;
    }

  } else {
    let fixedName = country.countryName.replace(' ', '+');
    const url = 'https://content.guardianapis.com/search?section=environment&q=' + fixedName + '&api-key=' + API.guardian.API_KEY;
    request = axios.get(url);
  }

  return {
    type: mediaAction.GET_NEWS,
    payload: request,
  };
}

//////////////////TEST ABOVE///////////////////////////

//NOTE: This is currently not being used
export function povertyTweets(country) {
  let fixedName = country.countryName.replace(' ', '+');
  const url = '/tweets/' + 'poverty+' + fixedName;
  const request = axios.get(url);

  return {
    type: mediaAction.POVERTY_TWEETS,
    payload: request,
  };
}

export function getTweets(country) {
  let fixedName = country.countryName.replace(' ', '+');
  const url = '/tweets/' + 'water+' + fixedName;
  const request = axios.get(url);

  return {
    type: mediaAction.GET_TWEETS,
    payload: request,
  };
}
