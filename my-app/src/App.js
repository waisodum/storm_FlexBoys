import ExampleV2 from './components/login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar';
import Home from "./components/Home";
import OrganisersHome from './pages/organisersHome';
import Help from './pages/help';
import About from './pages/About';
function App() {
const [nav , setNav]=useState(true);

  return (
    <BrowserRouter>
  {nav?<Navbar/>:null}
  <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/orghome' element={<OrganisersHome n={setNav}/>}  ></Route>
<Route path='/help' element={<Help n={setNav}/>}></Route>
<Route path='/About' element={
  <About/>

}></Route>
  </Routes>
   </BrowserRouter>
  );
}

export default App;
