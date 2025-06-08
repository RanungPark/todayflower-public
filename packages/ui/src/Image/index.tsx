import classNames from 'classnames/bind';
import styles from './image.module.css';

const cx = classNames.bind(styles);

export const RATIO_MAP = {
  '4:1': 'mini',
  '5:3': 'small',
  '4:3': 'medium',
  '1:1': 'large',
  '10:11': 'big',
};

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  size?: keyof typeof RATIO_MAP;
}

export default function Image({src, size = '1:1', ...props}: ImageProps) {
  return (
    <div className={cx('img-container', {[`${RATIO_MAP[size]}`]: true})} {...props}>
      <img src={src} loading="lazy" />
    </div>
  );
}
