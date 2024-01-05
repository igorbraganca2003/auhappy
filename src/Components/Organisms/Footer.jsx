import Logo from '../Midia/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className='w-[80%] mx-auto justify-between mt-[12%] pb-[5%]'>
            <img src={Logo} alt="AuHappy!" className='desktop:hidden mobile:block w-[50%] mx-auto pb-[15%]' />
            <div className='flex justify-between'>
                <FirstColumn />
                <div className=' desktop:flex mobile:flex-row w-[50%]'>
                    <SecondColumn />
                    <ThirdColumn />
                </div>
            </div>
            <LineFooterDesktop />
            <LineFooterMobile/>
        </div>
    )
}

function FirstColumn() {
    return (
        <div className='flex flex-col items-start w-[35%] text-left'>
            <img src={Logo} alt="AuHappy!" className='desktop:block mobile:hidden w-[50%] pb-[15%]' />
            <div className='w-[80%]'>
                <p className='font-poppins desktop:text-[1vw] mobile:text-[3vw] desktop:font-medium mobile:font-normal text-lightGray dark:text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p><br />
                <p className='font-poppins desktop:text-[1vw] mobile:text-[3vw] desktop:font-medium mobile:font-normal text-lightGray dark:text-gray'>sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
            </div>
        </div>
    )
}

function SecondColumn() {
    return (
        <div className='desktop:w-1/2 mobile:w-full mobile:mb-[15%] desktop:mb-0 mobile:pr-[10%] mobile:text-left desktop:text-center'>
            <div className='flex items-center desktop:w-[45%] mobile:w-[100%] mx-auto pb-[10%]'>
                <FontAwesomeIcon icon={faPhone} className='text-purple dark:text-green desktop:text-[1.3vw] mobile:text-[4vw] desktop:pr-[13%] mobile:pr-[8%]' />
                <h3 className='font-poppins font-bold text-purple dark:text-green desktop:text-[1.3vw] mobile:text-[4vw]'>Telefones</h3>
            </div>
            <a href='https://www.youtube.com'>
                <p className='font-poppins font-medium desktop:text-[1vw] mobile:text-[3vw] pb-[5%] dark:text-white'>(11) 9876-54321</p>
            </a>
            <a href='https://www.youtube.com'>
                <p className='font-poppins font-medium desktop:text-[1vw] mobile:text-[3vw] pb-[5%] dark:text-white'>(11) 9876-54321</p>
            </a>
            <a href='https://www.youtube.com'>
                <p className='font-poppins font-medium desktop:text-[1vw] mobile:text-[3vw] pb-[5%] dark:text-white'>(11) 9876-54321</p>
            </a>
        </div>
    )
}

function ThirdColumn() {
    return (
        <div className='desktop:w-1/2 mobile:w-full mobile:pr-[10%]'>
            <div className='flex items-center desktop:w-[45%] mobile:w-[100%] mx-auto pb-[10%]'>
                <FontAwesomeIcon icon={faEnvelope} className='text-purple dark:text-green desktop:text-[1.3vw] mobile:text-[4vw] desktop:pr-[13%] mobile:pr-[8%]' />
                <h3 className='font-poppins font-bold text-purple dark:text-green desktop:text-[1.3vw] mobile:text-[4vw]'>Emails</h3>
            </div>
            <a href='https://www.youtube.com'>
                <p className='font-poppins font-medium desktop:text-[1vw] mobile:text-[3vw] pb-[5%] dark:text-white'>email@exemplo.com.br</p>
            </a>
            <a href='https://www.youtube.com'>
                <p className='font-poppins font-medium desktop:text-[1vw] mobile:text-[3vw] pb-[5%] dark:text-white'>email@exemplo.com.br</p>
            </a>
            <a href='https://www.youtube.com'>
                <p className='font-poppins font-medium desktop:text-[1vw] mobile:text-[3vw] pb-[5%] dark:text-white'>email@exemplo.com.br</p>
            </a>
        </div>
    )
}

function LineFooterDesktop() {
    return (
        <div className='flex items-center w-full mt-[2vw] justify-between desktop:flex mobile:hidden'>
            <div className='flex-col w-[75%]'>
                <hr className='w-full border-1 dark:text-white'/>
                <a href="https://www.instagram.com/igor.braganca/">
                    <p className='text-left font-poppins text-lightGray font-medium text-[0.8vw] pt-[2%] dark:text-gray'>Igor Bragança - 2023</p>
                </a>
            </div>
            <div className='flex pl-[2%] w-[20%] justify-between pb-[3%]'>
                <FontAwesomeIcon icon={faXTwitter} className='text-purple dark:text-green text-[2.5vw]' />
                <FontAwesomeIcon icon={faWhatsapp} className='text-purple dark:text-green text-[2.5vw]' />
                <FontAwesomeIcon icon={faInstagram} className='text-purple dark:text-green text-[2.5vw]' />
            </div>
        </div>
    )
}

function LineFooterMobile() {
    return (
        <div className='flex items-center w-full mt-[7vw] justify-between desktop:hidden mobile:flex'>
            <div className='flex pl-[2%] w-[35%] justify-between pb-[3%]'>
                <FontAwesomeIcon icon={faXTwitter} className='text-purple dark:text-green text-[6vw]' />
                <FontAwesomeIcon icon={faWhatsapp} className='text-purple dark:text-green text-[6vw]' />
                <FontAwesomeIcon icon={faInstagram} className='text-purple dark:text-green text-[6vw]' />
            </div>
            <div className='flex-col w-[58%]'>
                <hr className='w-full border-1 border-gray dark:text-white'/>
                <a href="https://www.instagram.com/igor.braganca/">
                    <p className='text-right font-poppins text-lightGray font-medium text-[1.5vw] pt-[2%] dark:text-gray'>Igor Bragança - 2023</p>
                </a>
            </div>
        </div>
    )
}