import { GET_TWEETS } from '../actions/types';

const initialState = {};

// Our feed is not passing the name of teh country, so there is no way to
// populate the twitterFeed per country, it is rewritten every call

export default function(state = initialState, action) {

  if (action.type === 'GET_TWEETS') {
    console.log('this is the action payload: ', action.payload);
    return action.payload.data;
  }

  if (action.type === 'CLEAR_TWEETS') {
    return initialState;
  }

  return state;
};
