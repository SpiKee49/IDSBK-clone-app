import { IconContext } from 'react-icons'
import { ReactNode } from 'react'

function BuyButton(props: {
    icon: ReactNode
    text: string
    price?: number
    onClick?: () => void
}) {
    const { icon, text, price, onClick } = props

    return (
        <IconContext.Provider value={{ color: 'white' }}>
            <div
                className="flex h-12 w-full flex-row items-center overflow-clip rounded-full text-white"
                onClick={onClick}
            >
                <div className="flex h-full flex-1 flex-row items-center justify-start gap-2 bg-primary pl-4 text-sm">
                    {icon}
                    <span>{text}</span>
                </div>
                <div className="flex h-full w-1/4 items-center justify-center bg-primary-700 text-center align-middle text-sm">
                    {price && <span>{price.toFixed(2)}€</span>}
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default BuyButton
