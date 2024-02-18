import type { ReactNode } from 'react';
import React from 'react';
// import debounce from 'lodash.debounce';

type Props = {
  placeholder: string;
  style?: string;
  icon?: ReactNode;
  type?: string;
  defaultValue?: string;
  disabled?: boolean;
  bgColor?: string;
  callback: any;
};

const SearchInput: React.FC<Props> = (props: Props) => {
  const {
    placeholder,
    style,
    type,
    defaultValue,
    bgColor = 'bg-blue/10',
  } = props;
  // const changeHandler = (event: any) => {
  //   props.callback(event?.target?.value);
  // };
  // const debouncedChangeHandler = React.useMemo(() => debounce(changeHandler, 1000), []);
  return (
    <div className={`${style}`}>
      <input
        type={type || 'text'}
        className={`${bgColor} w-full  rounded-[8px]  border-0 px-2 py-1 text-[12px] focus:outline-0 lg:px-4`}
        placeholder={placeholder}
        defaultValue={defaultValue}
        // onChange={debouncedChangeHandler}
        autoFocus
      ></input>
    </div>
  );
};

export default SearchInput;
