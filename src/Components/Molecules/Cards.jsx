import { CardButton } from "./Buttons"

export default function Cards() {

  const CardsInfos = [
    {
      principal: true, titulo: 'Au!Pet', preco: '47,90',
      itens: [
        '6 consultas anuais',
        'Serviços de urgência e emergência',
        'Vacina V3 e V4 felina',
        'Vacina antirrábica',
        'Exames laboratoriais',
        'Atendimento em domicílio',
      ],
    },
    {
      principal: false,
      titulo: 'Miau!Pet',
      preco: '37,90',
      itens: [
        '6 consultas anuais',
        'Serviços de urgência e emergência',
        'Vacina V3 e V4 felina',
        'Vacina antirrábica',
        'Exames laboratoriais',
        'Atendimento em domicílio',
      ],
    },
    {
      principal: false,
      titulo: 'Au!Love',
      preco: '59,90',
      itens: [
        '6 consultas anuais',
        'Serviços de urgência e emergência',
        'Vacina V3 e V4 felina',
        'Vacina antirrábica',
        'Exames laboratoriais',
        'Atendimento em domicílio',
      ],
    },
  ];

  return (
    <div className="flex mx-auto justify-evenly my-[8%]">
      {CardsInfos.map((item, index) => (
        <div
          key={index}
          className={`${CardsInfos[index].principal
              ? 'bg-green dark:bg-[#4F4993] text-black dark:text-white' // Se principal for verdadeiro
              : 'bg-purple dark:bg-white text-white dark:text-purple' // Se principal for falso
            } w-1/4 rounded-3xl py-[2%] h-[100%] dark:bg-white dark:text-purple`}
        >
          <h3 className="font-poppins font-bold text-[3vw] pt-[8%]">
            {CardsInfos[index].titulo}
          </h3>
          <h4 className="font-poppins font-semibold text-[2vw] pt-[5%]">
            R$ {CardsInfos[index].preco}
          </h4>
          <ul className="w-[75%] mx-auto font-poppins font-medium text-[1vw] pt-[10%] pb-[5%] text-left">
            {CardsInfos[index].itens.map((item, i) => (
              <li key={i} className="flex pb-[10%] items-center">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400 mr-[7%]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                {CardsInfos[index].itens[i]}
              </li>
            ))}
          </ul>
          <CardButton isPrincipal={CardsInfos[index].principal} />
        </div>
      ))}
    </div>
  );

}