import React from 'react';
import { shallow } from 'enzyme';

import BarSelector from '../BarSelector';


it('renders the correct number of options', () => {
  const component = shallow(
    <BarSelector
      bars={[30, 40, 0]}
      onChange={() => {}}
    />,
  );

  expect(component.find('option').length).toEqual(3);
});

it('changes the selected Bar', () => {
  const handleChangeMock = jest.fn();

  const component = shallow(
    <BarSelector
      bars={[30, 40, 0]}
      onChange={handleChangeMock}
    />,
  );

  component.find('select').simulate('change', {
    target: {
      value: '2',
    },
  });

  expect(handleChangeMock).toHaveBeenCalledTimes(1);
  expect(handleChangeMock).toHaveBeenCalledWith(2);
  expect(component.find('select').prop('value')).toEqual(2);
});
