import Image, {RATIO_MAP, type ImageProps} from '.';

const meta = {
  title: 'base/Image',
  component: Image,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: Object.keys(RATIO_MAP),
      },
      description: '이미지 비율',
    },
  },
};

export default meta;

export const 이미지 = ({size}: ImageProps) => {
  return (
    <div style={{width: '50vw'}}>
      <Image src="https://picsum.photos/200/300" size={size} />
    </div>
  );
};
