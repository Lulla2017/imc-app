import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
                    type = 'button',
                    onClick = () => {},
                    className = '',
                    disabled=false,
                    children
                }) => {
  return (
      <button
          type={type}
          onClick={onClick}
          className={className}
          disabled={disabled}
      >
        {children}
      </button>
  );
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node
};

export default Button;
