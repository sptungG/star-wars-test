'use client';

import React, { useEffect, useId, useMemo, useState } from 'react';
import { extractIdFromUrl } from '@/common/utils';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import CardCharacter, { TMappedCharacter } from './CardCharacter';
import { useQueryState } from 'nuqs';
import { NoResultsFound } from './api-states/NoResultsFound';

type TPageData = {
  offset: number;
  limit: number;
  page: number;
};

type TListCharactersProps = {
  items: TMappedCharacter[];
  pageSize?: number;
  debounceTimeout?: number;
};

const ListCharacters = ({
  items = [],
  pageSize = 10,
  debounceTimeout = 1000,
}: TListCharactersProps) => {
  const uid = useId();
  const { ref, inView } = useInView();
  const [searchValue] = useQueryState('search', { defaultValue: '' });
  const [selectedSpeciesValue] = useQueryState('species', { defaultValue: '' });
  const [selectedPlanetValue] = useQueryState('planets', { defaultValue: '' });
  const isFiltering =
    searchValue || selectedSpeciesValue || selectedPlanetValue;

  const [hasContentLoading, setHasContentLoading] = useState(false);
  const [currentPageData, setCurrentPageData] = useState<TPageData>({
    limit: pageSize,
    offset: 0,
    page: 1,
  });
  const [internalItems, setInternalItems] = useState<any[]>([]);

  const hasNextPage = internalItems.length < items.length;

  // filter all items
  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        const mappedSpeciesId = item.species.map((s) => extractIdFromUrl(s));
        const homeworldId = extractIdFromUrl(item.homeworld);
        // item matched 3 conditions
        return (
          homeworldId === selectedPlanetValue &&
          mappedSpeciesId.join(',')?.includes(selectedSpeciesValue) &&
          item.name.toLowerCase().includes(searchValue)
        );
      }),
    [items, searchValue, selectedSpeciesValue, selectedPlanetValue]
  );

  //
  const mappedItems = isFiltering ? filteredItems : internalItems;

  useEffect(() => {
    if (internalItems.length === 0) setInternalItems(items.slice(0, pageSize));
  }, [JSON.stringify(items)]);

  useEffect(() => {
    if (!isFiltering && inView) {
      if (hasNextPage) {
        setHasContentLoading(true);
        const newPage = {
          offset: currentPageData.page * currentPageData.limit,
          page: currentPageData.page + 1,
          limit: currentPageData.limit,
        };
        const nextOptions = items.slice(
          newPage.offset,
          newPage.offset + newPage.limit
        );
        setTimeout(() => {
          setCurrentPageData(newPage);
          setInternalItems((prev) => [...prev, ...nextOptions]);
          setHasContentLoading(false);
        }, debounceTimeout);
      }
    }
  }, [isFiltering, inView]);

  if (!mappedItems.length) return <NoResultsFound />;

  return (
    <div className='list-characters px-6 pb-6'>
      {mappedItems.map((item, index) => (
        <Link
          key={uid + item.name + index}
          href={`/characters/${item.id}`}
          prefetch
          scroll={false}
        >
          <CardCharacter data={item} />
        </Link>
      ))}

      {!!isFiltering || (
        <div
          ref={ref}
          className='h-auto bg-slate-800 border rounded-md border-slate-700 flex items-center justify-center'
        >
          {hasContentLoading
            ? 'Loading...'
            : hasNextPage
            ? 'Scroll down to load more...'
            : 'You have viewed all items!'}
        </div>
      )}
    </div>
  );
};

export default ListCharacters;
