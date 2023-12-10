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
        <div className='flex justify-between pt-[5%]'>
            {TeamInfos.map((item, index) => (
                <div className='w-1/4'>
                    <img src={TeamInfos[index].foto} className='pb-[10%]' />
                    <h2 className='font-poppins font-semibold text-[1.8vw] pb-[5%] dark:text-white'>{TeamInfos[index].nome}</h2>
                    <h3 className='font-poppins font-semibold text-[1vw] text-gray'>{TeamInfos[index].funcao}</h3>
                    <div className='flex mx-auto w-1/3 justify-between py-[8%]'>
                        <a href={TeamInfos[index].instagram}>
                            <FontAwesomeIcon icon={faInstagram} className='text-purple text-[2vw] dark:text-green'/>
                        </a>
                        <a href={TeamInfos[index].whatsapp}>
                            <FontAwesomeIcon icon={faWhatsapp} className='text-purple text-[2vw]  dark:text-green'/>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
} 