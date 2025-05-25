import Button, {type ButtonProps} from '.';
import ArrowRight from '../assets/arrow-right-white.svg';
import ArrowLeft from '../assets/arrow-left-white.svg';

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
    iconLeft: {control: {type: 'boolean', default: true}},
    iconRight: {control: {type: 'boolean', default: true}},
  },
};

export default meta;

export const 버튼 = ({theme, full, disabled, iconLeft, iconRight}: ButtonProps) => {
  return (
    <div>
      <Button
        theme={theme}
        full={full}
        disabled={disabled}
        iconLeft={iconLeft ? ArrowLeft : undefined}
        iconRight={iconRight ? ArrowRight : undefined}
      >
        button
      </Button>
    </div>
  );
};
