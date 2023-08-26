import { HiOutlineArrowsUpDown } from 'react-icons/hi2'
import { IconContext } from 'react-icons'
import { LuClock7 } from 'react-icons/lu'
import { PiSlidersLight } from 'react-icons/pi'

function SearchPage() {
    return (
        <div className="flex flex-col items-center justify-center bg-white pb-40">
            <div className="z-0 flex h-1/5 w-full flex-col items-center justify-center gap-5 bg-gradient-to-b from-primary to-primary-400 px-2 pb-1 pt-5">
                <div className=" relative flex w-full flex-row items-center justify-center">
                    <h2 className=" text-normal text-center font-semibold tracking-tighter text-white">
                        Vyhľadať spojenia
                    </h2>
                </div>

                <div className="flex w-full flex-row items-center justify-start gap-2">
                    <img
                        src="/img/from-to.svg"
                        alt="from-to-icon"
                        className="w-7"
                    />
                    <div className="flex flex-1 flex-col gap-7 text-xl text-white">
                        <input
                            className="border-b-2 border-white bg-transparent placeholder-white"
                            type="text"
                            name="from"
                            placeholder="Odkiaľ"
                        />
                        <input
                            className="border-b-2 border-white bg-transparent placeholder-white"
                            type="text"
                            name="to"
                            placeholder="Kam"
                        />
                    </div>
                    <IconContext.Provider
                        value={{ color: 'white', size: '50px' }}
                    >
                        <HiOutlineArrowsUpDown />
                    </IconContext.Provider>
                </div>
                <div className="flex w-full flex-row gap-5 [&>*]:flex-1">
                    <IconContext.Provider
                        value={{ color: 'white', size: '20px' }}
                    >
                        <button className="flex flex-row items-center justify-start gap-2 rounded-full bg-primary-100 px-6  text-xs text-white [&>span]:flex-1 ">
                            <LuClock7 />
                            <span>
                                Odchod <br />
                                Teraz
                            </span>
                        </button>
                        <button className="flex flex-row items-center justify-start gap-2 rounded-full bg-primary-100 px-6  text-xs text-white [&>span]:flex-1 ">
                            <PiSlidersLight
                                style={{
                                    transform: 'rotate(-90deg) scale(1, -1)',
                                }}
                            />
                            <span>Možnosti</span>
                        </button>
                    </IconContext.Provider>
                </div>
            </div>
            <section className="flex w-full flex-col gap-4 px-5 lg:w-1/3"></section>
        </div>
    )
}

export default SearchPage
