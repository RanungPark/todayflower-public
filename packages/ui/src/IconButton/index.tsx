import classNames from 'classnames/bind';
import styles from './IconButton.module.css';

const cx = classNames.bind(styles);

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}

export default function IconButton({icon, ...props}: IconButtonProps) {
  return (
    <button className={cx('button')} {...props}>
      <img src={icon} alt="icon" aria-hidden width={24} height={24} />
    </button>
  );
}
