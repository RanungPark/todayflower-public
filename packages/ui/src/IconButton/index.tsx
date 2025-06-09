import classNames from 'classnames/bind';
import styles from './iconButton.module.css';
import SVG from '../SVG';

const cx = classNames.bind(styles);

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  width?: number;
  height?: number;
}

export default function IconButton({src, width, height, ...props}: IconButtonProps) {
  return (
    <button className={cx('button')} {...props}>
      <SVG src={src} width={width} height={height} />
    </button>
  );
}
