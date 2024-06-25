import Link from 'next/link';
import { DeathStar } from '../icons/DeathStar';

const HasErrorState = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-dvh gap-6 w-dvw">
      <DeathStar />
      <p className="text-lg font-[600]">Looks like something went wrong... Awfully wrong</p>
      <Link href="/" className="underline text-amber-400 font-[600s]">
        Go Back Home
      </Link>
    </div>
  );
};
export default HasErrorState;
