import './App.css';
import NavBar from './Components/Organisms/Navbar';
import Banner from './Components/Organisms/Banner';
import Services from './Components/Organisms/Services';
import Plans from './Components/Organisms/Plans'
import OutTeams from './Components/Organisms/OurTeam';
import GetInContact from './Components/Organisms/GetInContact';
import Coments from './Components/Organisms/Coments';

function App() {
  return (
    <div className="App dark:bg-DarkBackground">
      <NavBar />
      <Banner/>
      <Services/>
      <Plans/>
      <OutTeams/>
      <GetInContact/>
      <Coments/>
    </div>
  );
}

export default App;
