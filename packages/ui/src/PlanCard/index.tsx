import classNames from 'classnames/bind';
import styles from './planCard.module.css';
import Button from '../Button';
import {useId, useState} from 'react';
import CheckWhite from '../assets/icon/check-white.svg';

const cx = classNames.bind(styles);

interface PlanCardProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  plan: React.ReactNode;
  onChangeSelect?: (value: boolean) => void;
}

export default function PlanCard({plan, onChangeSelect, ...props}: PlanCardProps) {
  const [select, setSelect] = useState(false);

  const handleClick = () => {
    onChangeSelect?.(!select);
    setSelect((prev) => !prev);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('contents')}>
        <img aria-hidden {...props} />
        {plan}
      </div>
      <Button onClick={handleClick} full leftIcon={select ? CheckWhite : undefined}>
        {select ? 'selected' : 'select'}
      </Button>
    </div>
  );
}

function Plan({label, list}: {label: string; list: string[]}) {
  const id = useId();

  return (
    <div className={cx('plan')}>
      <span className="typography-subtitle">{label}</span>
      <ul className={cx('list')}>
        {list.map((item, idx) => (
          <li key={`${id}-${idx}`} className="typography-body">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

PlanCard.Plan = Plan;
