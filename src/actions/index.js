import axios from 'axios';

import * as actionTypes from './types';

export function fetchConfiguration() {
  const response = axios.get('http://pb-api.herokuapp.com/bars');

  return {
    type: actionTypes.FETCH_CONFIRGURATION,
    payload: response,
  };
}

export function changeSelectedBar(selectedBarIndex) {
  return {
    type: actionTypes.CHANGE_SELECTED_BAR,
    payload: selectedBarIndex,
  };
}

export function changeBarValue(newValue) {
  return {
    type: actionTypes.CHANGE_BAR_VALUE,
    payload: newValue,
  };
}
