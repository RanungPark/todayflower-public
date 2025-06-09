import IconButton from '../IconButton';
import NavButton from '.';
import Menu from '../assets/icon/menu.svg';

const meta = {
  title: 'nav/NavButton',
  component: NavButton,
  argTypes: {
    text: {
      control: {type: 'text'},
    },
    isIcon: {
      control: {type: 'boolean'},
    },
    isBorderRight: {
      control: {type: 'boolean'},
    },
  },
};

export default meta;

export const 네비게이션_버튼 = ({
  text = 'Link',
  isIcon,
  isBorderRight,
}: {
  text: string;
  isIcon: boolean;
  isBorderRight: boolean;
}) => {
  return (
    <NavButton
      isBorderRight={isBorderRight}
      nav={isIcon ? <IconButton src={Menu} /> : <NavButton.TextButton>{text}</NavButton.TextButton>}
    />
  );
};
