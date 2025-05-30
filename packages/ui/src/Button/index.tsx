import classNames from 'classnames/bind';
import styles from './button.module.css';

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
      className={cx('button', 'typography-button', theme, {full, 'button-with-icon': rightIcon || rightIcon})}
      {...props}
    >
      {leftIcon ? <img src={leftIcon} alt="icon" aria-hidden width={24} height={24} /> : null}
      {children}
      {rightIcon ? <img src={rightIcon} alt="icon" aria-hidden width={24} height={24} /> : null}
    </button>
  );
}
