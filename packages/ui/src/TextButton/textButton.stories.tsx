import ArrowRight from '../assets/icon/arrow-right.svg';
import ArrowLeft from '../assets/icon/arrow-left.svg';
import TextButton, {type TextButtonProps} from '.';

const meta = {
  title: 'button/TextButton',
  component: TextButton,
  argTypes: {
    disabled: {
      control: {type: 'boolean', default: false},
    },
    leftIcon: {control: {type: 'boolean', default: true}},
    rightIcon: {control: {type: 'boolean', default: true}},
    onlyIcon: {control: {type: 'boolean', default: true}},
  },
};

export default meta;

export const 텍스트_버튼 = ({disabled, leftIcon, rightIcon}: TextButtonProps) => {
  return (
    <TextButton
      disabled={disabled}
      leftIcon={leftIcon ? ArrowLeft : undefined}
      rightIcon={rightIcon ? ArrowRight : undefined}
    >
      button
    </TextButton>
  );
};
