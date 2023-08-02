import Header from '../components/Header'
import { IconContext } from 'react-icons'
import { IoIosArrowDropleft } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function Tickets() {
    const navigate = useNavigate()

    function redirect(path?:string)=>{
        
        navigate
    }

    return (
        <div className="flex flex-col justify-center bg-white pb-40">
            <Header
                height="20%"
                direction="col"
                justify="justify-center"
                items="items-center"
                gap={5}
                py={2}
            >
                <IconContext.Provider value={{ color: 'white' }}>
                    <div className=" w-full flex justify-center relative flex-row items-center">
                        <button
                            onClick={() => navigate('/')}
                            className="absolute top-0 left-2"
                        >
                            <IoIosArrowDropleft size="30px" />
                        </button>
                        <h2 className=" text-white tracking-tighter font-semibold text-normal text-center">
                            Nákup cestovného lístku
                        </h2>
                    </div>
                </IconContext.Provider>
                <button className="flex flex-row gap-2 px-6 mb-6 py-[5px] text-xs justify-center items-center text-white rounded-full bg-primary-100 ">
                    <img
                        src="/img/stop-white.svg"
                        alt="stop-icon"
                        className="w-5 h-5"
                    />
                    Nad vinicami
                </button>
            </Header>
            <div className="flex flex-col gap-5 px-5 py-5 pt-[60%] "></div>
        </div>
    )
}

export default Tickets
