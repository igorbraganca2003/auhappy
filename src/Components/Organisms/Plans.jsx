import { SwitcherButton } from '../Molecules/Buttons'
import Cards from '../Molecules/Cards'

export default function Plans() {
    return (
        <div className="w-[80%] mx-auto mt-[7%]">
            <h2 className="font-semibold font-poppins text-[3.5vw] dark:text-white">
                Escolha o <span className="text-purple font-black dark:text-green">melhor</span> plano <br /> para seu pet!
            </h2>
            <div className='flex justify-between w-[40%] mx-auto my-[4%] items-center'>
                <p className='font-poppins text-[1.2vw] font-semibold dark:text-white'>Mensal</p>
                <SwitcherButton/>
                <p className='font-poppins text-[1.2vw] font-semibold dark:text-white'>Anual</p>
                <p className='font-poppins text-[1vw] font-semibold bg-green rounded-full px-[4%] py-[1.5%]'>10% de desconto</p>
            </div>
            <Cards/>
        </div>
    )
}
