import React from 'react';
import { mount } from 'enzyme';

import BarsContainer from '../BarsContainer';

import Root from '../../Root';

it('has the correct number of bars', () => {
  const initialState = {
    progressBars: {
      barValues: [10, 20],
      limit: 120,
    },
  };
  const container = mount(
    <Root initialState={initialState}>
      <BarsContainer />
    </Root>,
  );

  container.update();

  expect(container.find('span').length).toEqual(2);

  container.unmount();
});
