import classNames from 'classnames/bind';
import styles from './descriptionCard.module.css';

const cx = classNames.bind(styles);

interface DescriptionCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

export default function DescriptionCard({title, description}: DescriptionCardProps) {
  return (
    <div className={cx('wrapper')}>
      {title}
      {description}
    </div>
  );
}

function Title({children}: {children: React.ReactNode}) {
  return <h3 className="typography-h3">{children}</h3>;
}

function Description({children}: {children: React.ReactNode}) {
  return <p className="typography-body">{children}</p>;
}

DescriptionCard.Title = Title;
DescriptionCard.Description = Description;
