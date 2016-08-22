import { GET_NEWS } from '../actions/media_actions';

const intialState = {};

export default function(state = intialState, action) {

  if (action.type === 'GET_NEWS') {
    return action.payload.data;
  }

  if (action.type === 'CLEAR_NEWS') {
    return intialState;
  }

  return state;
}
