import classNames from 'classnames/bind';
import styles from './productCard.module.css';

const cx = classNames.bind(styles);

interface ProductCardProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  label: React.ReactNode;
  price: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function ProductCard({label, price, onClick, ...props}: ProductCardProps) {
  return (
    <div className={cx('wrapper', {onClick})} onClick={onClick}>
      <img aria-hidden {...props} />
      <div className={cx('contents')}>
        {label}
        {price}
      </div>
    </div>
  );
}

function Label({children}: {children: React.ReactNode}) {
  return <span className={cx('typography-caption', 'label')}>{children}</span>;
}

function Price({children}: {children: React.ReactNode}) {
  return <span className={cx('typography-caption', 'price')}>₩ {children}</span>;
}

ProductCard.Label = Label;
ProductCard.Price = Price;
