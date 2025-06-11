import {useState} from 'react';
import RadioButtonGroup from '.';
import Flex from '../Flex';

const meta = {
  title: 'input/RadioButtonGroup',
  component: RadioButtonGroup,
  argTypes: {},
};

export default meta;

export const 라디오_버튼_그룹 = () => {
  const [selected, setSelected] = useState<string>('');
  const options = ['A', 'B', 'C'];

  const handleChange = (option: string) => {
    setSelected(option);
  };

  return (
    <Flex role="radiogroup" gap="xl">
      <RadioButtonGroup options={options} name={'radio'} value={selected} onChange={handleChange} />
    </Flex>
  );
};
