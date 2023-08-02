import { ReactNode } from 'react'

type Props = {
    width?: string
    height?: string
    minHeight?: string
    children: ReactNode
    direction: 'row' | 'col'
    px?: number
    py?: number
    justify:
        | 'justify-center'
        | 'justify-start'
        | 'justify-between'
        | 'justify-end'
    items:
        | 'items-center'
        | 'items-start'
        | 'items-baseline'
        | 'items-end'
        | 'items-stretch'

    gap?: number
}

function Header(props: Props) {
    const { width, justify, items, height, children, direction, gap, px, py } =
        props
    return (
        <div
            className={`
            flex 
            flex-${direction} 
            bg-gradient-to-b from-primary to-primary-400 
            ${width ? `w-[${width}]` : 'w-full'} 
            ${height ? `h-[${height}]` : 'h-1/5'} 
            ${px ? `px-${px}` : 'px-2'} 
            ${py ? `py-${py}` : 'py-2'} 
            ${justify} 
            ${items} 
            ${gap ? `gap-${gap}` : 'gap-2'} 
            z-0`}
        >
            {children}
        </div>
    )
}

export default Header
