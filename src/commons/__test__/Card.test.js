import React from 'react';
import { shallow } from 'enzyme';

import Card from '../Card';
import '../../enzyme-setup';

describe('Card', () => {
  let props = {};

  beforeEach(() => {
    props = {
      data: {
        id: '',
        logoUrl: './images/photo.png',
        name: 'K.O.I The',
        address: '512 Ho Tung Mau',
        district: 'D1',
        city: 'Ho Chi Minh',
        phone: '(338) 8869944',
        redInvoive: {
          name: 'K.O.I The International Company',
          address: '512 Ho Tung Mau',
          district: 'D1',
          city: 'Ho Chi Minh',
          taxCode: 'P7744944',
        },
      },
      edit: jest.fn(),
    };
  });

  it('render should correctly', () => {
    const View = shallow(<Card {...props} />);
    expect(View.find('img')).toHaveLength(1);
    expect(View.find('div')).toHaveLength(2);
    expect(View.find('h5')).toHaveLength(2);
    expect(View.find('ul')).toHaveLength(2);
    expect(View.find('li')).toHaveLength(6);
    expect(View.find('button')).toHaveLength(1);
    View.find('button').simulate('click');
    expect(props.edit).toHaveBeenCalled();
  })
})