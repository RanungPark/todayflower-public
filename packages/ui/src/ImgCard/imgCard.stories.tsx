import ImgCard from '.';

const meta = {
  title: 'card/ImgCard',
  component: ImgCard,
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

export const 이미지_카드 = ({
  label = 'Bouquets Fresh Flowers',
  price = '70',
  onClick,
}: {
  label?: string;
  price?: string;
  onClick: boolean;
}) => {
  const handleClick = () => {
    alert('클릭');
  };

  return (
    <ImgCard
      label={label ? <ImgCard.Label>{label}</ImgCard.Label> : null}
      price={price ? <ImgCard.Price>{price}</ImgCard.Price> : null}
      src="https://picsum.photos/1000/1000"
      onClick={onClick ? handleClick : undefined}
    />
  );
};
