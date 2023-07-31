import { BiPlus } from 'react-icons/bi';

function WaletHeader() {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-400 flex-col w-full h-1/5 min-h-[200px] flex justify-center items-center gap-2 pt-7 pb-5 fixed top-0 left-0 z-0">
      <div className="flex justify-center flex-col items-center">
        <h2 className="uppercase text-white tracking-tighter font-semibold text-xs text-center">
          Aktuálny kredit
        </h2>
        <h2 className="uppercase text-white tracking-tighter font-semibold text-3xl">
          0,25€
        </h2>
      </div>
      <button className="mt-1 text-black flex justify-center items-center rounded-full w-12 h-12 bg-white">
        <BiPlus color="black" fontSize="1.2rem" />
      </button>
    </div>
  );
}

export default WaletHeader;
