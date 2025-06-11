import classNames from 'classnames/bind';
import styles from './Checkbox.module.css';
import Check from '../assets/icon/check.svg';
import SVG from '../SVG';

const cx = classNames.bind(styles);

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  handleChange?: () => void;
}

export default function Checkbox({children, handleChange, ...props}: CheckboxProps) {
  return (
    <label className={cx('labelStyled')}>
      <input
        type="checkbox"
        value={children?.toString()}
        onChange={handleChange}
        className={cx('hiddenInput')}
        {...props}
      />
      <SVG src={Check} />
      <span className="typography-body">{children}</span>
    </label>
  );
}
