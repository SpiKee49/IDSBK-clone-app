import { BiPlus } from 'react-icons/bi'
import CustomBodyTile from '../components/CustomBodyTile'
import Header from '../components/Header'
import { IconContext } from 'react-icons'
import TableRow from '../components/TableRow'
import Tile from '../components/Tile'

function Homepage() {
    return (
        <div className="h-full flex flex-col justify-start bg-white">
            <Header
                direction="col"
                justify="justify-center"
                items="items-center"
                height="20%"
                py={10}
            >
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
            </Header>
            <div className="flex flex-col h-4/5 gap-5 px-5 py-5 pb-40 overflow-scroll">
                <h5 className="text-center text-primary uppercase ">lístky</h5>
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
                    <IconContext.Provider value={{ color: '#00a6e3' }}>
                        <div className="flex flex-col justify-center">
                            <TableRow zone={2} minutes={30} price="0,49€" />
                            <TableRow zone={3} minutes={60} price="0,79€" />
                        </div>
                    </IconContext.Provider>
                </CustomBodyTile>
            </div>
        </div>
    )
}

export default Homepage
