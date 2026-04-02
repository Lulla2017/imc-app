import React from 'react';

const Button = ({
                  label = 'Bouton',
                  onClick = () => {},
                  type = 'button',
                  className = '',
                  disabled = false
                }) => {
  return (
      <button
          type={type}
          onClick={onClick}
          className={className}
          disabled={disabled}
      >
        {label}
      </button>
  );
};

export default Button;
