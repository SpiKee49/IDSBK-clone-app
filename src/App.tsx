import { createContext, useState } from 'react'

import Modal from './components/Modal'
import Navigation from './components/Navigation'
import { Outlet } from 'react-router-dom'
import ticketData from './assets/tickets.json'

type modalOpen = {
    isModalOpen: boolean
    setOpenModal: (value: boolean) => void
}
export type TicketType = {
    duration: number
    zones: number
    basic: boolean
    prices: {
        basic: number
        discount: number
        dog: number
    }
}
type Ticket = {
    ticket: TicketType
    setTicket: (ticket: TicketType) => void
}

export const ModalContext = createContext<modalOpen | null>(null)
export const TicketContext = createContext<Ticket | null>(null)

function App() {
    const [modalOpen, setModalOpen] = useState(false)
    const [ticket, setTicket] = useState<TicketType>(ticketData[0])

    return (
        <TicketContext.Provider
            value={{
                ticket,
                setTicket,
            }}
        >
            <ModalContext.Provider
                value={{
                    isModalOpen: modalOpen,
                    setOpenModal: setModalOpen,
                }}
            >
                <div className="h-screen w-full">
                    <Modal />
                    <Outlet />
                    <Navigation />
                </div>
            </ModalContext.Provider>
        </TicketContext.Provider>
    )
}

export default App
