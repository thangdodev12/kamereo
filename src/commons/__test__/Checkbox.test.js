import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from '../Checkbox';
import '../../enzyme-setup';

describe('Checkbox', () => {
  let props = {};

  beforeEach(() => {
    props = {
      label: 'Store Name',
      id: 's1',
      onChange: jest.fn(),
      className: 'class',
      name: 's1',
      checked: false,
    };
  });

  it('render should correctly', () => {
    const View = shallow(<Checkbox {...props} />);

    expect(View.find('input')).toHaveLength(1);
    expect(View.find('label')).toHaveLength(1);
    View.find('input[type="checkbox"]').simulate('change');
    expect(props.onChange).toHaveBeenCalled();
  });
})