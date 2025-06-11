import {useId} from 'react';
import Checkbox from '../Checkbox';

interface CheckboxGroupProps {
  name: string;
  options: string[];
  value: string[];
  onChange: (value: string) => void;
}

export default function CheckboxGroup({name, options, value, onChange}: CheckboxGroupProps) {
  const id = useId();

  return (
    <>
      {options.map((option, idx) => (
        <Checkbox
          key={`${id}-${idx}`}
          id={`${id}-${idx}`}
          name={name}
          value={option}
          checked={value.includes(option)}
          onChange={() => onChange(option)}
        >
          {option}
        </Checkbox>
      ))}
    </>
  );
}
