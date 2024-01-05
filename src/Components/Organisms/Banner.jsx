import Exclamation from "../Molecules/Exclamation"
import Professionals from "../Molecules/Professionals"
import { EllipsisButton } from "../Molecules/Buttons"
import { GetInContactButton } from "../Molecules/Buttons"
import { MainPets } from "../Molecules/PetsPics"

export default function Banner() {
    return (
        <div>
            <div className="flex justify-evenly items-center px-[7%] desktop:py-[4%] mobile:py-[1%]">
                <Exclamation className='border-2'/>
                <h1 className="text-center w-2/3 font-poppins font-bold text-black dark:text-white mobile:text-[7vw] desktop:text-[6.5vw]">Plano de Saúde para seu pet</h1>
                <Professionals />
            </div>
            <div className="flex items-center desktop:h-20 desktop:w-[27%] mobile:w-[30%] justify-between mx-auto">
                <EllipsisButton/>
                <GetInContactButton/>
            </div>
            <MainPets/>
        </div>
    )
}