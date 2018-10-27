import React from 'react';
import { mount } from 'enzyme';

import App from '../App';

import Root from '../../Root';

it('has the correct number of bars', () => {
  const initialState = {
    progressBars: {
      buttons: [20, 30, -40],
      barValues: [10, 20],
      limit: 90,
    },
  };
  const container = mount(
    <Root initialState={initialState}>
      <App />
    </Root>,
  );

  container.update();

  expect(container.find('span').length).toEqual(2);
  expect(container.find('button').length).toEqual(3);
  expect(container.find('option').length).toEqual(2);

  container.unmount();
});
