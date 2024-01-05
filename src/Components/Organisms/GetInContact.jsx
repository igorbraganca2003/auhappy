import ContactForm from "../Molecules/ContactForm"
import dogArc from "../Midia/dog_arc.png"

export default function GetInContact() {
    return (
        <div className="mx-auto w-[80%] my-[5%]">
            <h2 className="text-left font-poppins font-semibold desktop:text-[3vw] mobile:text-[7vw] dark:text-white">Entre em Contato!</h2>
            <h3 className="text-left font-poppins font-medium desktop:text-[1.2vw] mobile:text-[3vw] text-gray ">Nos conte o que você precisa!</h3>
            <div className="flex justify-between items-center">
                <ContactForm />
                <img src={dogArc} className="desktop:block mobile:hidden w-[40%] h-full"/>
            </div>
        </div>
    )
}