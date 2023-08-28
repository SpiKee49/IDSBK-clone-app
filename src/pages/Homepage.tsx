import { TicketContext, TicketType } from '../App'
import { useContext, useEffect, useRef, useState } from 'react'

import { BiPlus } from 'react-icons/bi'
import CustomBodyTile from '../components/CustomBodyTile'
import Divider from '../components/Divider'
import TableRow from '../components/TableRow'
import Tile from '../components/Tile'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import ticketsData from '../assets/tickets.json'

dayjs.extend(duration)

function Homepage() {
    const [ticketData, setTicketData] = useState<TicketType[]>()
    const ticketContext = useContext(TicketContext)
    const [timeLeft, setTimeLeft] = useState('')

    const ivalRef = useRef(0)

    useEffect(() => {
        setTicketData(ticketsData)
    }, [])

    useEffect(() => {
        if (ticketContext?.ticket.active && ivalRef.current == 0) {
            setTimeout(
                () => {
                    ticketContext.setTicket({
                        ...ticketContext.ticket,
                        active: false,
                        setAt: undefined,
                    })
                },
                ticketContext.ticket.duration * 60 * 1000
            )
            ivalRef.current = setInterval(() => {
                setTimeLeft(
                    dayjs
                        .duration(
                            dayjs(ticketContext.ticket.setAt).diff(dayjs())
                        )
                        .format('HH:mm:ss')
                )
            }, 1000)
        } else if (!ticketContext?.ticket.active) {
            clearInterval(ivalRef.current)
            setTimeLeft('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ticketContext?.ticket])

    return (
        <div className="flex h-full flex-col items-center justify-start bg-white">
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
            <div className="no-scrollbar flex h-4/5 w-full flex-col gap-5 overflow-scroll overflow-y-scroll py-5 pb-40 lg:w-1/2">
                <h5 className="text-center uppercase text-primary ">lístky</h5>
                <Tile
                    head="Električenka"
                    status="Nemáte kúpenú električenku"
                    buttonValue="Kúpiť"
                />
                <div className="no-scrollbar ml-4 flex h-auto w-[100%] flex-row flex-nowrap items-stretch gap-4 overflow-x-auto overflow-y-hidden pl-1 [&>*]:shrink-0 [&>*]:grow-0 [&>*]:basis-[90%]">
                    {ticketContext?.ticket.active && ivalRef.current !== 0 && (
                        <CustomBodyTile
                            headColor="bg-success"
                            head="Lístok je aktívny"
                            uppercase={true}
                        >
                            <div className="flex flex-col justify-end [&>*]:flex-1">
                                <TableRow
                                    ticket={{
                                        ...ticketContext?.ticket,
                                    }}
                                    timeLeft={timeLeft}
                                />
                                <div className="flex flex-col">
                                    <Divider />
                                    <div className="flex flex-row items-baseline justify-between px-3 text-xs text-secondary">
                                        <span>
                                            {ticketContext.ticket.basic
                                                ? 'Základný'
                                                : 'Zľavnený'}
                                        </span>
                                        <div className="flex flex-row items-center justify-center gap-2 text-xs text-secondary ">
                                            <img
                                                src="/img/stop.svg"
                                                alt="stop-icon"
                                                className="h-4 w-4"
                                            />
                                            Nad vinicami
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CustomBodyTile>
                    )}
                    <Tile
                        head="Jednorazový lístok"
                        status="Nemáte žiadny aktíny lístok"
                        buttonValue="Kúpiť lístok"
                    />
                </div>
                <div className="max-h-50 h-auto w-full">
                    <CustomBodyTile
                        headColor="bg-secondary"
                        head="Naposledy zakúpené lístky"
                    >
                        <div className="flex flex-col justify-center">
                            {ticketData
                                ?.slice(0, 2)
                                .map((item) => (
                                    <TableRow
                                        ticket={{ ...item, basic: false }}
                                    />
                                ))}
                        </div>
                    </CustomBodyTile>
                </div>
            </div>
        </div>
    )
}

export default Homepage
