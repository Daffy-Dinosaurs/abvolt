import { GET_WATER_DATA } from '../actions/types';

const intialState = {};

export default function(state = intialState, action) {

  if (action.type === 'GET_WATER_DATA') {
    return action.payload.data;
  }

  if (action.type === 'GLOBE_ACTION_SELECTED') {
    return action.payload;
  }

  return state;
};
