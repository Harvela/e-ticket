import 'react-datepicker/dist/react-datepicker.css';

import dayjs from 'dayjs';
import type { ReactNode } from 'react';
import React from 'react';
import DatePicker from 'react-datepicker';

type Props = {
  label?: string;
  placeholder: string;
  style?: string;
  icon?: ReactNode;
  register?: any;
  name: string;
  validator?: any;
  type?: string;
  defaultValue?: string;
  disabled?: boolean;
  bgColor?: string;
  onChange?: any;
  required?: boolean;
  max?: number | string;
  min?: number | string;
  onBlur?: any;
};

const Input: React.FC<Props> = (props: Props) => {
  const {
    label,
    placeholder,
    style,
    icon,
    register,
    name,
    validator,
    type,
    defaultValue,
    bgColor = 'bg-blue/5',
    required = false,
    max,
    min,
    disabled,
    onBlur,
  } = props;

  const [selectedDate, setSelectedDate] = React.useState<any>(null);

  return (
    <div className={`${style} flex-1`}>
      {label && (
        <span className="mb-2 flex flex-row items-center gap-1 text-[12px] font-semibold text-blue">
          {label}
          {icon}
        </span>
      )}
      {!(type === 'date' && (min || max)) ? (
        <input
          type={type || 'text'}
          className={`${bgColor} w-full rounded-[5px] border-blue/10 px-4 py-1 text-[14px] focus:outline-0`}
          placeholder={placeholder}
          max={max}
          min={min}
          defaultValue={defaultValue || ''}
          onChange={(e) => {
            props?.onChange?.(e?.target?.value || '');
          }}
          {...register?.(name, validator)}
          onBlur={onBlur}
          required={required}
          autoComplete="new-password"
          disabled={disabled}
        ></input>
      ) : (
        <DatePicker
          selected={
            selectedDate || defaultValue
              ? dayjs(defaultValue || min).toDate()
              : undefined
          }
          onChange={(date) => {
            setSelectedDate(date);
            props?.onChange?.(dayjs(date).format('YYYY-MM-DD'));
          }}
          minDate={min ? dayjs(min).toDate() : undefined}
          maxDate={max ? dayjs(max).toDate() : undefined}
          className={`${bgColor} h-[35px] w-full rounded-[5px] border-blue/10 bg-blue/10 px-3`}
          required={required}
          onBlur={onBlur}
          wrapperClassName="w-full rounded-[5px] focus:outline-0 bg-transparent"
          placeholderText="12/01/2024"
          showTimeSelect={false}
        />
      )}
    </div>
  );
};

export default Input;
