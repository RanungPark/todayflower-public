import BreadCrumb, {type BreadCrumbProps} from '.';

const meta = {
  title: 'nav/BreadCrumb',
  component: BreadCrumb,
  argTypes: {
    disabled: {
      control: {type: 'boolean', default: false},
    },
    focus: {
      control: {type: 'boolean', default: false},
    },
  },
};

export default meta;

export const 브레드크럼 = ({disabled, focus}: BreadCrumbProps) => {
  return (
    <BreadCrumb disabled={disabled} focus={focus}>
      information
    </BreadCrumb>
  );
};
