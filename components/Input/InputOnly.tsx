import React from 'react';

import color from ':theme/color';
import font from ':theme/font';

export type InputOnlyProps = {
  autoFocus?: boolean;
  disabled?: boolean;
  inline?: boolean;
  inverse?: boolean;
  maxLength?: number;
  minLength?: number;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  type?: string;
  value?: string;
};

export default React.memo<InputOnlyProps>(
  ({
    autoFocus,
    disabled,
    inline = false,
    inverse = false,
    maxLength,
    minLength,
    name,
    onChange,
    pattern,
    placeholder,
    readOnly,
    required,
    type = 'text',
    value,
  }) => (
    <>
      <input
        autoFocus={autoFocus}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        onChange={onChange}
        pattern={pattern}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        type={type}
        value={value}
      />
      <style jsx>{`
        input {
          ${font.medium}
          appearance: none;
          background-color: ${color.clear};
          border: 0;
          outline: none;
          width: 100%;
        }
      `}</style>
      <style jsx>{`
        input {
          color: ${inverse ? color.white : 'inherit'};
          display: ${inline ? 'inline-block' : 'block'};
        }
      `}</style>
    </>
  )
);
