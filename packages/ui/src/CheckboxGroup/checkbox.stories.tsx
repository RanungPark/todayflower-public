import {useState} from 'react';
import CheckboxGroup from '.';
import Flex from '../Flex';

const meta = {
  title: 'input/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {},
};

export default meta;

export const 체크박스_그룹 = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const options = ['A', 'B', 'C'];

  const handleChange = (option: string) => {
    setSelected((prev) => (prev.includes(option) ? prev.filter((v) => v !== option) : [...prev, option]));
  };

  return (
    <Flex role="radiogroup" gap="xl">
      <CheckboxGroup options={options} name={'radio'} value={selected} onChange={handleChange} />
    </Flex>
  );
};
