import { BsCircle, BsCircleFill } from 'react-icons/bs';
import { useContext, useState } from 'react';

import { IconContext } from 'react-icons';
import { ModalContext } from '../App';

function Modal() {
  const modalContext = useContext(ModalContext);
  const items = [
    'Základné lístky',
    'Zľavnené lístky',
    'Denné lístky',
    'Batožina / pes',
    'Bratislava - Hainburg',
  ];

  const [selectedItem, setSelectedItem] =
    useState<number>();

  return (
    <div
      className={`w-full h-screen z-50 flex flex-col left-0${
        modalContext?.isModalOpen
          ? 'absolute top-0'
          : 'hidden top-full'
      } absolute bg-black bg-opacity-50 transition-all duration-300 ease-in-out back`}
    >
      <div
        className="w-full h-1/2"
        onClick={() => modalContext?.setOpenModal(false)}
      ></div>
      <div className="rounded-t-3xl h-1/2 w-full flex flex-col gap-4 justify-start items-center bg-white">
        <span className="rounded-t-3xl bg-primary w-full text-center text-white py-[2px]">
          Jednorázový cestovný lístok
        </span>
        <IconContext.Provider
          value={{ color: '#00a6e3', size: '25px' }}
        >
          <div className="flex flex-col w-[85%]">
            {items.map((item, index) => (
              <div
                className="flex flex-row items-center gap-2 h-12"
                onClick={() => setSelectedItem(index)}
              >
                {selectedItem === index ? (
                  <BsCircleFill />
                ) : (
                  <BsCircle />
                )}
                {item}
              </div>
            ))}
          </div>
        </IconContext.Provider>
        <button
          type="button"
          className="w-[90%] h-12 shadow-md rounded-full bg-primary text-white"
        >
          Potvrdiť výber
        </button>
        <button
          onClick={() => modalContext?.setOpenModal(false)}
          type="button"
          className="w-[90%] h-12 shadow-md rounded-full bg-white text-primary"
        >
          Späť
        </button>
      </div>
    </div>
  );
}

export default Modal;
