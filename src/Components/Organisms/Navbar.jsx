import Logo from '../Midia/logo.png'

export default function NavBar() {
    return (
        <div className='flex flex-row justify-between text-[1.1vw] font-poppins text-black dark:text-white font-medium w-screen px-[8%] pt-[2%] items-center'>
            <img className='w-[15%]' src={Logo}/>
            <ul className='flex w-2/4 items-center justify-between'>
                <a href="#">Nossos Planos</a>
                <a href="#">O que fazemos?</a>
                <a href="#">Avaliações</a>
            </ul>
        </div>

    )
}