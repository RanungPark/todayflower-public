import classNames from 'classnames/bind';
import styles from './inputFieldDone.module.css';
import Edit from '../assets/icon/edit.svg';
import Check from '../assets/icon/check.svg';
import IconButton from '../IconButton';
import SVG from '../SVG';

const cx = classNames.bind(styles);

interface InputFieldDoneProps {
  input: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function InputFieldDone({input, onClick, disabled}: InputFieldDoneProps) {
  if (disabled) {
    return <div className={cx('disabled')}>{input}</div>;
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('input_wrapper')}>
        <SVG src={Check} alt="icon" />
        {input}
      </div>
      <IconButton src={Edit} onClick={onClick} />
    </div>
  );
}

function Input({children}: {children: React.ReactNode}) {
  return <span className={cx('typography-subtitle', 'input')}>{children}</span>;
}

InputFieldDone.Input = Input;
