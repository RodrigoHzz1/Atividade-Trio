import React from 'react';
import './style.css';

export default function Input({ label, type = 'text', placeholder, value, onChange, name, error, required }) {
  return (
    <div className="input-container">
      {label && (
        <label htmlFor={name} className="input-label">
          {label} {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input-field ${error ? 'input-error' : ''}`}
        required={required}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}