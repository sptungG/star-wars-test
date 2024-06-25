import React from 'react';
import { TCharacter } from '@/common/types';
import NextImage from './NextImage';
import { EarthIcon, ArrowUpRightIcon } from 'lucide-react';
import { createBackgroundString } from '@/common/utils';

export type TMappedCharacter = TCharacter & {
  id: string | undefined;
  homeworldName: string | undefined;
  skin_colors: string | undefined;
};
type TCardCharacterProps = { data: TMappedCharacter };

const CardCharacter = ({ data }: TCardCharacterProps) => {
  return (
    <div className="group/character relative rounded-md overflow-hidden cursor-pointer p-[1px]">
      <div className="bg-slate-800 rounded p-2 group-hover/character:bg-opacity-65">
        <NextImage
          unoptimized
          src={`${process.env.NEXT_PUBLIC_IMG_URL}/characters/${data.id}.jpg`}
          height={0}
          width={200}
          className="object-cover w-full h-auto rounded"
        />
        <div className="pt-2">
          <div className="flex items-center group-hover/character:text-amber-400 gap-1">
            <h3 className="text-lg font-[600] leading-[1.2]">{data.name}</h3>
            <ArrowUpRightIcon className="ml-auto h-5 shrink-0 invisible group-hover/character:visible" />
          </div>
          <div className="flex items-center text-slate-300 group-hover/character:text-amber-200">
            <EarthIcon className="h-4" />
            <span>{data.homeworldName}</span>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background: createBackgroundString({
            colors: data.skin_colors || 'gray, gray',
          }),
        }}
      />
    </div>
  );
};

export default CardCharacter;
