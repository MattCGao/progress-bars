import progressBarsReducer from '../progressBars';
import * as actionTypes from '../../actions/types';


it('hanles actions with unknown type', () => {
  const newState = progressBarsReducer({}, { type: 'test_type_only' });

  expect(newState).toEqual({});
});

it('handle action of type FETCH_CONFIGRURATION', () => {
  const action = {
    type: actionTypes.FETCH_CONFIRGURATION,
    payload: {
      data: {
        buttons: [1, 2, 3],
        bars: [10, 20],
        limit: 110,
      },
    },
  };
  const newState = progressBarsReducer({}, action);

  expect(newState).toEqual({
    buttons: [1, 2, 3],
    barValues: [10, 20],
    limit: 110,
  });
});

it('handle action of type CHANGE_SELECTED_BAR', () => {
  const action = {
    type: actionTypes.CHANGE_SELECTED_BAR,
    payload: 2,
  };
  const newState = progressBarsReducer({}, action);
  expect(newState).toEqual({
    selectedBarIndex: 2,
  });
});

it('handle action of type CHANGE_BAR_VALUE', () => {
  const state = {
    selectedBarIndex: 0,
    barValues: [10],
  };
  const action = {
    type: actionTypes.CHANGE_BAR_VALUE,
    payload: 20,
  };
  const newState = progressBarsReducer(state, action);
  expect(newState.barValues[0]).toEqual(30);
});

it('handle action of type CHANGE_BAR_VALUE should not be minus ', () => {
  const state = {
    selectedBarIndex: 0,
    barValues: [10],
  };
  const action = {
    type: actionTypes.CHANGE_BAR_VALUE,
    payload: -20,
  };
  const newState = progressBarsReducer(state, action);
  expect(newState.barValues[0]).toEqual(0);
});
