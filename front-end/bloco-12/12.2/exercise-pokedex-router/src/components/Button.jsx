import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../styles/Button.css';

class Button extends Component {
  render() {
    const { text, onClick, disabled, className } = this.props;
    return (
      <button
        type="button"
        className={ className }
        onClick={ onClick }
        disabled={ disabled }
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  className: propTypes.string.isRequired,
  disabled: propTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
