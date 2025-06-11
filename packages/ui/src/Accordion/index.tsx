import classNames from 'classnames/bind';
import styles from './accordion.module.css';
import {useState} from 'react';
import ArrowBottomRight from '../assets/icon/arrow-bottom-right.svg';
import ArrowTopRight from '../assets/icon/arrow-top-right.svg';
import SVG from '../SVG';

const cx = classNames.bind(styles);

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export default function Accordion({title, content}: AccordionProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={cx('wrapper', {flex: open})} onClick={handleClick}>
      <div className={cx('title_wrapper')}>
        {title}
        <SVG src={open ? ArrowBottomRight : ArrowTopRight} />
      </div>
      {open && content}
    </div>
  );
}

function Title({children}: {children: React.ReactNode}) {
  return <span className={cx('typography-h4', 'title')}>{children}</span>;
}

function Content({children}: {children: React.ReactNode}) {
  return <p className="typography-body">{children}</p>;
}

Accordion.Title = Title;
Accordion.Content = Content;
