import React, { useEffect, useState } from 'react';
import cat_circle_light from '../Midia/cat_circle_light.png'
import cat_circle_dark from '../Midia/cat_circle_dark.png'

const ServicesInfos = [
    { title: 'Vacinas', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' },
    { title: 'Auxílio Funerário', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' },
    { title: 'Exames', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' },
    { title: 'Aberto 24h', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' },
]

const Services = ({ isDarkMode }) => {
    return (
        <div className='flex w-[80%] mx-auto mt-[5%] justify-between items-center'>
            <img
                className=" w-1/3 "
                src={isDarkMode ? cat_circle_dark : cat_circle_light}
                alt="Gao laranja"
            />
            <div className='text-left w-[60%] grid-rows-2 flex-wrap'>
                <h2 className='text-black dark:text-white font-poppins font-bold text-[4vw]'>Nossos Serviços</h2>
                <div className='flex flex-wrap mt-[5%]'>
                    {ServicesInfos.map((item, index) => (
                        <div key={index} className="w-1/2 p-4">
                            <div className="flex flex-col h-full">
                                <h3 className='text-black dark:text-white font-poppins font-semibold text-[2vw]'>{ServicesInfos[index].title}</h3>
                                <p className='text-black dark:text-white font-poppins text-[1.1vw] w-4/5 pt-[1%]'>{ServicesInfos[index].text}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};


const Toggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        const darkModeListener = (e) => {
            setIsDarkMode(e.matches);
        };

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeMediaQuery.addEventListener('change', darkModeListener);

        return () => {
            darkModeMediaQuery.removeEventListener('change', darkModeListener);
        };
    }, []);

    return (
        <Services isDarkMode={isDarkMode} />
    );
};

export default Toggle;