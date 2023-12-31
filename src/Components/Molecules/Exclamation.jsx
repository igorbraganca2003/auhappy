import React, { useEffect, useState } from 'react';
import green_excalamation from '../Midia/green_excalamation.png';
import purple_exclamation from '../Midia/purple_exclamation.png';

const Exclamation = ({ isDarkMode }) => {
  return (
    <div className="flex w-[15%] h-[100%] items-center">
      <img
        className="w-[20%] desktop:inline mobile:hidden"
        src={isDarkMode ? purple_exclamation : green_excalamation}
        alt="Exclamation"
      />
      <p className="w-[100%] text-black dark:text-white font-poppins text-left ml-[-8%] desktop:text-[1vw] mobile:text-[1.6vw] mobile:w-[80%] mobile:font-semibold">
        Nossos planos cobrem Vacinas, exames e mais!
      </p>
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
    <Exclamation isDarkMode={isDarkMode} />
  );
};

export default Toggle;
