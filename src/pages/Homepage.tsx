import { useEffect, useState } from 'react'

import { BiPlus } from 'react-icons/bi'
import CustomBodyTile from '../components/CustomBodyTile'
import TableRow from '../components/TableRow'
import { TicketType } from '../App'
import Tile from '../components/Tile'
import ticketsData from '../assets/tickets.json'

function Homepage() {
    const [ticketData, setTicketData] = useState<TicketType[]>()

    useEffect(() => {
        setTicketData(ticketsData)
    }, [])

    return (
        <div className="flex h-full flex-col justify-start bg-white">
            <div className="z-0 flex h-1/5 w-full flex-col items-center justify-center gap-5 bg-gradient-to-b from-primary to-primary-400 px-2 py-5">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-center text-xs font-semibold uppercase tracking-tighter text-white">
                        Aktuálny kredit
                    </h2>
                    <h2 className="text-3xl font-semibold uppercase tracking-tighter text-white">
                        0,25€
                    </h2>
                </div>
                <button className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                    <BiPlus color="black" fontSize="1.2rem" />
                </button>
            </div>
            <div className="flex h-4/5 flex-col gap-5 overflow-scroll px-5 py-5 pb-40">
                <h5 className="text-center uppercase text-primary ">lístky</h5>
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
                    <div className="flex flex-col justify-center">
                        {ticketData
                            ?.slice(0, 2)
                            .map((item) => (
                                <TableRow ticket={{ ...item, basic: false }} />
                            ))}
                    </div>
                </CustomBodyTile>
            </div>
        </div>
    )
}

export default Homepage
