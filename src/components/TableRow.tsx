import { TicketContext, TicketType } from '../App'

import { HiOutlineShoppingCart } from 'react-icons/hi'
import { IconContext } from 'react-icons'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
    ticket: TicketType
}

function TableRow(props: Props) {
    const { ticket } = props
    const price = ticket.basic ? ticket.prices.basic : ticket.prices.discount
    const ticketContext = useContext(TicketContext)
    const navigate = useNavigate()

    function buyTicket(ticket: TicketType) {
        ticketContext?.setTicket(ticket)
        navigate('/tickets/buy')
    }
    return (
        <div className="flex w-full flex-row  py-2 [&>div>p]:-mt-1  [&>div>p]:text-xl [&>div>p]:font-semibold [&>div>p]:text-gray-800 [&>div>span]:text-[0.6rem] [&>div>span]:font-semibold [&>div>span]:uppercase [&>div>span]:tracking-tight [&>div>span]:text-gray-400 [&>div]:pb-1">
            <div className="flex w-1/5 flex-col gap-0 text-center">
                <span>zóny</span>
                <p>{ticket.zones}</p>
            </div>
            <div className="flex w-1/6 flex-col gap-0 border-l-[1px] text-center">
                <span>minúty</span>
                <p>{ticket.duration}</p>
            </div>
            <div className="flex flex-1 flex-col gap-0 border-l-[1px] text-center">
                <span>{ticket.basic ? 'základný' : 'zľavnený'}</span>
                <p>{price.toFixed(2).toLocaleString().replace('.', ',')}€</p>
            </div>
            <div className="flex w-1/6 items-center justify-start ">
                <div
                    onClick={() => buyTicket(ticket)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-primary hover:cursor-pointer hover:bg-gray-300"
                >
                    <IconContext.Provider value={{ color: '#00a6e3' }}>
                        <HiOutlineShoppingCart />
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default TableRow
