import React from 'react';
import { shallow } from 'enzyme';

import DropDown from '../DropDown';
import '../../enzyme-setup';

describe('DropDown', () => {
  let props = {};

  beforeEach(() => {
    props = {
      className: 'className',
      options: [
        { href: '#', label: 'label', value: 'value' },
      ],
    };
  });

  it('render should correctly and check element action', () => {
    const component = shallow(<DropDown {...props} />);
    component.instance().toggle = jest.fn();
    const { toggle } = component.instance();
    const button = component.find('button');
    expect(button).toHaveLength(1);
    expect(component.find('li')).toHaveLength(props.options.length);
    button.simulate('click');
    expect(component.state().open).toEqual(true);
  })
});
