import { COUNTRY_DATA } from '../actions/types';

const intialState = {};

// NOTE: The connected query is written like junk. This query is way to large and
// fails 1/3 times we load.

export default function(state = intialState, action) {
  if (action.type === 'COUNTRY_DATA') {
    return action.payload.data;
  }

  return state;
};
