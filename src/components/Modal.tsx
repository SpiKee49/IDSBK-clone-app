import { BsCircle, BsCircleFill } from 'react-icons/bs'
import { useContext, useEffect, useState } from 'react'

import { IconContext } from 'react-icons'
import { ModalContext } from '../App'

function Modal() {
    const modalContext = useContext(ModalContext)
    const items = [
        'Základné lístky',
        'Zľavnené lístky',
        'Denné lístky',
        'Batožina / pes',
        'Bratislava - Hainburg',
    ]

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

    return (
        <div
            className={`w-full h-screen z-[45] bg-black  transition-all duration-500 ease-in-out ${
                showModal ? 'absolute bg-opacity-50' : 'hidden bg-opacity-0'
            }`}
        >
            <div
                className={`w-full h-screen absolute z-50 flex flex-col left-0 ${
                    slideModalUp ? 'top-0' : 'top-full'
                }  transition-all duration-500 ease-in-out`}
            >
                <div
                    className="w-full h-1/2"
                    onClick={() => modalContext?.setOpenModal(false)}
                ></div>
                <div className="rounded-t-3xl pb-10 w-full flex flex-col gap-[1em] justify-start items-center bg-white">
                    <span className="rounded-t-3xl bg-primary w-full text-center text-white py-[2px]">
                        Jednorázový cestovný lístok
                    </span>
                    <IconContext.Provider
                        value={{ color: '#00a6e3', size: '25px' }}
                    >
                        <div className="flex flex-col w-[85%]">
                            {items.map((item, index) => (
                                <div
                                    className="flex flex-row items-center gap-2 h-12"
                                    onClick={() => setSelectedItem(index)}
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
                        className="w-[90%] h-12 shadow-md rounded-full bg-primary text-white"
                    >
                        Potvrdiť výber
                    </button>
                    <button
                        onClick={() => modalContext?.setOpenModal(false)}
                        type="button"
                        className="w-[90%] h-12 shadow-md rounded-full bg-white text-primary"
                    >
                        Späť
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
