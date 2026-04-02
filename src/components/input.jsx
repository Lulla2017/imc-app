import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({
                      type = 'number',
                      placeholder = '',
                      value = '',
                      onChange = () => {},
                      label = '',
                      unit = '',
                      min = 0,
                      max = 300,
                      step = 0.1,
                      id = '',
                      required = true,
                      error = ''
                  }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="imc-input-group">
            {label && (
                <label htmlFor={id} className="imc-input-label">
                    {label}
                    {unit && <span className="unit">({unit})</span>}
                </label>
            )}
            <div className="imc-input-container">
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required={required}
                    className={`imc-input-field ${isFocused ? 'focused' : ''} ${error ? 'error' : ''}`}
                    min={min}
                    max={max}
                    step={step}
                    aria-label={label}
                    aria-required={required}
                    aria-invalid={!!error}
                />
                {unit && <span className="input-unit-badge">{unit}</span>}
            </div>
            {error && (
                <span className="imc-input-error" role="alert">
                    {error}
                </span>
            )}
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    unit: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    id: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.string
};

export default Input;
