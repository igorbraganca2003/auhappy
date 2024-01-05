import team1 from '../Midia/team1.png'
import team2 from '../Midia/team2.png'
import team3 from '../Midia/team3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function OurTeamCards() {

    const TeamInfos = [
        { foto: team1, nome: 'Adriana Braga', funcao: 'Doutora', whatsapp: 'https://www.whatsapp.com/download/', instagram: 'https://www.instagram.com' },
        { foto: team2, nome: 'Silvana Menezes', funcao: 'Consultora', whatsapp: 'https://www.whatsapp.com/download/', instagram: 'https://www.instagram.com' },
        { foto: team3, nome: 'Carlos Felipe', funcao: 'Especialista', whatsapp: 'https://www.whatsapp.com/download/', instagram: 'https://www.instagram.com' },
    ]

    return (
        <div className='flex desktop:flex-row mobile:flex-col justify-between'>
            {TeamInfos.map((item, index) => (
                <div className='desktop:w-1/4 mobile:w-[65%] mobile:mx-auto desktop:mx-0 mobile:py-[10%]'>
                    <img src={TeamInfos[index].foto} className='pb-[10%]' />
                    <h2 className='font-poppins font-semibold desktop:text-[1.8vw] mobile:text-[6vw] pb-[5%] dark:text-white'>{TeamInfos[index].nome}</h2>
                    <div className='mobile:flex desktop:flex-col mobile:items-center'>
                        <h3 className='font-poppins font-semibold desktop:text-[1vw] mobile:text-[4vw] text-gray'>{TeamInfos[index].funcao}</h3>
                        <div className='flex mx-auto desktop:w-1/3 mobile:w-[40%] justify-between desktop:py-[8%] mobile:py-[1%]'>
                            <a href={TeamInfos[index].instagram}>
                                <FontAwesomeIcon icon={faInstagram} className='text-purple desktop:text-[2vw] mobile:text-[8vw] dark:text-green' />
                            </a>
                            <a href={TeamInfos[index].whatsapp}>
                                <FontAwesomeIcon icon={faWhatsapp} className='text-purple desktop:text-[2vw] mobile:text-[8vw] dark:text-green' />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
} 