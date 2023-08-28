type Props = {
    head: string
    status: string
    buttonValue: string
}

import { ModalContext } from '../App'
import { useContext } from 'react'

function Tile(props: Props) {
    const modalContext = useContext(ModalContext)

    const { head, status, buttonValue } = props
    return (
        <div className="mx-5 flex flex-col justify-start gap-4 rounded-lg bg-white text-center shadow-md shadow-slate-300">
            <p className="rounded-t-lg bg-primary py-1 text-sm text-white ">
                {head}
            </p>
            <p className="text-xs font-bold">{status}</p>
            <button
                type="button"
                className="mx-auto mb-5 w-[80%] rounded-full bg-primary py-3 text-white"
                onClick={() => modalContext?.setOpenModal(true)}
            >
                {buttonValue}
            </button>
        </div>
    )
}

export default Tile
