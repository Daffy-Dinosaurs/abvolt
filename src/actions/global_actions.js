import * as globalAction from './types';

export function globeAction(country) {
  return {
    type: globalAction.GLOBE_ACTION_SELECTED,
    payload: country,
  };
}

export function selectCountry(country) {
  console.log('args in selectCountry action', country);
  return {
    type: globalAction.COUNTRY_SELECTED,
    payload: country.countryName,
  };
}

export function clearCountry() {
  return {
    type: globalAction.CLEAR_COUNTRY,
    payload: {},
  };
}

export function setIssue(issue) {
  return {
    type: globalAction.SET_ISSUE,
    payload: issue,
  };
}
