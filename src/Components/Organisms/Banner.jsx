import Exclamation from "../Molecules/Exclamation"
import Professionals from "../Molecules/Professionals"
import { EllipsisButton } from "../Molecules/Buttons"
import { GetInContactButton } from "../Molecules/Buttons"
import { MainPets } from "../Molecules/PetsPics"

export default function Banner() {
    return (
        <div>
            <div className="flex justify-evenly items-center px-[7%] py-[4%]">
                <Exclamation className='border-2'/>
                <h1 className="text-center w-2/3 text-[6.5vw] font-poppins font-bold text-black dark:text-white">Plano de Saúde para seu pet</h1>
                <Professionals />
            </div>
            <div className="flex items-center h-20 w-[27%] justify-between mx-auto ">
                <EllipsisButton/>
                <GetInContactButton/>
            </div>
            <MainPets/>
        </div>
    )
}