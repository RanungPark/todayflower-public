import GNB from '.';
import NavButton from '../NavButton';
import IconButton from '../IconButton';
import Menu from '../assets/icon/menu.svg';
import ShoppingBag from '../assets/icon/shopping-bag.svg';

const meta = {
  title: 'nav/GNB',
  component: GNB,
  argTypes: {
    secondNav: {
      control: {type: 'boolean'},
    },
    isIcon: {
      control: {type: 'boolean'},
    },
  },
};

export default meta;

export const 네비게이션 = ({secondNav, isIcon}: {secondNav: boolean; isIcon: boolean}) => {
  return (
    <GNB
      leftNav={
        <NavButton nav={isIcon ? <IconButton icon={Menu} /> : <NavButton.TextButton>Shop</NavButton.TextButton>} />
      }
      rightNav={
        <NavButton
          nav={isIcon ? <IconButton icon={ShoppingBag} /> : <NavButton.TextButton>Cart</NavButton.TextButton>}
          isBorderRight={false}
          isBorderLeft={!secondNav}
        />
      }
      leftNav2nd={secondNav && <NavButton nav={<NavButton.TextButton>Contact</NavButton.TextButton>} />}
      rightNav2nd={secondNav && <NavButton nav={<NavButton.TextButton>Sign in</NavButton.TextButton>} isBorderLeft />}
    />
  );
};
