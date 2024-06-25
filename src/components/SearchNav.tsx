'use client';

import { SearchIcon } from 'lucide-react';
import { useQueryState } from 'nuqs';
import React from 'react';
import { TClassValue, cn } from '@/common/utils';

type TSearchNavProps = { placeholder?: string; className?: TClassValue };

const SearchNav = ({ placeholder, className }: TSearchNavProps) => {
  const [searchValue, setSearchValue] = useQueryState('search', { defaultValue: '' });

  const handleSearch = (term: string) => {
    setSearchValue(term.toLowerCase());
  };

  return (
    <div className={cn('relative flex flex-1 flex-shrink-0', className)}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded border bg-transparent border-amber-500 py-[9px] pl-10 text-sm outline-none placeholder:text-amber-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        value={searchValue}
      />
      <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-amber-500 peer-focus:text-amber-300" />
    </div>
  );
};

export default SearchNav;
