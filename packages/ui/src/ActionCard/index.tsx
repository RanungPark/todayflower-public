import classNames from 'classnames/bind';
import styles from './actionCard.module.css';

const cx = classNames.bind(styles);

interface ActionCardProps {
  title: React.ReactNode;
  button: React.ReactNode;
}

export default function ActionCard({title, button}: ActionCardProps) {
  return (
    <div className={cx('wrapper')}>
      {title}
      <div className={cx('button')}>{button}</div>
    </div>
  );
}

function Title({children}: {children: React.ReactNode}) {
  return <h3 className="typography-h3">{children}</h3>;
}

ActionCard.title = Title;
