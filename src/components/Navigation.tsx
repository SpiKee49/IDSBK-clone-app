import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { ModalContext } from '../App'

const tabs: { [key: string]: string } = {
    tickets: 'Lístky',
    search: 'Hľadať',
    stops: 'Zastávky',
    lines: 'Linky',
    more: 'Viac',
}
const icons: { [key: string]: string } = {
    tickets: 'tickets',
    search: 'magnifying-glass',
    stops: 'stop',
    lines: 'bus',
    more: 'dots',
}

function Navigation() {
    const [activeTab, setActiveTab] = useState<string>('')
    const modalContext = useContext(ModalContext)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const tab = location.pathname.split('/')[1]
        if (Object.keys(tabs).includes(tab)) {
            setActiveTab(tab)
        } else {
            setActiveTab('')
        }
    }, [location])

    return (
        <div
            className={`bottom-0 left-0 z-40 flex w-full flex-row bg-white [&>*>*]:transition-all [&>*>*]:duration-200  [&>*>*]:ease-in-out [&>*]:flex-1 ${
                modalContext?.isModalOpen ? 'hidden' : 'fixed'
            }`}
        >
            {Object.keys(tabs).map((item) => (
                <div
                    key={item}
                    className={`:transition-all flex flex-col gap-0
            border-b-4 duration-200
            ease-in-out ${
                activeTab === item ? ' border-primary' : 'border-white'
            }`}
                    onClick={() => navigate(`/${item}`)}
                >
                    <img
                        src={`/img/${
                            icons[item] + (activeTab === item ? '-active' : '')
                        }.svg`}
                        alt={icons[item]}
                        className="scale-[40%]"
                    />
                    <span
                        className={`text-center ${
                            activeTab === item
                                ? 'font-bold text-primary'
                                : 'text-gray-500'
                        } -mt-5 pb-1 text-xs`}
                    >
                        {tabs[item]}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Navigation
