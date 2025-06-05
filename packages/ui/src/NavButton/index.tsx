import classNames from 'classnames/bind';
import styles from './navButton.module.css';

const cx = classNames.bind(styles);

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  nav: React.ReactNode;
  isBorderRight?: boolean;
  isBorderLeft?: boolean;
}

export default function NavButton({nav, isBorderRight = true, isBorderLeft = false, ...props}: NavButtonProps) {
  return (
    <button className={cx('wrapper', {isBorderRight, isBorderLeft})} {...props}>
      {nav}
    </button>
  );
}

function TextButton({children}: {children: React.ReactNode}) {
  return <span className="typography-link">{children}</span>;
}

NavButton.TextButton = TextButton;
