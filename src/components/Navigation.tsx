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
        console.log(tab)
        if (Object.keys(tabs).includes(tab)) {
            setActiveTab(tab)
        } else {
            setActiveTab('')
        }
    }, [location])

    return (
        <div
            className={`flex flex-row w-full [&>*]:flex-1 bottom-0 left-0 [&>*>*]:transition-all [&>*>*]:duration-200 [&>*>*]:ease-in-out  bg-white z-40 ${
                modalContext?.isModalOpen ? 'hidden' : 'fixed'
            }`}
        >
            {Object.keys(tabs).map((item) => (
                <div
                    key={item}
                    className={`flex flex-col gap-0 :transition-all
            duration-200 border-b-4
            ease-in-out ${
                activeTab === item ? ' border-primary' : 'border-white'
            }`}
                    onClick={() => navigate(`/${item}`)}
                >
                    <img
                        src={`img/${
                            icons[item] + (activeTab === item ? '-active' : '')
                        }.svg`}
                        alt={icons[item]}
                        className="scale-[40%]"
                    />
                    <span
                        className={`text-center ${
                            activeTab === item
                                ? 'text-primary font-bold'
                                : 'text-gray-500'
                        } text-xs -mt-5 pb-1`}
                    >
                        {tabs[item]}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Navigation
