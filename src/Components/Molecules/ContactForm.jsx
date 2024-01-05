import {formButton} from './Buttons'

export default function ContactForm() {
    return (
        <div className="desktop:w-1/2 mobile:w-full py-[5%]">
            <form action="/action_page.php" className="bg-purple desktop:rounded-[1.2vw] mobile:rounded-[3vw] py-[5%]">
                <input type="text" placeholder="Nome"  
                className="w-[90%] placeholder:text-white desktop:text-[1.2vw] mobile:text-[3vw] desktop:p-[3%] mobile:p-[4%] desktop:font-semibold mobile:font-medium font-poppins text-white desktop:rounded-[0.5vw] mobile:rounded-[1vw] bg-clearPurple"/><br/><br/>
                <input type="email" placeholder="Email" 
                className="w-[90%] placeholder:text-white desktop:text-[1.2vw] mobile:text-[3vw] desktop:p-[3%] mobile:p-[4%] desktop:font-semibold mobile:font-medium font-poppins text-white desktop:rounded-[0.5vw] mobile:rounded-[1vw] bg-clearPurple"/><br/><br/>
                <input type="text" placeholder="Mensagem" 
                className="w-[90%] placeholder:text-white desktop:text-[1.2vw] mobile:text-[3vw] desktop:p-[3%] mobile:p-[4%] desktop:font-semibold mobile:font-medium font-poppins  text-white desktop:rounded-[0.5vw] mobile:rounded-[1vw] bg-clearPurple desktop:h-[15vw] mobile:h-[30vw]"/><br/><br/>
                {formButton()}
            </form>
        </div>
    )
}

