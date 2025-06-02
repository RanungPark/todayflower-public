import TextButton from '../TextButton';
import ActionCard from '.';
import ArrowRight from '../assets/icon/arrow-right.svg';

const meta = {
  title: 'card/ActionCard',
  component: ActionCard,
  argTypes: {
    title: {
      control: {type: 'text'},
    },
    button: {
      control: {type: 'text'},
    },
  },
};

export default meta;

export const 엑션_카드 = ({title = 'Fresh Flowers', button = 'button'}: {title: string; button: string}) => {
  return (
    <ActionCard
      title={<ActionCard.title>{title}</ActionCard.title>}
      button={<TextButton rightIcon={ArrowRight}>{button}</TextButton>}
    />
  );
};
