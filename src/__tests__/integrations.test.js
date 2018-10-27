import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from '../Root';
import App from '../containers/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://pb-api.herokuapp.com/bars', {
    status: 200,
    response: { buttons: [12, 32, -31, -9], bars: [67, 26, 30], limit: 140 },
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a configuration', () => {
  const container = mount(
    <Root>
      <App />
    </Root>,
  );

  moxios.wait(() => {
    container.update();

    expect(container.find('button').length).toEqual(4);
    expect(container.find('option').length).toEqual(3);
    expect(container.find('span').length).toEqual(3);

    container.unmount();
  });
});
