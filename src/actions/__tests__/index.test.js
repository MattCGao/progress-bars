import * as actions from '..';
import * as actionTypes from '../types';

describe('fetchConfiguration', () => {
  it('has the correct type: FETCH_CONFIRGURATION', () => {
    const action = actions.fetchConfiguration();

    expect(action.type).toEqual(actionTypes.FETCH_CONFIRGURATION);
  });
});


describe('changeSelectedBar', () => {
  it('has the correct type: CHANGE_SELECTED_BAR', () => {
    const action = actions.changeSelectedBar();
    expect(action.type).toEqual(actionTypes.CHANGE_SELECTED_BAR);
  });

  it('has the correct value of CHANGE_SELECTED_BAR', () => {
    const action = actions.changeSelectedBar(10);

    expect(action.payload).toEqual(10);
  });
});

describe('changeBarValue', () => {
  it('has the correct type: CHANGE_BAR_VALUE', () => {
    const action = actions.changeBarValue();
    expect(action.type).toEqual(actionTypes.CHANGE_BAR_VALUE);
  });

  it('has the correct value of CHANGE_BAR_VALUE', () => {
    const action = actions.changeBarValue(10);

    expect(action.payload).toEqual(10);
  });
});
