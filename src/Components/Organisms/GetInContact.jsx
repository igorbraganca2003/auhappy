import ContactForm from "../Molecules/ContactForm"
import dogArc from "../Midia/dog_arc.png"

export default function GetInContact() {
    return (
        <div className="mx-auto w-[80%] my-[5%]">
            <h2 className="text-left font-poppins font-semibold text-[3vw]">Entre em Contato!</h2>
            <h3 className="text-left font-poppins font-medium text-gray text-[1.2vw]">Nos conte o que você precisa!</h3>
            <div className="flex justify-between">
                <ContactForm />
                <img src={dogArc} alt="" />
            </div>
        </div>
    )
}