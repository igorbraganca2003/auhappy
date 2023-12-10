// Imagens botão "entre em contato!"
import arrow from '../Midia/arrow.png'
import arc from '../Midia/arc.png'
import React, { useState } from 'react'

export default function Button() {
    return (
        <>
            <EllipsisButton />
            <GetInContactButton />
        </>
    )
}


// Botão Nossos Serviços
export function EllipsisButton() {
    return (
        // <button className="ellipse">
        //     Nossos Serviços
        // </button>

        <p className='font-poppins text-[1vw] font-semibold text-white bg-black dark:bg-white rounded-[50%] p-8 dark:text-DarkBackground '>Nossos Serviços</p>
    )
}


//Botão Entre em contato ->
export function GetInContactButton() {
    return (
        <button className='px-[10%]'>
            <p className="font-black text-[1vw] w-4/5 text-center items-center flex-row text-black dark:text-white ">Entre em contato!
                {/* <img src={arc} className='w-[80%] mx-auto' /> */}
                <hr className='border-2 border-black rounded-full w-[80%] mx-auto my-2' />
            </p>
        </button>
    )
}


//Botão Switcher 
const SwitcherButton = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <>
            <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center'>
                <input
                    type='checkbox'
                    name='autoSaver'
                    className='sr-only'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span
                    className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 shadow-[0_3px_15px_rgb(0,0,0,0.20)] duration-200 ${isChecked ? 'bg-white dark:bg-purple' : 'bg-purple dark:bg-white'
                        }`}
                >
                    <span
                        className={`dot h-[100%] w-[40%] rounded-full bg-white duration-200 ${isChecked ? 'translate-x-6 bg-[#4F4993] dark:bg-white' : 'bg-white dark:bg-DarkBackground'
                            }`}
                    ></span>
                </span>
            </label>
        </>
    )
}
export { SwitcherButton }



//Botão do card
export function CardButton({ isPrincipal }) {
    return (
        <button
            className={`${isPrincipal ? 'bg-purple dark:bg-white text-white dark:text-purple' : 'bg-white dark:bg-purple text-purple dark:text-white'
                } font-poppins text-[1.2vw] font-semibold w-[80%] py-[5%] rounded-lg`}>
            Escolher Plano
        </button>
    );
}


//Botão do formulário
export function formButton() {
    return (
        <button
            className='bg-white dark:bg-white text-purple dark:text-purple font-poppins text-[1.2vw] font-semibold w-[90%] py-[4%] rounded-lg'>
            Enviar
        </button>
    );
}


// // Botão do formulário
// export function formButton() {
//     return (
//         <button className='bg-black dark:bg-white text-white dark:text-purple font-poppins text-[1.2vw] font-semibold w-[80%] py-[5%] rounded-lg'>
//             Enviar
//         </button>
//     );
// }