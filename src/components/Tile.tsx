type Props = {
  head: string;
  status: string;
  buttonValue: string;
};

import { ModalContext } from '../App';
import { useContext } from 'react';

function Tile(props: Props) {
  const modalContext = useContext(ModalContext);

  const { head, status, buttonValue } = props;
  return (
    <div className="shadow-md bg-white shadow-slate-300 flex flex-col text-center justify-center rounded-lg gap-4">
      <p className="bg-primary rounded-t-lg py-1 text-sm text-white ">
        {head}
      </p>
      <p className="text-xs font-bold">{status}</p>
      <button
        type="button"
        className="w-[80%] mx-auto rounded-full py-3 bg-primary text-white mb-5"
        onClick={() => modalContext?.setOpenModal(true)}
      >
        {buttonValue}
      </button>
    </div>
  );
}

export default Tile;
