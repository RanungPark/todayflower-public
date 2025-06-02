import DescriptionCard from '.';

const meta = {
  title: 'card/DescriptionCard',
  component: DescriptionCard,
  argTypes: {
    title: {
      control: {type: 'text'},
    },
    description: {
      control: {type: 'text'},
    },
  },
};

export default meta;

export const 설명_카드 = ({
  title = 'Stylish bouquets by florists',
  description = `The task of the organization, especially the strengthening and development of the structure allows us to
          assess the importance of the directions of progressive development.`,
}: {
  title: string;
  description: string;
}) => {
  return (
    <DescriptionCard
      title={<DescriptionCard.Title>{title}</DescriptionCard.Title>}
      description={<DescriptionCard.Description>{description}</DescriptionCard.Description>}
    />
  );
};
