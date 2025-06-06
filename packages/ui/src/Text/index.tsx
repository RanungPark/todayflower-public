import classNames from 'classnames/bind';
import styles from './text.module.css';
import type {Color} from '../colors';
import {Fragment} from 'react/jsx-runtime';

const cx = classNames.bind(styles);

export type TypographySize =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle'
  | 'body'
  | 'button'
  | 'link'
  | 'overline'
  | 'caption'
  | 'caption-small';

export type TextProps<T extends React.ElementType = 'div'> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  children?: React.ReactNode;
  color?: Color;
  size?: TypographySize;
  bold?: boolean;
  inline?: boolean;
};

export function Text<T extends React.ElementType = 'div'>({
  children,
  color = 'black',
  size = 'body',
  bold = false,
  inline = false,
  as,
  ...props
}: TextProps<T>) {
  const Component = as || 'div';

  if (typeof children !== 'string') {
    return (
      <Component
        className={cx({
          [`color-${color}`]: color,
          [`typography-${size}`]: true,
          bold,
          inline,
        })}
        {...props}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={cx({
        [`color-${color}`]: color,
        [`typography-${size}`]: true,
        bold,
        inline,
      })}
      {...props}
    >
      {children.split('\\n').map((text: string, idx: number) => (
        <Fragment key={idx}>
          {text}
          <br />
        </Fragment>
      ))}
    </Component>
  );
}
