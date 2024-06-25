import { R2D2 } from '../icons/R2D2';

export const IsLoadingState = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-dvh gap-6 w-dvw">
      <R2D2 />
      <p className="text-lg font-[600]">A long time ago in a galaxy far, far away…</p>
    </div>
  );
};
