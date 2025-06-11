import classNames from 'classnames/bind';
import styles from './inputField.module.css';
import {InputFieldProvider, useInputField} from './inputFieldProvider';
import Success from '../assets/icon/success.svg';
import Error from '../assets/icon/error.svg';
import SVG from '../SVG';

const cx = classNames.bind(styles);

type InputStatus = 'default' | 'success' | 'error';

interface InputFieldProps {
  label?: React.ReactNode;
  input: React.ReactNode;
  helpMessage?: React.ReactNode;
  status?: InputStatus;
}

export default function InputField({label, input, helpMessage, status = 'default'}: InputFieldProps) {
  return (
    <div className={cx('wrapper')}>
      <InputFieldProvider status={status}>
        {label != null ? label : null}
        {input}
        {helpMessage != null ? helpMessage : null}
      </InputFieldProvider>
    </div>
  );
}

function Label({children}: {children: React.ReactNode}) {
  return <span className={cx('typography-h6', 'label')}>{children}</span>;
}

function Input({...props}: React.InputHTMLAttributes<HTMLInputElement>) {
  const {value} = props;
  const {status} = useInputField();

  return <input className={cx('input', {value, [status]: status !== 'default'})} {...props} />;
}

function HelpMessage({children}: {children: React.ReactNode}) {
  const {status} = useInputField();

  return (
    <div className={cx('helpMessageWrapper')}>
      {status !== 'default' && <SVG src={status === 'success' ? Success : Error} width={16} height={16} />}
      <span className={cx('typography-caption-small', 'helpMessage', {[status]: status !== 'default'})}>
        {children}
      </span>
    </div>
  );
}

InputField.Label = Label;
InputField.Input = Input;
InputField.HelpMessage = HelpMessage;
