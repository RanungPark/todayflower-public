import classNames from 'classnames/bind';
import styles from './textButton.module.css';
import SVG from '../SVG';

const cx = classNames.bind(styles);

export interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  leftIcon?: string;
  rightIcon?: string;
}

export default function TextButton({children, leftIcon, rightIcon, ...props}: TextButtonProps) {
  return (
    <button className={cx('button', 'typography-body', {'button-with-icon': leftIcon || rightIcon})} {...props}>
      {leftIcon ? <SVG src={leftIcon} /> : null}
      {children}
      {rightIcon ? <SVG src={rightIcon} /> : null}
    </button>
  );
}
