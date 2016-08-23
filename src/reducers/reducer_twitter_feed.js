import * as twitter from '../actions/types';

const initialState = {};

// NOTE: Our feed is not passing the name of the country, so there is no way to
// populate the twitterFeed per country, it is rewritten every call.

// TODO: We must either reconfigure how our action is built or settle that we will
// be popualting the graphs with tweets from other countries, by same issue. The
// reducer should have acces to teh state. If we can pull in the active country from
// the state then we can set that as the property. This opens the door to limited api
// calls.

// NOTE: future implementation. To make this a tool for various topics these prop
// names should be converted in to gloabl variables that can be populated
export default function(state = initialState, action) {
  // console.log('twitter reducer: ', action);
  if (action.type === twitter.GET_WATER_TWEETS) {
    return { ...state, water_tweets: action.payload.data };
  }

  if (action.type === twitter.GET_FOOD_TWEETS) {
    return { ...state, food_tweets: action.payload.data };
  }

  if (action.type === twitter.GET_POVERTY_TWEETS) {
    return { ...state, poverty_tweets: action.payload.data };
  }

  //NOTE: this really shouldn't even be used. We should not be removing information
  // from the state.
  if (action.type === twitter.CLEAR_TWEETS) {
    return initialState;
  }

  return state;
};
