import classNames from 'classnames/bind';
import styles from './radioButton.module.css';

const cx = classNames.bind(styles);

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  handleChange?: () => void;
}

export default function RadioButton({children, handleChange, ...props}: RadioButtonProps) {
  return (
    <label className={cx('labelStyled')} htmlFor={props.id}>
      <input
        id={props.id}
        type="radio"
        value={children?.toString()}
        onChange={handleChange}
        className={cx('hiddenInput')}
        {...props}
      />
      <span className="typography-body">{children}</span>
    </label>
  );
}
