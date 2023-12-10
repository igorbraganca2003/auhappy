import user1 from '../Midia/user1.png'
import user2 from '../Midia/user2.png'

export default function Professionals() {
    return (
        <div className="flex-row w-[11%]">
            <h2 className='flex text-left text-[1.3vw] font-semibold text-black dark:text-white'>Profissionais</h2>
            <div className='flex items-center justify-between pt-2'>
                <img src={user1} className='w-[35%]'/>
                <img src={user2} className='w-[35%]'/>
                <p className='flex text-[2.1vw] text-black dark:text-white'>+</p>
            </div>
        </div>
    )
}