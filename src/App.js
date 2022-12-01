import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import Player from "./components/player/Player";
// import Artists from "./components/artists/Artists";
// import Producers from "./components/producers/Producers";
// import Videographers from "./components/videographers/Videographers";
// import Album from "./components/album/Album";
// import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
// import About from "./components/about/About";
// import Projects from "./components/projects/Projects";
// import Notfound from "./components/Notfound";
// import VAlbum from "./components/vdetails/VAlbum";
// import PAlbum from "./components/pdetails/PAlbum";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Player /> */}
        <Routes>
          <Route path="/" exact element={<Home/>} />
          {/* <Route path="/About" exact element={<About/>} /> */}
          {/* <Route path="/Producers" exact element={<Producers/>} /> */}
          {/* <Route path="Projects" exact element={<Projects/>} /> */}
          {/* <Route path="/Contact" element={<Contact/>} /> */}
          {/* <Route path="/Album" exact element={<Album/>} /> */}
          {/* <Route path="/Artist/:id" exact element={<Album/>} /> */}
          {/* <Route path="/Videographer/:id" exact element={<VAlbum/>} /> */}
          {/* <Route path="/Producer/:id" exact element={<PAlbum/>} /> */}
          {/* <Route path="*" element={<Notfound/>} /> */}

        </Routes>
          {/* <Album name="xxxx" date="2020/01/01" /> */}
        {/* <Footer />   */}
      </Router>
    </>
  );
}

export default App;