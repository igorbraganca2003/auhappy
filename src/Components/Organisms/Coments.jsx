import ComentsCards from "../Molecules/ComentsCards"

export default function Coments() {
    return (
        <div>
            <div className="mx-auto w-[80%] my-[5%] border">
                <h2 className="text-left font-poppins font-semibold text-[3vw]">Comentários</h2>
                <h3 className="text-left font-poppins font-medium text-gray text-[1.2vw]">O que nossos clientes acham do nosso serviço:</h3>
                <ComentsCards/>
            </div>
        </div>
    )
}