import cat_triangle from '../Midia/cat_triangle.png'
import dog_h from '../Midia/dog_h.png'
import dog_u from '../Midia/dog_u.png'

export function MainPets(){
    return(
        <div className='flex items-start w-[80%] justify-between py-[5%] mx-auto'>
            <img src={cat_triangle} className='w-[38%] mr-[-5%]'/>
            <img src={dog_u} className='w-[30%]'/>
            <img src={dog_h} className='w-[27%]'/>
        </div>
    )
}