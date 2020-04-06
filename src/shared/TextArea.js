import React from 'react';

const TextArea = ({ label, placeholder, value, onChange, className, rows = 5 }) => (
  <div className={`w-full flex flex-col ${className}`}>
    <label className="uppercase tracking-wide text-gray-600 text-center xs:text-5xl lg:text-xl mb-2">
      {label}
    </label>
    <textarea
      className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-5 lg:px-4 text-center xs:text-4xl lg:text-xl focus:outline-none focus:bg-white focus:border-gray-500" /** leading-tight */
      rows={rows}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export default TextArea;
