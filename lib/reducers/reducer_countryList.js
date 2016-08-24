import { REQUEST_COUNTRIES } from '../actions/types';

export default function (state = [], action) {
  if (action.type === 'REQUEST_COUNTRIES') {
    return state.concat(action.payload.data);
  }

  return state;
};