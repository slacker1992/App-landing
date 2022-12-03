import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import MobileFooter from "./components/footer/MobileFooter";
import About from "./components/about/About";
import TermsofServices from "./components/termsofservices/TermsofServices";
import PrivacyPolicy from "./components/privacypolicy/PrivacyPolicy";
import TackgramRules from "./components/tackgramrules/TackgramRules";
import Verification from "./components/verification/Verification";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Player /> */}
        <Routes>
          <Route path="/Home" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/TermsofServices" exact element={<TermsofServices />} />
          <Route path="PrivacyPolicy" exact element={<PrivacyPolicy />} />
          <Route path="/TackgramRules" element={<TackgramRules />} />
          <Route path="/Verification" exact element={<Verification />} />
          {/* <Route path="/Artist/:id" exact element={<Album/>} /> */}
          {/* <Route path="/Videographer/:id" exact element={<VAlbum/>} /> */}
          {/* <Route path="/Producer/:id" exact element={<PAlbum/>} /> */}
          {/* <Route path="*" element={<Notfound/>} /> */}
        </Routes>
        {/* <Album name="xxxx" date="2020/01/01" /> */}
        {/* <MobileFooter /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
