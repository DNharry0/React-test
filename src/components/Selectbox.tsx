import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectBoxProps {
  options: Option[];
  onChange: (value: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ options, onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;