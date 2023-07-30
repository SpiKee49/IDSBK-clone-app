import type { ReactNode } from 'react';

type Props = {
  headColor?: string;
  head: string;
  children: ReactNode;
};

function CustomBodyTile(props: Props) {
  const { head, children, headColor } = props;
  return (
    <div
      className={`shadow-md shadow-slate-300 flex flex-col text-center justify-center rounded-lg gap-4`}
    >
      <p
        className={`${
          headColor ?? 'bg-primary'
        } rounded-t-lg py-1 text-white text-sm`}
      >
        {head}
      </p>
      {children}
    </div>
  );
}

export default CustomBodyTile;
