import { REQUEST_COUNTRIES } from '../actions/types';
console.log('test: ', REQUEST_COUNTRIES);

export default function(state = [], action) {
  console.log('inside the request reducers: ', action.payload);
  if (action.type === 'REQUEST_COUNTRIES') {
    return state.concat(action.payload.data);
  }

  return state;
};
