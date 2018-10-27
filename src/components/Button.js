import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;
    const { value } = this.state;
    if (onClick) {
      onClick(value);
    }
  }

  render() {
    const { value } = this.props;
    return (
      <React.Fragment>
        <button
          type="button"
          onClick={this.handleClick}
        >
          {value}
        </button>
      </React.Fragment>
    );
  }
}

Button.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  value: 10,
};

export default Button;
