import CustomBodyTile from '../components/CustomBodyTile';
import { IconContext } from 'react-icons';
import TableRow from '../components/TableRow';
import Tile from '../components/Tile';
import WaletHeader from '../components/WaletHeader';

function Homepage() {
  return (
    <div className="flex flex-col justify-center bg-white pb-40">
      <WaletHeader />
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
  );
}

export default Homepage;
