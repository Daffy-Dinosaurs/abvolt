import * as dbActions from './types';
import axios from 'axios';

//------------------------------------------------------------------------------
// Since the data is currently not changing we dont need to make a call to the
// backend every time we select a new contry. For breavity we will only call
// if the country have not been called yet
//------------------------------------------------------------------------------

//NOTE: For now we will write the logic in the action
export function getAllData() {
  const url = '/api/statistics';
  const request = axios.get(url);

  return {
    type: dbActions.COUNTRY_DATA,
    payload: request
  };
}

export function requestCountries() {
  const url = '/api/countries';
  const request = axios.get(url);

  return {
    type: dbActions.REQUEST_COUNTRIES,
    payload: request
  };
}

//TODO: This actions should be reconfigured to perform this call in the reducer.
//NOTE: Double check to see if actions have access to the context. If so then
// we should make the call here instead of reducer and leave reducer to just join
// new content with the state.

//NOTE: This should be changed to get country specific data. Search if country
// has data populated. If so then render data. If not make call to back end
export function getWaterData(pCountryId) {

  const url = '/api/statistics/' + pCountryId;
  const request = axios.get(url);

  return {
    type: dbActions.GET_WATER_DATA,
    payload: request
  };
}