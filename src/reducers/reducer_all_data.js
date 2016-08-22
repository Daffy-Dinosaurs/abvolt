import { COUNTRY_DATA } from '../actions/types';

console.log('TEST2: ', COUNTRY_DATA);

const intialState = {};

export default function(state = intialState, action) {
  console.log('this is what is being returned in all data: ', action.payload);
  if (action.type === 'COUNTRY_DATA') {
    return action.payload.data;
  }

  return state;
};
