import classNames from 'classnames/bind';
import styles from './flex.module.css';
import type {HTMLAttributes} from 'react';
const cx = classNames.bind(styles);
export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'center' | 'end';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
export default function Flex({children, direction, justify, align, gap, className, ...props}: FlexProps) {
  return (
    <div
      className={cx(
        'flex',
        direction && `direction-${direction}`,
        justify && `justify-${justify}`,
        align && `align-${align}`,
        gap && `gap-${gap}`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
