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
import About from './pages/About';
function App() {
const [nav , setNav]=useState(true);
const [eve,setEve]=useState(null);
  return (
    <BrowserRouter>
  {nav?<Navbar/>:null}
  <Routes>
<Route path='/' element={<Home i={setEve}/>}></Route>
<Route path='/login' element={<ExampleV2 n={setNav}/>}  ></Route>
<Route path='/register' element={<Registration n={setNav}/>}  ></Route>
<Route path='/Product'></Route>
<Route path='/orghome' element={<OrganisersHome n={setNav}/>}  ></Route>
<Route path='/events/:eventName' element={<Events />}  ></Route>
<Route path='/land/:id' element={<LandingPage/>}  ></Route>
<Route path='/About' element={<About/>}  ></Route>

  </Routes>
   </BrowserRouter>
  );
}

export default App;
