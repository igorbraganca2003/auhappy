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
        <button className="ellipse">
            Nossos Serviços
        </button>
    )
}


//Botão Entre em contato ->
export function GetInContactButton() {
    return (
        <button className='desktop:px-[10%] mobile:px-[4%]'>
            <p className="font-black desktop:text-[1.2vw] mobile:text-[1.5vw] desktop:w-4/5 mobile:w-[120%] text-center items-center flex-row text-black dark:text-white ">Entre em contato!
                <hr className='desktop:border-2 mobile:border border-black rounded-full desktop:w-[80%] mobile:w-[] mx-auto mt-[10%] dark:border-white' />
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
                    onChange={handleCheckboxChange} />
                <span
                    className={`slider flex desktop:h-[26px] desktop:w-[50px] mobile:h-[20px] mobile:w-[40px] items-center rounded-full p-1 shadow-[0_3px_15px_rgb(0,0,0,0.20)] duration-200 ${isChecked ? 'bg-white dark:bg-purple' : 'bg-purple dark:bg-white'
                        }`}>
                    <span
                        className={`dot desktop:h-[100%] desktop:w-[40%] mobile:h-[100%] mobile:w-[40%] rounded-full bg-purple duration-200 ${isChecked ? 'desktop:translate-x-6 mobile:translate-x-5 bg-[#4F4993] dark:bg-white' : 'bg-white dark:bg-DarkBackground'
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
                } font-poppins desktop:text-[1.2vw] mobile:text-[2vw] font-semibold desktop:w-[80%] mobile:w-[83%] py-[5%] desktop:rounded-[0.5vw] mobile:rounded-[1vw]`}>
            Escolher Plano
        </button>
    );
}


//Botão do formulário
export function formButton() {
    return (
        <button
            className='bg-white dark:bg-white text-purple dark:text-purple font-poppins desktop:text-[1.2vw] mobile:text-[4vw] font-semibold w-[90%] py-[4%] desktop:rounded-[0.5vw] mobile:rounded-[1vw]'>
            Enviar
        </button>
    );
}
