import { TicketContext, TicketType } from '../App'
import { useContext, useState } from 'react'

import Divider from '../components/Divider'
import { IconContext } from 'react-icons'
import { IoIosArrowDropleft } from 'react-icons/io'
import TableRow from '../components/TableRow'
import ticketsData from '../assets/tickets.json'
import { useNavigate } from 'react-router-dom'

function Tickets() {
    const navigate = useNavigate()
    const [tickets] = useState<TicketType[]>(ticketsData)

    const ticketCtx = useContext(TicketContext)

    return (
        <div className="flex flex-col justify-center bg-white pb-40">
            <div className="z-0 flex h-1/5 w-full flex-col items-center justify-center gap-5 bg-gradient-to-b from-primary to-primary-400 px-2 py-5">
                <IconContext.Provider value={{ color: 'white' }}>
                    <div className=" relative flex w-full flex-row items-center justify-center">
                        <button
                            onClick={() => navigate('/')}
                            className="absolute left-2 top-0"
                        >
                            <IoIosArrowDropleft size="30px" />
                        </button>
                        <h2 className=" text-normal text-center font-semibold tracking-tighter text-white">
                            {ticketCtx?.ticket.basic
                                ? 'Základné lístky'
                                : 'Zľavnené lístky'}
                        </h2>
                    </div>
                </IconContext.Provider>
            </div>
            <section className="flex flex-col gap-0 px-0 py-2">
                {tickets.map((ticket) => (
                    <>
                        <TableRow
                            ticket={{
                                ...ticket,
                                basic: ticketCtx?.ticket.basic ?? true,
                            }}
                        />
                        <Divider />
                    </>
                ))}
            </section>
        </div>
    )
}

export default Tickets
