import classNames from 'classnames/bind';
import styles from './button.module.css';

const cx = classNames.bind(styles);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  theme?: 'primary' | 'secondary' | 'tertiary';
  full?: boolean;
  iconLeft?: string;
  iconRight?: string;
}

function Button({children, theme = 'primary', full = false, iconLeft, iconRight, ...restProps}: ButtonProps) {
  return (
    <button className={cx('button', 'typography-button', 'button-with-icon', theme, {full})} {...restProps}>
      {iconLeft ? <img src={iconLeft} alt="icon" aria-hidden width={24} height={24} /> : null}
      {children}
      {iconRight ? <img src={iconRight} alt="icon" aria-hidden width={24} height={24} /> : null}
    </button>
  );
}

export default Button;
