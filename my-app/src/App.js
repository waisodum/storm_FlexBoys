import ExampleV2 from "./components/login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Registration from "./components/register";
import OrganisersHome from "./pages/organisersHome";
import Events from "./components/events";
import LandingPage from "./components/landingPage";
import About from "./pages/About";
import Footer from "./components/Footer";
import EventOrganizer from "./components/EventOrganizer";
import Chat from "./components/Chat";
import Selling from "./components/selling";
import Help from "./pages/help";

function App() {
  const [nav, setNav] = useState(true);
  const [data, setdata] = useState([]);
  const [all, setall] = useState(false);

  useEffect(() => {
    fetch("http://localhost:80/users", {
      cache: "no-store",
    })
      .then((y) => {
        return y.json();
      })
      .then((x) => {
        setdata(x);
      })
      .catch((y)=>setall(true));
  }, []);
  if (all) {
    return<div>server down or database is not connected</div>
  }

  return (
    <>
      <BrowserRouter>
        {nav ? <Navbar /> : null}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<ExampleV2 n={setNav} />}></Route>
          <Route path="/register" element={<Registration n={setNav} />}></Route>
          <Route path="/Product"></Route>
          <Route
            path="/orghome"
            element={<OrganisersHome n={setNav} />}
          ></Route>
          <Route
            path="/events/:eventName"
            element={<Events n={data} />}
          ></Route>
          <Route path="/land/:id" element={<LandingPage n={data} />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/eventOrganizers" element={<EventOrganizer />}></Route>
          <Route path="/chatBot" element={<Chat />}></Route>
          <Route path="/salman" element={<Selling n={data} />}></Route>
          <Route path="/help" element={<Help n={setNav} />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
