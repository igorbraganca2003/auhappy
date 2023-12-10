import OurTeamCards from "../Molecules/OurTeamCards";

export default function OutTeams() {
    return(
        <div className="mx-auto w-[80%]">
            <h2 className="font-poppins font-semibold text-[3.5vw] text-left dark:text-white">Nosso Time!</h2>
            <h3 className="font-poppins font-semibold text-[1.2vw] text-left text-gray">Conheça nossos profissionais</h3>
            <OurTeamCards/>
        </div>
    )
} 