import {useState} from 'react';
import SelectBox from '.';

const meta = {
  title: 'input/SelectBox',
  component: SelectBox,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

export const 셀렉트_박스 = ({disabled}: {disabled: boolean}) => {
  const [select, setSelect] = useState<string>('');

  const options = [
    {id: 1, option: 'Option 1'},
    {id: 2, option: 'Option 2'},
    {id: 3, option: 'Option 3'},
    {id: 4, option: 'Option 4'},
    {id: 5, option: 'Option 5'},
    {id: 6, option: 'Option 6'},
  ];

  const handleChange = (id: string | number) => {
    const selectOption = options.find((option) => option.id === id);
    if (selectOption) {
      setSelect(selectOption.option);
    }
  };

  return (
    <SelectBox
      input={<SelectBox.Input type="text" placeholder="- Select -" value={select} disabled={disabled} />}
      options={<SelectBox.Options options={options} handleChange={handleChange} />}
    />
  );
};
