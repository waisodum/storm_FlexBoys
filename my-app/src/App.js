import ExampleV2 from './components/login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar';
import Home from "./components/Home";
import Registration from './components/register';
import OrganisersHome from './pages/organisersHome';
import Events from './components/events';
import LandingPage from './components/landingPage';
import Footer from './components/Footer';
import EventOrganizer from './components/EventOrganizer';
import Chat from './components/Chat';
function App() {
const [nav , setNav]=useState(true);
const [eve,setEve]=useState(null);
  return (<>
    <BrowserRouter>
  {nav?<Navbar/>:null}
  <Routes>
<Route path='/' element={<Home i={setEve}/>}></Route>
<Route path='/login' element={<ExampleV2 n={setNav}/>}  ></Route>
<Route path='/register' element={<Registration n={setNav}/>}  ></Route>
<Route path='/Product'></Route>
<Route path='/orghome' element={<OrganisersHome n={setNav}/>}  ></Route>
<Route path='/events/:eventName' element={<Events />}  ></Route>
<Route path='/booking' element={<LandingPage/>}  ></Route>
<Route path='/eventOrganizers' element={<EventOrganizer/>}  ></Route>
<Route path='/chatBot' element={<Chat/>}  ></Route>

  </Routes>
   </BrowserRouter>
   <Footer/>
   </>
  );
}

export default App;
