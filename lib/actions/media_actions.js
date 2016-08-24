import * as mediaAction from './types';
import axios from 'axios';
import Moment from 'moment';

//------------------------------------------------------------------------------
// these actions should be diabling active country
//------------------------------------------------------------------------------

export function clearNews() {
  return {
    type: mediaAction.CLEAR_NEWS,
    payload: {}
  };
}

export function clearTweets() {
  return {
    type: mediaAction.CLEAR_TWEETS,
    payload: {}
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
// export function getNews(country) {
//   //check current time against last called
//   if (state.country) {
//     //google this
//     let request;
//     const currentTime = moment();
//     const lastCaled = state.country[0].time;
//
//     //this is presumptious, if the time span is the desired time
//     if (currentTime - lastCaled > 2) {
//       request = state.country;
//     }
//
//   } else {
//     let fixedName = country.countryName.replace(' ', '+');
//     const url = 'https://content.guardianapis.com/search?section=environment&q=' + fixedName + '&api-key=' + API.guardian.API_KEY;
//     request = axios.get(url);
//   }
//
//   return {
//     type: mediaAction.GET_NEWS,
//     payload: request,
//   };
// }

//////////////////TEST ABOVE///////////////////////////

//TODO: There should be a way to pass the country in the payload.
// as of now, since it is a promise the return statement renders once complete.
// when the country is added it renders as a Promise not a data obj
export function povertyTweets(country) {
  let fixedName = country.countryName.replace(' ', '+');
  const url = '/tweets/' + 'poverty+' + fixedName;
  const request = axios.get(url);

  return {
    type: mediaAction.GET_POVERTY_TWEETS,
    payload: request
  };
}

export function foodScarcityTweets(country) {
  let fixedName = country.countryName.replace(' ', '+');
  const url = '/tweets/' + 'starvation+' + fixedName;
  const request = xios.get(url);

  return {
    type: mediaAction.GET_FOOD_TWEETS,
    payload: request
  };
}

export function waterTweets(country) {
  let fixedName = country.countryName.replace(' ', '+');
  const url = '/tweets/' + 'water+' + fixedName;
  const request = axios.get(url);

  return {
    type: mediaAction.GET_WATER_TWEETS,
    payload: request
  };
}