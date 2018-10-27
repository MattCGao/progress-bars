import React from 'react';
import { mount } from 'enzyme';

import ButtonsContainer from '../ButtonsContainer';

import Root from '../../Root';

it('has the correct number of buttons', () => {
  const initialState = {
    progressBars: {
      buttons: [10, 20],
    },
  };
  const container = mount(
    <Root initialState={initialState}>
      <ButtonsContainer />
    </Root>,
  );

  container.update();

  expect(container.find('button').length).toEqual(2);

  container.unmount();
});
