import comment_user_1 from '../Midia/comment_user_1.jpg'
import comment_user_2 from '../Midia/comment_user_2.jpg'
import comment_user_3 from '../Midia/comment_user_3.jpg'
import comment_user_4 from '../Midia/comment_user_4.jpg'
import comment_user_5 from '../Midia/comment_user_5.jpg'
import comment_user_6 from '../Midia/comment_user_6.jpg'

export default function ComentsCards() {

    const coments = [
        { foto: comment_user_1, nome: 'Eduardo', comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
        { foto: comment_user_2, nome: 'Julia', comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
        { foto: comment_user_3, nome: 'Alvaro', comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
        { foto: comment_user_4, nome: 'Carla', comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
        { foto: comment_user_5, nome: 'Felipe', comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
        { foto: comment_user_6, nome: 'Mariana', comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
    ]

    return (
        <div className='flex mobile:flex-wrap desktop:flex-nowrap overflow-x-auto scrollbar-hide '>
            {coments.map((comentario, index) => (
                <div key={index} className="bg-purple desktop:w-[18%] mobile:w-[45%] h-full rounded-t-full flex-shrink-0 desktop:mr-[1vw] mobile:mr-[2vw] desktop:mb-0 mobile:mb-[5%]">
                    <div className='w-[70%] h-[80%] pt-[25%] mx-auto'>
                        <p className="items-center text-white text-left font-poppins desktop:text-[1vw] mobile:text-[2.5vw]">
                            {coments[index].comentario}
                        </p>
                        <div className='flex items-center pt-[12%] pb-[8%]'>
                            <img src={coments[index].foto} className='desktop:w-[3vw] mobile:w-[8vw] desktop:h-[3vw] mobile:h-[8vw] relative rounded-full object-cover'/>
                            <div className='items-center pl-[8%]'>
                                <p className='text-white font-poppins desktop:text-[1.2vw] mobile:text-[3vw] font-medium'>{coments[index].nome}</p>
                                <hr className='border-[1.2px] border-white w-[40%]' />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}