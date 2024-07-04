'use client';
import React, { useId } from 'react';
import { useQueryState } from 'nuqs';

type TFilterNavProps = {
  items: { value: string; label: string }[];
  placeholder?: string;
  name: string;
};

const FilterNav = ({
  items = [],
  name,
  placeholder = '--Choose--',
}: TFilterNavProps) => {
  const uid = useId();
  const [selectedValue, setSelectedValue] = useQueryState(name, {
    defaultValue: '',
  });
  return (
    <div className='text-white rounded-full py-1 px-2 bg-orange-300/20 inline-flex'>
      <select
        key={'species' + selectedValue}
        className='text-orange-300 text-sm bg-transparent rounded-full outline-none border-none'
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value);
        }}
      >
        <option value=''>{placeholder}</option>
        {items.map((item, index) => {
          return (
            <option
              key={uid + index + item.value}
              value={item.value}
              className='text-slate-800 text-base'
            >
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterNav;
