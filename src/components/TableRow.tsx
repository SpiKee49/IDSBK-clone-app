import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

type Props = {
    zone: number
    minutes: number
    price: string
}

function TableRow(props: Props) {
    const { zone, minutes, price } = props
    const navigate = useNavigate()
    return (
        <div className="flex w-full flex-row  py-2 [&>div>p]:-mt-1  [&>div>p]:text-xl [&>div>p]:font-semibold [&>div>p]:text-gray-800 [&>div>span]:text-[0.6rem] [&>div>span]:font-semibold [&>div>span]:uppercase [&>div>span]:tracking-tight [&>div>span]:text-gray-400 [&>div]:pb-1">
            <div className="flex w-1/5 flex-col gap-0 text-center">
                <span>zóny</span>
                <p>{zone}</p>
            </div>
            <div className="flex w-1/6 flex-col gap-0 border-l-[1px] text-center">
                <span>minúty</span>
                <p>{minutes}</p>
            </div>
            <div className="flex flex-1 flex-col gap-0 border-l-[1px] text-center">
                <span>zľavnený</span>
                <p>{price}</p>
            </div>
            <div className="flex w-1/6 items-center justify-start ">
                <div
                    onClick={() => navigate('/tickets/buy')}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-primary hover:bg-gray-300"
                >
                    <HiOutlineShoppingCart />
                </div>
            </div>
        </div>
    )
}

export default TableRow
