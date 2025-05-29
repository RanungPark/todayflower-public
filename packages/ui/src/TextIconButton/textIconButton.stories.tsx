import ArrowRight from '../assets/arrow-right.svg';
import ArrowLeft from '../assets/arrow-left.svg';
import TextIconButton, {type TextIconButtonProps} from '.';

const meta = {
  title: 'button/TextIconButton',
  component: TextIconButton,
  argTypes: {
    full: {
      control: {type: 'boolean', default: false},
    },
    disabled: {
      control: {type: 'boolean', default: false},
    },
    leftIcon: {control: {type: 'boolean', default: true}},
    rightIcon: {control: {type: 'boolean', default: true}},
    onlyIcon: {control: {type: 'boolean', default: true}},
  },
};

export default meta;

export const 버튼 = ({full, disabled, leftIcon, rightIcon, onlyIcon}: TextIconButtonProps) => {
  return (
    <div>
      <TextIconButton
        full={full}
        disabled={disabled}
        leftIcon={leftIcon ? ArrowLeft : undefined}
        rightIcon={rightIcon ? ArrowRight : undefined}
        onlyIcon={onlyIcon ? ArrowRight : undefined}
      >
        button
      </TextIconButton>
    </div>
  );
};
