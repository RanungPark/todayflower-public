import InputField from '.';

const meta = {
  title: 'input/InputField',
  component: InputField,
  argTypes: {
    label: {
      control: {type: 'boolean', default: false},
    },
    helpMessage: {
      control: {type: 'boolean', default: false},
    },
    status: {
      control: {type: 'select', options: ['default', 'success', 'error']},
    },
  },
};

export default meta;

export const 안풋_필드 = ({
  label,
  helpMessage,
  status,
}: {
  label: boolean;
  helpMessage: boolean;
  status: 'default' | 'success' | 'error';
}) => {
  return (
    <InputField
      label={label && <InputField.Label>Label</InputField.Label>}
      input={<InputField.Input placeholder="placeholder" />}
      helpMessage={helpMessage && <InputField.HelpMessage>Text helper</InputField.HelpMessage>}
      status={status}
    />
  );
};
