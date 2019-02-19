import React from 'react';

import color from ':theme/color';

export type InputOnlyProps = {
  disabled?: boolean;
  inline?: boolean;
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
    disabled,
    inline = false,
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
          appearance: none;
          background-color: ${color.clear};
          border: 0;
          outline: none;
          padding: 0;
        }
      `}</style>
      <style jsx>{`
        input {
          display: ${inline ? 'inline-block' : 'block'};
        }
      `}</style>
    </>
  )
);
