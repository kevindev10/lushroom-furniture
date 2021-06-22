import React from 'react';
import './App.css';
import 'tachyons';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home'; 
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ScrollToTopOnMount from './components/ScrollToTop';
import NavBar from './components/NavBar/NavBar';
import HomeFurniture from './components/HomeFurniture/HomeFurniture';
import OfficeFurniture from './components/OfficeFurniture/OfficeFurniture';
import OutdoorFurniture from './components/OutdoorFurniture/OutdoorFurniture';
import ExecDesk from  './components/ActualFurniture/ExecDesk/ExecDesk';
import Workstations from  './components/ActualFurniture/Workstations/Workstations';
import Chairs from  './components/ActualFurniture/Chairs/Chairs';
import ConfTables from './components/ActualFurniture/ConfTables/ConfTables';
import RecpCounters from './components/ActualFurniture/RecpCounters/RecpCounters';
import LivingRoom from './components/ActualFurniture/LivingRoom/LivingRoom';
import DiningRoom from './components/ActualFurniture/DiningRoom/DiningRoom';
import Bedroom from './components/ActualFurniture/Bedroom/Bedroom';
import Gazebos from './components/ActualFurniture/Gazebos/Gszebos';
import OutdoorDining from './components/ActualFurniture/OutdoorDining/OutdoorDining';
import OutdoorSofas from './components/ActualFurniture/OutdoorSofas/OutdoorSofas';






function App() {
  return (
    <div className='tc' >
      <BrowserRouter>
        <ScrollToTopOnMount />

          <NavBar/>
          <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route  path='/about'>
                <About/>
              </Route>
              <Route  path='/contact'>
                <Contact/>
              </Route>
              <Route  path='/home-furniture'>
                <HomeFurniture/>
              </Route>
              <Route path='/office-furniture'>
                <OfficeFurniture/>
              </Route>
              <Route path='/outdoor-furniture'>
                <OutdoorFurniture/>
              </Route>
              <Route path ='/exec-desks'>
                <ExecDesk/>
              </Route>  
               <Route path ='/workstations'>
                <Workstations/>
              </Route>  
               <Route path ='/chairs'>
                <Chairs/>
              </Route>  
               <Route path ='/conf-tables'>
                <ConfTables/>
              </Route>  
               <Route path ='/recp-counters'>
                <RecpCounters/>
              </Route>  
              <Route path ='/living-room'>
                <LivingRoom/>
              </Route> 
               <Route path ='/dining-room'>
                <DiningRoom/>
              </Route>  
               <Route path ='/bedroom'>
                <Bedroom/>
              </Route>  
               <Route path ='/gazebos'>
                <Gazebos/>
              </Route>  
               <Route path ='/outdoor-dining'>
                <OutdoorDining/>
              </Route>  
               <Route path ='/outdoor-sofas'>
                <OutdoorSofas/>
              </Route>   

          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
