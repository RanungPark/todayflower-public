import InputFieldDone from '.';

const meta = {
  title: 'input/InputFieldDone',
  component: InputFieldDone,
  argTypes: {
    input: {
      control: {type: 'text'},
    },
    disabled: {
      control: {type: 'boolean'},
    },
  },
};

export default meta;

export const 인풋_필드_완료 = ({input = 'InputField closed', disabled}: {input: string; disabled: boolean}) => {
  return <InputFieldDone input={<InputFieldDone.Input>{input}</InputFieldDone.Input>} disabled={disabled} />;
};
