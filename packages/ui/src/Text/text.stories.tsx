import {colors} from '../colors';
import Text from '.';
import type {TextProps} from '.';

const meta = {
  title: 'base/Text',
  component: Text,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(colors),
      },
      description: '텍스트 색상',
    },
    size: {
      control: {
        type: 'select',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'subtitle',
          'body',
          'button',
          'link',
          'overline',
          'caption',
          'caption-small',
        ],
      },
    },
    bold: {
      control: {type: 'boolean'},
    },
    text: {
      control: {type: 'text'},
      description: '텍스트 테스트\n안녕하세요',
    },
  },
};

export default meta;

export const 텍스트 = ({color = 'black', size = 'body', bold, text = '텍스트'}: TextProps & {text: string}) => {
  return (
    <Text color={color} size={size} bold={bold}>
      {text}
    </Text>
  );
};
