import classNames from 'classnames/bind';
import styles from './gnb.module.css';

const cx = classNames.bind(styles);

interface GNBProps {
  leftNav: React.ReactNode;
  rightNav: React.ReactNode;
  leftNav2nd?: React.ReactNode;
  rightNav2nd?: React.ReactNode;
}

export default function GNB({leftNav, rightNav, leftNav2nd, rightNav2nd}: GNBProps) {
  const leftContainer = (
    <div className={cx('flex')}>
      {leftNav}
      {leftNav2nd && leftNav2nd}
    </div>
  );

  const rightContainer = (
    <div className={cx('flex')}>
      {rightNav2nd && rightNav2nd}
      {rightNav}
    </div>
  );

  return (
    <nav className={cx('wrapper')}>
      <div>{leftContainer}</div>
      <div>{rightContainer}</div>
    </nav>
  );
}
