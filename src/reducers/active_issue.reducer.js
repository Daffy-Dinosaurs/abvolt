import * as actionType from '../actions/types';

export default function(state = {}, action) {
  if (action.type === actionType.SET_ISSUE) {
    return { ...state, issue: action.payload };
  }

  return state;
}
