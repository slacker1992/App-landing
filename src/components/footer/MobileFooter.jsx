import React from "react";
// import { Link } from "react-router-dom";
import FooterImageBG from "../FooterImageBG";

const MobileFooter = () => {
  return (
    <div className="mobile-footer">
      <div>
        <a href="#">
          <img src="assets/images/button.png" alt="" />
        </a>
      </div>
      <div className="mobile-footer-nav">
        <div className="footer-nav-menu">
          <a href="About" to={"/aboutus"}>About Us</a>
          <a href="#">Terms of Services</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-nav-menu">
          <a href="#">Tackgram Rules</a>
          <a href="#">Verifications</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <FooterImageBG />
    </div>
  );
};

export default MobileFooter;
