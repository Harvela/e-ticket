'use client';

import 'react-datepicker/dist/react-datepicker.css';

import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import ReactSelect from 'react-select';

export type SelectProps = {
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
  options?: { value: string; label: string }[];
};

const Select: React.FC<SelectProps> = (props) => {
  const {
    label,
    placeholder,
    style,
    icon,
    defaultValue,
    bgColor = 'bg-blue/5',
    required = false,
    onBlur,
    options,
  } = props;

  const [value, setValue] = useState(props.defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [props.defaultValue]);

  return (
    <div className={`sm:mb-0 ${style} data-no-translation notranslate flex-1`}>
      {label && (
        <span className="mb-2 flex flex-row items-center gap-1 overflow-y-visible text-[12px] font-semibold text-blue">
          {label}
          {icon}
        </span>
      )}
      <ReactSelect
        className={`${bgColor}  notranslate w-full rounded-[5px] border-blue/10 px-2 text-[14px] focus:outline-0`}
        placeholder={placeholder}
        options={options || []}
        value={props.options?.find((e) => e.value === value)}
        onChange={(e: any) => {
          props?.onChange?.(e.value || '');
        }}
        menuPortalTarget={
          typeof window !== 'undefined' ? document.body : undefined
        }
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        onBlur={onBlur}
        required={required}
        unstyled
      ></ReactSelect>
    </div>
  );
};

export default Select;
