import { Progress } from '@nextui-org/react';

export const Loader = () => {
  return (
    <div className="grid place-items-center absolute z-20 w-screen h-screen bg-black/90">
      <Progress
        size="md"
        isIndeterminate
        isStriped
        aria-label="Cargando..."
        className="max-w-md"
      />
    </div>
  );
};
