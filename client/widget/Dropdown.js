import React from 'react';
import PropTypes from 'prop-types';

/**
 * DROPDOWN COMPONENT
 *
 * Properties:
 * - options     {Array}    an array of dropdown option object. in the form of
 *                          [{text: 'displayed text', value: 'value for text'}]
 * - placeholder {String}   a place holder string
 * - onChange    {Function} invoked if sort selection is changed
 */
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortSelection: '',
    };
    this.handleSortSelectionChange = this.handleSortSelectionChange.bind(this);
  }

  handleSortSelectionChange(event) {
    const selection = event.target.value;
    this.setState({sortSelection: selection});
    this.props.onChange(selection);
  }

  render() {
    const {placeholder, options} = this.props;
    return (
      <select
        onChange={this.handleSortSelectionChange}
        value={this.state.sortSelection}
      >
        {
          placeholder.length > 0 &&
          <option>{placeholder}</option>
        }
        {
          options.map(option =>
            <option key={option.value} value={option.value}>
              {option.text}
            </option>)
        }
      </select>
    );
  }
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Dropdown;