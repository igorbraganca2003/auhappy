import { SwitcherButton } from '../Molecules/Buttons'
import Cards from '../Molecules/Cards'

export default function Plans() {
    return (
        <div className="desktop:w-[80%] mobile:w-[100%] mx-auto my-[7%]">
            <h2 className="desktop:w-[40%] mobile:w-[60%] mx-auto font-semibold font-poppins desktop:text-[3.5vw] mobile:text-[6vw] dark:text-white">
                Escolha o <span className="text-purple font-black dark:text-green">melhor</span> plano para seu pet!
            </h2>
            <div className='flex justify-evenly desktop:w-[40%] mobile:w-[60%] mx-auto desktop:my-[5%] mobile:my-[7%] items-center'>
                <p className='font-poppins desktop:text-[1.2vw] mobile:text-[2.5vw] font-semibold dark:text-white'>Mensal</p>
                <SwitcherButton/>
                <p className='font-poppins desktop:text-[1.2vw] mobile:text-[2.5vw] font-semibold dark:text-white'>Anual</p>
                <p className='font-poppins desktop:text-[1vw] mobile:text-[2.5vw] font-semibold bg-green rounded-full desktop:px-[4%] mobile:px-[2%] desktop:py-[1.5%] mobile:py-[1%]'>10% de desconto</p>
            </div>
            <Cards/>        
        </div>
    )
}
