import { BiPlus } from 'react-icons/bi';
import CustomBodyTile from './components/CustomBodyTile';
import { IconContext } from 'react-icons';
import TableRow from './components/TableRow';
import Tile from './components/Tile';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState<string>('');
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
    <div className="w-full h-screen">
      <div className="flex flex-row w-full [&>*]:flex-1 fixed bottom-0 left-0 [&>*>*]:transition-all [&>*>*]:duration-200 [&>*>*]:ease-in-out  bg-white z-50">
        {menuItems.map((item, index) => (
          <div
            className={`flex flex-col gap-0 :transition-all
            duration-200 border-b-2
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
      <div className="flex flex-col justify-center bg-white pb-40">
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
        <div className="flex flex-col gap-5 px-5 py-5 pt-[60%] ">
          <h5 className="text-center text-primary uppercase ">
            lístky
          </h5>
          <Tile
            head="Električenka"
            status="Nemáte kúpenú električenku"
            buttonValue="Kúpiť"
          />
          <Tile
            head="Jednorazový lístok"
            status="Nemáte žiadny aktíny lístok"
            buttonValue="Kúpiť lístok"
          />
          <CustomBodyTile
            headColor="bg-secondary"
            head="Naposledy zakúpené lístky"
          >
            <IconContext.Provider
              value={{ color: '#00a6e3' }}
            >
              <div className="flex flex-col justify-center">
                <TableRow
                  zone={2}
                  minutes={30}
                  price="0,49€"
                />
                <TableRow
                  zone={3}
                  minutes={60}
                  price="0,79€"
                />
              </div>
            </IconContext.Provider>
          </CustomBodyTile>
        </div>
      </div>
    </div>
  );
}

export default App;
