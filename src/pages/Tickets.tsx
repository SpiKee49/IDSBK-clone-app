import {
    IoIosAddCircleOutline,
    IoIosArrowDropleft,
    IoIosRemoveCircleOutline,
} from 'react-icons/io'
import { TicketContext, TicketType } from '../App'
import { useContext, useEffect, useState } from 'react'

import { BsCreditCard2Front } from 'react-icons/bs'
import BuyButton from '../components/BuyButton'
import { CiWallet } from 'react-icons/ci'
import Divider from '../components/Divider'
import { IconContext } from 'react-icons'
import Switch from '../components/Switch'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'

const tickets: { [key: string]: string } = {
    basic: 'Základný',
    discount: 'Zľavnený',
    dog: 'Batožina / Pes',
}

type Order = {
    [key: string]: number
}

function Tickets() {
    const navigate = useNavigate()
    const [rememberCard, setRememberCard] = useState(false)

    const ticketCtx = useContext(TicketContext)
    const ticket =
        ticketCtx?.ticket ??
        ({
            duration: 30,
            basic: true,
            zones: 2,
            prices: {
                basic: 0.55,
                discount: 0.55,
                dog: 0.55,
            },
        } as TicketType)

    const [order, setOrder] = useState<Order>({
        basic: ticket.basic ? 1 : 0,
        discount: !ticket.basic ? 1 : 0,
        dog: 0,
    })
    const [totalPrice, setTotalPrice] = useState<number>()

    useEffect(() => {
        const prices = ticket.prices
        setTotalPrice(
            prices.basic * order.basic +
                prices.discount * order.discount +
                order.dog * 0.55
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [order])

    function updateOrder(ticket: string, value: 'add' | 'remove') {
        const newOrder = { ...order }
        if (value === 'remove' && order[ticket] === 0) return

        if (value === 'remove' && order[ticket] > 0) {
            newOrder[ticket] -= 1
        } else {
            newOrder[ticket] += 1
        }
        setOrder(newOrder)
    }

    // useEffect(() => {
    //     console.log(ticket)
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <div className="flex flex-col items-center justify-center bg-white pb-40">
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
                            Nákup cestovného lístku
                        </h2>
                    </div>
                </IconContext.Provider>
                <button className="flex flex-row items-center justify-center gap-2 rounded-full bg-primary-100 px-6 py-[5px] text-xs text-white ">
                    <img
                        src="/img/stop-white.svg"
                        alt="stop-icon"
                        className="h-5 w-5"
                    />
                    Nad vinicami
                </button>
            </div>
            <section className="flex w-full flex-col gap-4 px-5 lg:w-1/3">
                <div className="flex flex-row justify-between px-5 pt-2.5 font-bold leading-tight">
                    <span>{ticket.duration} Minút</span>
                    <span>Počet zón: {ticket.zones}</span>
                </div>
                <Divider />
                <IconContext.Provider value={{ color: '#00a6e3' }}>
                    {Object.entries(ticket.prices).map(([item, value]) => (
                        <>
                            <div
                                key={value}
                                className={`flex w-full flex-row items-center justify-center ${
                                    order[item] > 0
                                        ? 'text-black'
                                        : 'text-secondary'
                                }`}
                            >
                                <div className="w-1/2 text-base">
                                    {tickets[item]}
                                </div>
                                <div className="item-center flex flex-1 flex-row justify-center gap-3 font-semibold">
                                    <button
                                        onClick={() =>
                                            updateOrder(item, 'remove')
                                        }
                                    >
                                        <IoIosRemoveCircleOutline size="25px" />
                                    </button>
                                    <span>{order[item]}x</span>
                                    <button
                                        onClick={() => updateOrder(item, 'add')}
                                    >
                                        <IoIosAddCircleOutline size="25px" />
                                    </button>
                                </div>
                                <div className="text-xs font-semibold">
                                    {value.toLocaleString().replace('.', ',')}€
                                </div>
                            </div>
                            <Divider />
                        </>
                    ))}
                </IconContext.Provider>
                <span className="px-5">Aktivácia lístka</span>

                <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-400">
                    <div className="relative -top-2.5 h-7 w-7 rounded-full bg-primary"></div>
                </div>
                <span className="w-full pt-2 text-right text-xs font-bold text-primary">
                    automaticky po zakúpení
                </span>
                <BuyButton
                    text="Dobiť kredit"
                    icon={<CiWallet size="34px" />}
                />
                <BuyButton
                    text="Zaplatiť platobnou kartou"
                    icon={
                        <BsCreditCard2Front
                            size="28px"
                            style={{
                                transform: 'rotate(-45deg)',
                            }}
                        />
                    }
                    onClick={() => {
                        ticketCtx?.setTicket({
                            ...ticket,
                            active: true,
                            setAt: dayjs()
                                .add(ticket.duration, 'minutes')
                                .toDate(),
                        })
                        navigate('/')
                    }}
                    price={totalPrice}
                />
                <div className="flex flex-row items-center justify-between pr-5">
                    <div className="flex flex-col">
                        <h4 className="text-[17px] font-semibold leading-tight">
                            Zapamätať kartu
                        </h4>
                        <span className="text-xs font-semibold text-primary">
                            Ďalšie nákupy budú rýchlejšie
                        </span>
                    </div>
                    <Switch active={rememberCard} onClick={setRememberCard} />
                </div>
            </section>
        </div>
    )
}

export default Tickets
