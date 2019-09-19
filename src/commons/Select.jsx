import React from 'react';
import T from 'prop-types';
import isEqual from 'lodash/isEqual';
import SelectStyle from './SelectStyle';

class CustomSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      isOpen: false,
    };

    this.onChange = this.onChange.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
    this.hideOptions = this.hideOptions.bind(this);
    this.timmer = null;
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    if (!isEqual(nextProps.value, value)) {
      this.setState({ value: nextProps.value });
    }
  }

  onChange(e, value) {
    e.preventDefault();
    const { onChange } = this.props;
    this.setState({ value, isOpen: false });
    onChange(value);
  }

  toggleOptions() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  hideOptions() {
    clearTimeout(this.timmer);
    this.timmer = setTimeout(() => this.setState({ isOpen: false }), 500);
  }

  render() {
    const { id, options, keyValue, label } = this.props;
    const { isOpen, value } = this.state;
    return (
      <SelectStyle hasValue={value}>
        <div className="custom-select">
          <input type="hidden" id={id} name={id} value={value || ''} />
          <div className="custom-select__styled">
            <span
              role="button"
              tabIndex="0"
              className="custom-select__text"
              onClick={this.toggleOptions}
              onBlur={this.hideOptions}
            >
              {value || label}
            </span>
            {isOpen && (
              <ul className="custom-select__options">
                {
                  options.map(option => (
                    <li key={option.id}>
                      <a
                        className="custom-select-item"
                        id={option.id}
                        href="#"
                        title={option[keyValue]}
                        onClick={e => this.onChange(e, option[keyValue])}
                      >
                        {option[keyValue]}
                      </a>
                    </li>
                  ))
                }
              </ul>
            )}
          </div>
        </div>
      </SelectStyle>
    );
  }
}

CustomSelect.defaultProps = {
  valueType: 'id',
  onChange: () => {},
};

CustomSelect.propTypes = {
  id: T.string.isRequired,
  options: T.arrayOf(T.shape({})).isRequired,
  value: T.string.isRequired,
  valueType: T.string,
  onChange: T.func,
};

export default CustomSelect;
