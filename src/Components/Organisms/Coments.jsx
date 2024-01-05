import ComentsCards from "../Molecules/ComentsCards"

export default function Coments() {
    return (
        <div>
            <div className="ml-auto w-[90%] my-[5%]">
                <h2 className="text-left font-poppins font-semibold text-black desktop:text-[3vw] mobile:text-[7vw] dark:text-white">Comentários</h2>
                <h3 className="text-left font-poppins font-medium text-gray desktop:text-[1.2vw] mobile:text-[3vw] pb-[3%]">O que nossos clientes acham do nosso serviço:</h3>
                <ComentsCards/>
            </div>
        </div>
    )
}