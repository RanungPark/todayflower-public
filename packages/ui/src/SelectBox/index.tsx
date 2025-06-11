import React from 'react';
import classNames from 'classnames/bind';
import styles from './selectBox.module.css';
import TriangleBottom from '../assets/icon/triangle-bottom.svg';
import TriangleTop from '../assets/icon/triangle-top.svg';
import {SelectBoxProvider, useSelectBox} from './selectBoxProvider';
import SVG from '../SVG';

const cx = classNames.bind(styles);

export interface SelectBoxProps {
  input?: React.ReactNode;
  options?: React.ReactNode;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface OptionType {
  id: string | number;
  option: string;
}

interface OptionsProps {
  options: OptionType[];
  handleChange?: (id: string | number) => void;
}

export default function SelectBox({input, options}: SelectBoxProps) {
  return (
    <div className={cx('wrapper')}>
      <SelectBoxProvider>
        {input}
        {options}
      </SelectBoxProvider>
    </div>
  );
}

const Input = ({...props}: InputProps) => {
  const {handleOpen, open} = useSelectBox();
  const {value, disabled} = props;

  return (
    <div className={cx('input_wrapper', {open: open || value}, {disabled})} onClick={disabled ? undefined : handleOpen}>
      <input className={cx('input', 'typography-caption-bold')} readOnly {...props} />
      <SVG src={open ? TriangleTop : TriangleBottom} />
    </div>
  );
};

const Options = ({options, handleChange}: OptionsProps) => {
  const {open, handleClose} = useSelectBox();

  const handleItemClick = (id: string | number) => {
    handleChange?.(id);
    handleClose();
  };

  return (
    <>
      {open && (
        <ul className={cx('options')}>
          {options.map(({id, option}) => (
            <li className={cx('item', 'typography-caption-bold')} key={id} onClick={() => handleItemClick(id)}>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

SelectBox.Input = Input;
SelectBox.Options = Options;
