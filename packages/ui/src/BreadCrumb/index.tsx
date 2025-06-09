import classNames from 'classnames/bind';
import styles from './breadCrumb.module.css';
import React from 'react';
import ChevronRight from '../assets/icon/chevron-right.svg';
import ChevronRightGray from '../assets/icon/chevron-right-gray.svg';
import SVG from '../SVG';

const cx = classNames.bind(styles);

export interface BreadCrumbProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  focus?: boolean;
}

export default function BreadCrumb({children, focus, ...props}: BreadCrumbProps) {
  const {disabled} = props;

  const Chevron = disabled ? ChevronRightGray : ChevronRight;

  return (
    <button
      className={cx('breadcrumb', 'typography-overline', focus ? 'focus' : 'notFocus', disabled ? 'disabled' : 'base')}
      {...props}
    >
      {children}
      <SVG src={Chevron} width={6} height={10} />
    </button>
  );
}
