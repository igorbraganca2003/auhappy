import {formButton} from './Buttons'

export default function ContactForm() {
    return (
        <div className="w-1/2 py-[5%]">
            <form action="/action_page.php" className="bg-purple rounded-xl h-full py-[5%]">
                <input type="text" placeholder="Nome" className="w-[90%] placeholder:text-white text-[1.2vw] p-[3%] font-semibold font-poppins text-white rounded-md bg-clearPurple"/><br/><br/>
                <input type="email" placeholder="Email" className="w-[90%] placeholder:text-white text-[1.2vw] p-[3%] font-semibold font-poppins text-white rounded-md bg-clearPurple"/><br/><br/>
                <input type="text" placeholder="Mensagem" className="w-[90%] h-[50%] placeholder:text-white text-[1.2vw] placeholder-text-top p-[3%] font-semibold font-poppins text-white rounded-md bg-clearPurple placeholder:line-height-1"/><br/><br/>

                {formButton()}
            </form>
        </div>
    )
}

