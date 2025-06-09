import classNames from 'classnames/bind';
import styles from './button.module.css';
import SVG from '../SVG';

const cx = classNames.bind(styles);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  theme?: 'primary' | 'secondary' | 'tertiary';
  full?: boolean;
  leftIcon?: string;
  rightIcon?: string;
}

export default function Button({
  children,
  theme = 'primary',
  full = false,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx('button', 'typography-button', theme, {full, 'button-with-icon': leftIcon || rightIcon})}
      {...props}
    >
      {leftIcon ? <SVG src={leftIcon} /> : null}
      {children}
      {rightIcon ? <SVG src={rightIcon} /> : null}
    </button>
  );
}
