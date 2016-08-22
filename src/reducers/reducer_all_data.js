import { COUNTRY_DATA } from '../actions/db_actions';

const intialState = {};

export default function(state = intialState, action) {

  if (action.type === 'COUNTRY_DATA') {
    return action.payload.data;
  }

  return state;
};
