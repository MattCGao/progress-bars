import React from 'react';
import { shallow } from 'enzyme';
import Bar from '../Bar';

it('renders the var according to value & limit', () => {
  const component = shallow(
    <Bar
      value={30}
      limit={120}
    />,
  );

  expect(component.find('.bar').prop('style').width).toBe('25%');
});
