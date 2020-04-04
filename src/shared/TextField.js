import React from 'react';

const TextField = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  disabled = false,
  type = 'text',
}) => (
  <div className={`w-full flex flex-col ${className}`}>
    {label && (
      <label className="uppercase tracking-wide text-gray-600 xs:text-center lg:text-left xs:text-4xl lg:text-xs xs:font-normal lg:font-semibold mb-2">
        {label}
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-5 lg:px-4 xs:text-center lg:text-left xs:text-4xl lg:text-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type={type}
          disabled={disabled}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </label>
    )}
  </div>
);

export default TextField;
