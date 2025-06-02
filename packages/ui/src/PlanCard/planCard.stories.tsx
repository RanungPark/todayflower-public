import PlanCard from '.';

const meta = {
  title: 'card/PlanCard',
  component: PlanCard,
  argTypes: {
    label: {
      control: {type: 'text'},
    },
    list: {
      control: {type: 'array'},
    },
  },
};

export default meta;

const initialList = [
  'Price ₩ 45',
  'Free Delivery',
  'Best for a budget',
  'Glass vase with first delivery',
  'Save up to 25%',
];

export const 플랜_카드 = ({label = 'Classic', list = initialList}: {label: string; list: string[]}) => {
  return <PlanCard plan={<PlanCard.Plan label={label} list={list} />} src="https://picsum.photos/1000/1000" />;
};
