import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import DropDownStyle from './DropDownStyle';

class DropDown extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      item: props.options[0] || {},
    }

    this.onChange = this.onChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onChange(e, option) {
    e.preventDefault();
    this.setState({ 
      open: true,
      item: option,
    })
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { open, item } = this.state;
    const { className, options } = this.props;

    return (
      <DropDownStyle className={className} open={open}>
        <button className="label" onClick={this.toggle}>
          {item.label}
          <i className="fas fa-chevron-down"></i>
        </button>
        <ul className="list">
          {map(options, option => (
            <li className="item" key={option.value}>
              <a
                href={option.href || '#'}
                onClick={(e) => this.onChange(e, option)}
              >{option.label}</a>
            </li>
          ))}
        </ul>
      </DropDownStyle>
    );
  }
}

DropDown.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string,
  }).isRequired).isRequired,
};

export default DropDown;
