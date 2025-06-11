import {useId} from 'react';
import RadioButton from '../RadioButton';

interface RadioButtonGroupProps {
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function RadioButtonGroup({name, options, value, onChange}: RadioButtonGroupProps) {
  const id = useId();

  return (
    <>
      {options.map((option, idx) => (
        <RadioButton
          key={`${id}-${idx}`}
          id={`${id}-${idx}`}
          name={name}
          value={option}
          checked={value === option}
          onChange={() => onChange(option)}
        >
          {option}
        </RadioButton>
      ))}
    </>
  );
}
