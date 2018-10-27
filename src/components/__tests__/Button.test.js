import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

it('renders the correct text', () => {
  const component = shallow(
    <Button
      value={20}
      onClick={() => {}}
    />,
  );

  expect(component.find('button').text()).toBe('20');
});

it('clicks the button', () => {
  const handleClickMock = jest.fn();

  const component = shallow(
    <Button
      value={20}
      onClick={handleClickMock}
    />,
  );

  component.find('button').simulate('click');

  expect(handleClickMock).toHaveBeenCalledTimes(1);
  expect(handleClickMock).toHaveBeenCalledWith(20);
});
