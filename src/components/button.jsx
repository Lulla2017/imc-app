import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  onClick, 
  disabled = false, 
  className = '', 
  ariaLabel, 
  icon, 
  iconPosition = 'left', 
  children 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`pagination-button ${className}`}
      aria-label={ariaLabel}
    >
      {icon && iconPosition === 'left' && <FontAwesomeIcon icon={icon} />}
      {children && <span>{children}</span>}
      {icon && iconPosition === 'right' && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node
};

export default Button;