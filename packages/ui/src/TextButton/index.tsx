import classNames from 'classnames/bind';
import styles from './TextButton.module.css';

const cx = classNames.bind(styles);

export interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  leftIcon?: string;
  rightIcon?: string;
}

export default function TextButton({children, leftIcon, rightIcon, ...props}: TextButtonProps) {
  return (
    <button className={cx('button', 'typography-body', {'button-with-icon': leftIcon || rightIcon})} {...props}>
      {leftIcon ? <img src={leftIcon} alt="icon" aria-hidden width={24} height={24} /> : null}
      {children}
      {rightIcon ? <img src={rightIcon} alt="icon" aria-hidden width={24} height={24} /> : null}
    </button>
  );
}
