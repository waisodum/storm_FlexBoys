import ExampleV2 from './components/login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar';
import Home from "./components/Home";

function App() {
const [nav , setNav]=useState(true);

  return (
    <BrowserRouter>
  {nav?<Navbar/>:<>salman</>}
  <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/Product'  ></Route>

  </Routes>
   </BrowserRouter>
  );
}

export default App;
