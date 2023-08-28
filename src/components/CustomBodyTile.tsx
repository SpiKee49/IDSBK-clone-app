import type { ReactNode } from 'react'

type Props = {
    headColor?: string
    head: string
    children: ReactNode
    uppercase?: boolean
}

function CustomBodyTile(props: Props) {
    const { head, children, headColor, uppercase } = props
    return (
        <div
            className={`${
                !uppercase && 'mx-5'
            } flex flex-col justify-start rounded-lg text-center shadow-md shadow-slate-300`}
        >
            <p
                className={`${headColor ?? 'bg-primary'} ${
                    uppercase ?? 'uppercase'
                } rounded-t-lg py-1 text-sm text-white`}
            >
                {head}
            </p>
            {children}
        </div>
    )
}

export default CustomBodyTile
