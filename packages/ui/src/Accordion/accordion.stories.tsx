import Accordion from '.';

const meta = {
  title: 'util/Accordion',
  component: Accordion,
  argTypes: {
    title: {
      control: {type: 'text'},
    },
    content: {
      control: {type: 'text'},
    },
  },
};

export default meta;

export const 아코디언 = ({
  title = 'How often will I get a new bouquet?',
  content = `Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. What's more, you can also pay for your subscription as you go or pay entirely upfront. Choose any combination that works for you!`,
}: {
  title: string;
  content: string;
}) => {
  return (
    <Accordion
      title={<Accordion.Title>{title}</Accordion.Title>}
      content={<Accordion.Content>{content}</Accordion.Content>}
    />
  );
};
