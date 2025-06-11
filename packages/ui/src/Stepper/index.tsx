import {useState} from 'react';
import Minus from '../assets/icon/minus.svg';
import Plus from '../assets/icon/plus.svg';
import classNames from 'classnames/bind';
import styles from './stepper.module.css';
import SVG from '../SVG';

const cx = classNames.bind(styles);

export interface StepperProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeValue?: (value: number) => void;
}

export default function Stepper({onChangeValue, ...props}: StepperProps) {
  const [value, setValue] = useState<number>(0);

  const handleMinusClick = () => {
    setValue((prev) => {
      const newValue = Math.max(prev - 1, 0);
      onChangeValue?.(newValue);
      return newValue;
    });
  };

  const handlePlusClick = () => {
    setValue((prev) => {
      const newValue = prev + 1;
      onChangeValue?.(newValue);
      return newValue;
    });
  };

  return (
    <div className={cx('wrapper')}>
      <button onClick={handleMinusClick}>
        <SVG src={Minus} width={20} height={20} />
      </button>
      <input
        readOnly
        type="text"
        value={value}
        aria-label="stepper"
        className={cx('input', 'typography-body')}
        {...props}
      />
      <button onClick={handlePlusClick}>
        <SVG src={Plus} width={20} height={20} />
      </button>
    </div>
  );
}
