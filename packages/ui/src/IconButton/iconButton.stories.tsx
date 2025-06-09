import ArrowLeft from '../assets/icon/arrow-left.svg';
import IconButton, {type IconButtonProps} from '.';

const meta = {
  title: 'button/IconButton',
  component: IconButton,
  argTypes: {
    disabled: {
      control: {type: 'boolean', default: false},
    },
  },
};

export default meta;

export const 아이콘_버튼 = ({disabled}: IconButtonProps) => {
  return (
    <IconButton disabled={disabled} src={ArrowLeft}>
      button
    </IconButton>
  );
};
