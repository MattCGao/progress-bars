import * as actionTypes from '../actions/types';

export const initialState = {
  buttons: [],
  barValues: [],
  limit: 100,
  selectedBarIndex: 0,
};

const progressBar = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CONFIRGURATION: {
      const { data } = action.payload;
      const configuration = {
        buttons: data.buttons.slice(),
        barValues: data.bars.slice(),
        limit: data.limit,
      };

      return { ...state, ...configuration };
    }
    case actionTypes.CHANGE_SELECTED_BAR: {
      return { ...state, selectedBarIndex: action.payload };
    }
    case actionTypes.CHANGE_BAR_VALUE: {
      const { selectedBarIndex, barValues } = state;
      const currentBarValues = barValues.slice();
      currentBarValues[selectedBarIndex] = (currentBarValues[selectedBarIndex] + action.payload) < 0
        ? 0 : currentBarValues[selectedBarIndex] + action.payload;

      return { ...state, barValues: currentBarValues };
    }

    default:
      return state;
  }
};

export default progressBar;
