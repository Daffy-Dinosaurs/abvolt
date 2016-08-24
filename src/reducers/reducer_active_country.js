const intialState = {};

export default function(state = intialState, action) {

  if (action.type === 'COUNTRY_SELECTED') {
    return { ...state, country: action.payload };
  }

  //NOTE: Not sure if we should even ever use this
  if (action.type === 'CLEAR_COUNTRY') {
    return intialState;
  }

  return state;
}
