import Logo from '../Midia/logo.png'
import { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
    return (
        <div className='flex flex-row justify-between text-[1.1vw] font-poppins text-black dark:text-white font-medium w-screen px-[8%] desktop:pt-[2%] mobile:py-[4%] items-center'>
            <img className='desktop:w-[15%] mobile:w-[30%]' src={Logo} />
            <HamburguerMenu />
            <ul className='w-2/4 items-center justify-between desktop:flex mobile:hidden'>
                <a href="#">Nossos Planos</a>
                <a href="#">O que fazemos?</a>
                <a href="#">Avaliações</a>
            </ul>
        </div>

    )
}

function HamburguerMenu() {
    const [isExpanded, setExpanded] = useState(false);

    const toggleIsExpanded = useCallback(() => {
        setExpanded((isExpanded) => !isExpanded);
    }, []);

    return (
        <div className='desktop:hidden mobile:block'>
            <button className={`text-[6vw] z-10 relative ${isExpanded ? 'text-white dark:text-black' : 'text-black dark:text-white'}`} onClick={toggleIsExpanded}>
                {isExpanded ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
            </button>

            <div className={`max-w-screen w-1/2 h-[90vw] bg-purple z-2 absolute top-0 right-0 text-black rounded-bl-[30vw]
            ${isExpanded ? 'animate-slide-in' : 'hidden'}`}>
                <ol className='text-right h-full pr-[15%] pt-[20vw] font-poppins font-semibold dark:text-black text-white text-[4.5vw]'>
                    <a href="#">
                        <li className={`mb-[10%] ${isExpanded ? 'animate-fade-in' : ''}`}>Serviços</li>
                    </a>
                    <a href="#">
                        <li className={`mb-[10%] ${isExpanded ? 'animate-fade-in' : ''}`}>Nossos Planos</li>
                    </a>
                    <a href="#">
                        <li className={`mb-[10%] ${isExpanded ? 'animate-fade-in' : ''}`}>Nosso Time</li>
                    </a>
                    <a href="#">
                        <li className={`mb-[10%] ${isExpanded ? 'animate-fade-in' : ''}`}>Fale Conosco</li>
                    </a>
                    <a href="#">
                        <li className={`mb-[10%] ${isExpanded ? 'animate-fade-in' : ''}`}>Contatos</li>
                    </a>
                </ol>
            </div>
        </div>
    );
}