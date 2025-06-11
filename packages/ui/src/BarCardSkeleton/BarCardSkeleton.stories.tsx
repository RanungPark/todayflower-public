import BarCardSkeleton from '.';

const meta = {
  title: 'skeleton/BarCardSkeleton',
  component: BarCardSkeleton,
  argTypes: {
    disabled: {
      width: {type: 'number'},
      height: {type: 'number'},
    },
  },
};

export default meta;

export const 바_카드_스켈레톤 = ({width, height}: {width?: number; height?: number}) => {
  return <BarCardSkeleton width={width} height={height} />;
};
