import { BsCircle, BsCircleFill } from 'react-icons/bs'
import { ModalContext, TicketContext } from '../App'
import { useContext, useEffect, useState } from 'react'

import { IconContext } from 'react-icons'
import { useNavigate } from 'react-router-dom'

function Modal() {
    const modalContext = useContext(ModalContext)
    const ticketContext = useContext(TicketContext)
    const items = [
        'Základné lístky',
        'Zľavnené lístky',
        'Denné lístky',
        'Batožina / pes',
        'Bratislava - Hainburg',
    ]
    const navigate = useNavigate()

    const [selectedItem, setSelectedItem] = useState<number>()
    const [slideModalUp, setSlideModalUp] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (modalContext?.isModalOpen) {
            setShowModal(true)
            setTimeout(() => {
                setSlideModalUp(true)
            }, 100)
        } else {
            // if isModalOpen === false
            setSlideModalUp(false)
            setSelectedItem(undefined)
            setTimeout(() => {
                setShowModal(false)
            }, 300)
        }
    }, [modalContext])

    function updateTicketType(index: number) {
        ticketContext?.setTicket({
            ...ticketContext.ticket,
            basic: index < 1,
        })
        setSelectedItem(index)
    }

    return (
        <div
            className={`z-[45] h-screen w-full bg-black transition-all  duration-500 ease-in-out ${
                showModal ? 'absolute bg-opacity-50' : 'hidden bg-opacity-0'
            }`}
        >
            <div
                className={`absolute left-0 z-50 flex h-screen w-full flex-col ${
                    slideModalUp ? 'top-0' : 'top-full'
                }  items-center transition-all duration-500 ease-in-out`}
            >
                <div
                    className="h-1/2 w-full lg:h-1/3"
                    onClick={() => modalContext?.setOpenModal(false)}
                ></div>
                <div className="flex w-full flex-col items-center justify-start gap-[1em] rounded-t-3xl bg-white pb-10 lg:w-1/3 lg:rounded-b-3xl ">
                    <span className="w-full rounded-t-3xl bg-primary py-[2px] text-center text-white">
                        Jednorázový cestovný lístok
                    </span>
                    <IconContext.Provider
                        value={{ color: '#00a6e3', size: '25px' }}
                    >
                        <div className="flex w-[85%] flex-col">
                            {items.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex h-12 flex-row items-center gap-2 hover:cursor-pointer"
                                    onClick={() => updateTicketType(index)}
                                >
                                    {selectedItem === index ? (
                                        <BsCircleFill />
                                    ) : (
                                        <BsCircle />
                                    )}
                                    {item}
                                </div>
                            ))}
                        </div>
                    </IconContext.Provider>
                    <button
                        type="button"
                        onClick={() => {
                            navigate('/tickets/select')
                            modalContext?.setOpenModal(false)
                        }}
                        className="h-12 w-[90%] rounded-full bg-primary text-white shadow-md"
                    >
                        Potvrdiť výber
                    </button>
                    <button
                        onClick={() => modalContext?.setOpenModal(false)}
                        type="button"
                        className="h-12 w-[90%] rounded-full bg-white text-primary shadow-md"
                    >
                        Späť
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
