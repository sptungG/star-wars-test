import Link from 'next/link';
import { MillenniumFalcon } from '../icons/MillenniumFalcon';

export const NoResultsFound = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-dvh gap-6 w-dvw'>
      <MillenniumFalcon />
      <p className='text-lg font-[600]'>
        Seems like your hero is missing in a distant galaxy...
      </p>
      <Link href='/' className='underline text-amber-400 font-[600s]'>
        Search another one
      </Link>
    </div>
  );
};
