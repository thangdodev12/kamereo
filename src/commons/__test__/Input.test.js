import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';
import '../../enzyme-setup';

describe('Input', () => {
  let props = {};

  beforeEach(() => {
    props = {
      id: 'id',
      name: 'name',
      onChange: jest.fn(),
      label: 'label',
      type: 'text',
      required: true,
      value: 'value',
      placeholder: 'placeholder',
      pattern: undefined,
    };
  });

  it ('render should correctly and test function onchange', () => {
    const Component = shallow(<Input {...props} />);
    expect(Component.find('input')).toHaveLength(1);
    Component.find('input').simulate('change');
    expect(props.onChange).toHaveBeenCalled();
  });
});
