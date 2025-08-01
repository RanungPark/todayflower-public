import classNames from 'classnames/bind';
import styles from './grid.module.css';

const cx = classNames.bind(styles);

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: number;
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
}

export default function Grid({children, columns = 3, gap = 'sm', align, justify, ...props}: GridProps) {
  return (
    <div
      className={cx(
        'grid',
        `gap-${gap}`,
        `columns-${columns}`,
        {[`align-${align}`]: align},
        {[`justify-${justify}`]: justify},
      )}
      {...props}
    >
      {children}
    </div>
  );
}
