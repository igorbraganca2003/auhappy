import user1 from '../Midia/user1.png'
import user2 from '../Midia/user2.png'

export default function Professionals() {
    return (
        <div className="flex-row desktop:w-[11%] mobile:w-[12%]">
            <h2 className='desktop:flex desktop:text-left mobile:text-center desktop:text-[1.3vw] mobile:text-[1.5vw] font-semibold text-black dark:text-white'>Profissionais</h2>
            <div className='desktop:flex mobile:flex-row items-center justify-between pt-2'>
                <img src={user1} className='desktop:w-[35%] mobile:w-[50%] desktop:pb-0 mobile:pb-[10%] mobile:mx-auto'/>
                <img src={user2} className='desktop:w-[35%] mobile:w-[50%] mobile:mx-auto'/>
                <p className='desktop:flex mobile:text-center desktop:text-[2.1vw] mobile:text-[3vw] text-black dark:text-white'>+</p>
            </div>
        </div>
    )
}