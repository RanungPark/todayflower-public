import classNames from 'classnames/bind';
import styles from './textIconButton.module.css';

const cx = classNames.bind(styles);

export interface TextIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  leftIcon?: string;
  rightIcon?: string;
  onlyIcon?: string;
}

const TextIconButton = ({children, leftIcon, rightIcon, onlyIcon, ...restProps}: TextIconButtonProps) => {
  if (onlyIcon) {
    return (
      <button className={cx('button')} {...restProps}>
        <img src={onlyIcon} alt="icon" aria-hidden width={24} height={24} />
      </button>
    );
  }

  return (
    <button className={cx('button', 'typography-body ', {'button-with-icon': leftIcon || rightIcon})} {...restProps}>
      {leftIcon ? <img src={leftIcon} alt="icon" aria-hidden width={24} height={24} /> : null}
      {children}
      {rightIcon ? <img src={rightIcon} alt="icon" aria-hidden width={24} height={24} /> : null}
    </button>
  );
};

export default TextIconButton;
