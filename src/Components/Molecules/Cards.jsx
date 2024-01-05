import { useState } from "react";
import { CardButton } from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";

export default function Cards() {
  const maxItemsToShow = 5; // Número máximo de itens para exibir inicialmente
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const CardsInfos = [
    {
      principal: true, 
      titulo: 'Au!Pet', 
      preco: '47,90',
      precoAno: '470,00',
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
      precoAno: '370,00',
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
      precoAno: '590,00',
      itens: [
        '6 consultas anuais',
        'Serviços de urgência e emergência',
        'Vacina V3 e V4 felina',
        'Vacina antirrábica',
        'Exames laboratoriais',
        'Atendimento em domicílio',
        'Exames laboratoriais'
      ],
    },
  ];

  const handleToggleExpansion = (index) => {
    setExpandedIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((prevIndex) => prevIndex !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="mobile:overflow-auto desktop:overflow-hidden mobile:scrollbar-hide mobile:pl-[8%] desktop:pl-0">
      <div className="flex mx-auto mobile:w-[135%] desktop:w-full my-[1%] desktop:justify-between mobile:justify-evenly">
        {CardsInfos.map((item, index) => (
          <div
            key={index}
            className={`${CardsInfos[index].principal
              ? 'bg-green dark:bg-[#4F4994] text-black dark:text-white'
              : 'bg-purple dark:bg-white text-white dark:text-purple'
              } desktop:w-1/4 mobile:w-[37vw] desktop:rounded-[1.5vw] mobile:rounded-[2.5vw] py-[2%] h-[100%] dark:bg-white dark:text-purple justify-center items-center flex-row `}>
            <h3 className="font-poppins font-bold desktop:text-[3vw] mobile:text-[5vw] pt-[8%]">
              {CardsInfos[index].titulo}
            </h3>
            <h4 className="font-poppins font-semibold desktop:text-[2vw] mobile:text-[3.5vw] pt-[5%]">
              R$ { CardsInfos[index].preco}
            </h4>
            <ul className="desktop:w-[75%] mobile:w-[80%] mx-auto font-poppins font-medium mobile:text-[2vw] desktop:text-[1vw] pt-[10%] pb-[5%] text-left flex-grow">
              {CardsInfos[index].itens.slice(0, expandedIndexes.includes(index) ? CardsInfos[index].itens.length : maxItemsToShow).map((item, i) => (
                <li key={i} className="flex pb-[10%] items-center">
                  <svg
                    className="flex-shrink-0 desktop:w-4 desktop:h-4 mobile:w-2 mobile:h-2 text-green-500 dark:text-green-400 mr-[7%]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
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
              {CardsInfos[index].itens.length > maxItemsToShow && (
                <div className="flex justify-center">
                  <button
                    className="cursor-pointer desktop:text-[1.5vw] mobile:text-[3.5vw]"
                    onClick={() => handleToggleExpansion(index)}
                  >
                    {expandedIndexes.includes(index) ?
                      <FontAwesomeIcon icon={faSquareMinus} /> :
                      <FontAwesomeIcon icon={faSquarePlus} />
                    }
                  </button>
                </div>
              )}
            </ul>
            <CardButton isPrincipal={CardsInfos[index].principal} />
          </div>
        ))}
      </div>
    </div>
  );
}
