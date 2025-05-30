import Button, {type ButtonProps} from '.';
import ArrowRight from '../assets/icon/arrow-right-white.svg';
import ArrowLeft from '../assets/icon/arrow-left-white.svg';

const meta = {
  title: 'button/Button',
  component: Button,
  argTypes: {
    theme: {
      control: {type: 'select', options: ['primary', 'secondary', 'tertiary']},
    },
    full: {
      control: {type: 'boolean', default: false},
    },
    disabled: {
      control: {type: 'boolean', default: false},
    },
    leftIcon: {control: {type: 'boolean', default: true}},
    rightIcon: {control: {type: 'boolean', default: true}},
  },
};

export default meta;

export const 버튼 = ({theme, full, disabled, leftIcon, rightIcon}: ButtonProps) => {
  return (
    <Button
      theme={theme}
      full={full}
      disabled={disabled}
      leftIcon={leftIcon ? ArrowLeft : undefined}
      rightIcon={rightIcon ? ArrowRight : undefined}
    >
      button
    </Button>
  );
};
