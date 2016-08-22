import * as globalAction from './types';

export function globeAction(country) {

  return {
    type: globalAction.GLOBE_ACTION_SELECTED,
    payload: country,
  };
}

export function selectCountry(country) {

  return {
    type: globalAction.COUNTRY_SELECTED,
    payload: country,
  };
}

export function clearCountry() {

  return {
    type: globeAction.CLEAR_COUNTRY,
    payload: {},
  };
}
