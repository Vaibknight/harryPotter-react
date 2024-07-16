import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import Nav from "./component/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./component/Books";
import Characters from "./component/Characters";
import Movies from "./component/Movies";
import Potions from "./component/Potions";
import Spells from "./component/Spells";
import Home from "./component/Home";
import Footer from "./component/Footer";

function App() {
  const [hideNav, setHideNav] = useState(false);

  const hide = () => {
    hideNav == false ? setHideNav(true) : setHideNav(false);
  };

  const api = "https://api.potterdb.com/v1/";
  return (
    <>
      <BrowserRouter>
        <Header hide={hide} />
        {hideNav ? <Nav /> : ""}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books api={api} />} />
          <Route path="/characters" element={<Characters api={api} />} />
          <Route path="/movies" element={<Movies api={api} />} />
          <Route path="/potions" element={<Potions api={api} />} />
          <Route path="/spells" element={<Spells api={api} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
