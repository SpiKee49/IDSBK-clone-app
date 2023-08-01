import { useContext, useState } from 'react';

import { ModalContext } from '../App';

function Navigation() {
  const [activeTab, setActiveTab] = useState<string>('');
  const modalContext = useContext(ModalContext);

  const menuItems = [
    'Lístky',
    'Hľadať',
    'Zastávky',
    'Linky',
    'Viac',
  ];
  const icons = [
    'tickets',
    'magnifying-glass',
    'stop',
    'bus',
    'dots',
  ];
  return (
    <div
      className={`flex flex-row w-full [&>*]:flex-1 bottom-0 left-0 [&>*>*]:transition-all [&>*>*]:duration-200 [&>*>*]:ease-in-out  bg-white z-40 ${
        modalContext?.isModalOpen ? 'hidden' : 'fixed'
      }`}
    >
      {menuItems.map((item, index) => (
        <div
          className={`flex flex-col gap-0 :transition-all
            duration-200 border-b-4
            ease-in-out ${
              activeTab === item
                ? ' border-primary'
                : 'border-white'
            }`}
          onClick={() => setActiveTab(item)}
        >
          <img
            src={`img/${
              icons[index] +
              (activeTab === item ? '-active' : '')
            }.svg`}
            alt={icons[index]}
            className="scale-[40%]"
          />
          <span
            className={`text-center ${
              activeTab === item
                ? 'text-primary font-bold'
                : 'text-gray-500'
            } text-xs -mt-5 pb-1`}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Navigation;
