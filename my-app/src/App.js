import ExampleV2 from './components/login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar';
import Home from "./components/Home";
import Registration from './components/register';

import OrganisersHome from './pages/organisersHome';
function App() {
const [nav , setNav]=useState(true);

  return (
    <BrowserRouter>
  {nav?<Navbar/>:null}
  <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/login' element={<ExampleV2 n={setNav}/>}  ></Route>
<Route path='/register' element={<Registration n={setNav}/>}  ></Route>
<Route path='/Product'  ></Route>
<Route path='/orghome' element={<OrganisersHome n={setNav}/>}  ></Route>

  </Routes>
   </BrowserRouter>
  );
}

export default App;
