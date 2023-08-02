import {
    IoIosAddCircleOutline,
    IoIosArrowDropleft,
    IoIosRemoveCircleOutline,
} from 'react-icons/io'
import { ReactNode, useState } from 'react'

import { BsCreditCard2Front } from 'react-icons/bs'
import { CiWallet } from 'react-icons/ci'
import { IconContext } from 'react-icons'
import Switch from '../components/Switch'
import { useNavigate } from 'react-router-dom'

const tickets: { [key: string]: string } = {
    basic: 'Základný',
    discount: 'Zľavnený',
    dog: 'Batožina / Pes',
}

const ticketCosts: { [key: string]: number } = {
    basic: 1.41,
    discount: 0.71,
    dog: 0.49,
}

function Divider() {
    return <span className="mx-auto w-[90%] bg-gray-100 p-[0.5px]"></span>
}

function BuyButton(props: { icon: ReactNode; text: string; price?: number }) {
    const { icon, text, price } = props

    return (
        <IconContext.Provider value={{ color: 'white' }}>
            <div className="flex h-12 w-full flex-row items-center overflow-clip rounded-full text-white">
                <div className="flex h-full flex-1 flex-row items-center justify-start gap-2 bg-primary pl-4 text-sm">
                    {icon}
                    <span>{text}</span>
                </div>
                <div className="flex h-full w-1/4 items-center justify-center bg-primary-700 text-center align-middle text-sm">
                    {price && <span>{price}€</span>}
                </div>
            </div>
        </IconContext.Provider>
    )
}

function Tickets() {
    const navigate = useNavigate()
    const [rememberCard, setRememberCard] = useState(false)

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
            <section className="flex flex-col gap-4 px-5">
                <div className="flex flex-row justify-between px-5 pt-2.5 font-bold leading-tight">
                    <span>60 Minút</span>
                    <span>Počet zón: 3</span>
                </div>
                <Divider />
                <IconContext.Provider value={{ color: '#00a6e3' }}>
                    {Object.keys(tickets).map((ticket) => (
                        <>
                            <div className="flex w-full flex-row items-center justify-center text-secondary">
                                <div className="w-1/2 text-base">
                                    {tickets[ticket]}
                                </div>
                                <div className="item-center flex flex-1 flex-row justify-center gap-3 font-semibold">
                                    <IoIosRemoveCircleOutline size="25px" />
                                    <span>0x</span>
                                    <IoIosAddCircleOutline size="25px" />
                                </div>
                                <div className="text-xs font-semibold">
                                    {ticketCosts[ticket]
                                        .toLocaleString()
                                        .replace('.', ',')}
                                    €
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
                    price={0.79}
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
