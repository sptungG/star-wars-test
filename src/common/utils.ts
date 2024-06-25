import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type TClassValue = ClassValue;
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getTotalPage = (total: number, limit: number) => {
  let totalPage =
    total % limit === 0 ? (total - (total % limit)) / limit : (total - (total % limit)) / limit + 1;
  totalPage = Number.isNaN(Number(totalPage)) ? 0 : Number(totalPage);
  return totalPage === 0 ? 1 : totalPage;
};

export const extractIdFromUrl = (url: string) => {
  const matches = url.match(/\/(\d+)\/$/);
  return matches ? matches[1] : undefined;
};

export const getItemID = (url: string) => {
  if (!url) return '';
  const urlSplited = url?.split('/');
  const itemID = urlSplited[urlSplited?.length - 2];
  return itemID;
};

export const createBackgroundString = ({ angle = 50, colors = '' }) => {
  return `linear-gradient(${angle}deg, ${colors})`;
};
