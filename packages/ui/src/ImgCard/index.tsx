import classNames from 'classnames/bind';
import styles from './imgCard.module.css';

const cx = classNames.bind(styles);

interface ImgCardProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  label?: React.ReactNode;
  price?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function ImgCard({label, price, onClick, ...props}: ImgCardProps) {
  return (
    <div className={cx('wrapper', {onClick})} onClick={onClick}>
      <img aria-hidden {...props} />
      {label != null ? label : null}
      {price != null ? price : null}
    </div>
  );
}

function Label({children}: {children: React.ReactNode}) {
  return <span className={cx('typography-h6', 'label')}>{children}</span>;
}

function Price({children}: {children: React.ReactNode}) {
  return <span className={cx('typography-caption-bold', 'price')}>price: ₩ {children}</span>;
}

ImgCard.Label = Label;
ImgCard.Price = Price;
