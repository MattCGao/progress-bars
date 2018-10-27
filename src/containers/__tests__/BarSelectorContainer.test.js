import React from 'react';
import { mount } from 'enzyme';

import BarSelectorContainer from '../BarSelectorContainer';

import Root from '../../Root';

it('has the correct number of bars', () => {
  const initialState = {
    progressBars: {
      barValues: [10, 20],
    },
  };
  const container = mount(
    <Root initialState={initialState}>
      <BarSelectorContainer />
    </Root>,
  );

  container.update();

  expect(container.find('option').length).toEqual(2);

  container.unmount();
});
