import ProductCard from '.';

const meta = {
  title: 'card/ProductCard',
  component: ProductCard,
  argTypes: {
    label: {
      control: {type: 'text'},
    },
    price: {
      control: {type: 'text'},
    },
    onClick: {
      control: {type: 'boolean'},
    },
  },
};

export default meta;

export const 상품_카드 = ({
  label = 'No Vase',
  price = '0',
  onClick,
}: {
  label: string;
  price: string;
  onClick: boolean;
}) => {
  const handleClick = () => {
    alert('클릭');
  };

  return (
    <ProductCard
      label={<ProductCard.Label>{label}</ProductCard.Label>}
      price={<ProductCard.Price>{price}</ProductCard.Price>}
      src="https://picsum.photos/1000/1000"
      onClick={onClick ? handleClick : undefined}
    />
  );
};
