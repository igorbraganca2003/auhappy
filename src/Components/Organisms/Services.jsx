import React, { useEffect, useState } from 'react';
import cat_circle_light from '../Midia/cat_circle_light.png';
import cat_circle_dark from '../Midia/cat_circle_dark.png';
import cat_circle_mobile_dark from '../Midia/cat_circle_mobile_dark.png'
import cat_circle_mobile_light from '../Midia/cat_circle_mobile_light.png'

const ServicesInfos = [
    { title: 'Vacinas', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' },
    { title: 'Auxílio Funerário', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' },
    { title: 'Exames', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' },
    { title: 'Aberto 24h', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' },
];

const Services = ({ isDarkMode }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 0);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <h2 className='text-black dark:text-white mt-[5%] font-poppins font-bold w-[80%] mx-auto text-left desktop:hidden mobile:text-[5vw] '>Nossos Serviços</h2>
            <div className='flex w-[80%] mx-auto desktop:mt-[5%] justify-between items-center '>
                <img
                    className={`w-[45%] ${isMobile ? 'hidden desktop:hidden' : 'desktop:hidden'}`}
                    src={isDarkMode ? cat_circle_mobile_dark : cat_circle_mobile_light}
                    alt="Gato laranja"
                />
                <img
                    className={`w-1/3 ${isMobile ? 'block desktop:hidden' : 'hidden desktop:block'}`}
                    src={isDarkMode ? cat_circle_dark : cat_circle_light}
                    alt="Gato laranja para mobile"
                />
                <div className='text-left desktop:w-[60%] mobile:w-[55%] grid-rows-2 flex-wrap'>
                    <h2 className='text-black dark:text-white font-poppins font-bold desktop:text-[4vw] desktop:flex mobile:hidden'>Nossos Serviços</h2>
                    <div className='desktop:flex flex-wrap mt-[5%]'>
                        {ServicesInfos.map((item, index) => (
                            <div key={index} className="desktop:w-1/2 desktop:p-4 mobile:py-[5%] mobile:pr-0 mobile:pl-[15%]">
                                <div className="flex flex-col h-full">
                                    <h3 className='text-black dark:text-white font-poppins font-semibold desktop:text-[2vw] mobile:text-[4vw]'>{ServicesInfos[index].title}</h3>
                                    <p className='text-black dark:text-white font-poppins desktop:text-[1.1vw] mobile:text-[2.2vw] desktop:w-4/5 mobile:w-[100%] pt-[1%]'>{ServicesInfos[index].text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
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
