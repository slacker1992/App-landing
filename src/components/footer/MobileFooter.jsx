import React from "react";
import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <div className="mobile-footer">
      <div>
        <a>
          <img src="assets/images/button.png" alt="" />
        </a>
      </div>
      <div className="mobile-footer-nav">
        <div className="footer-nav-menu">
          <Link to={"/aboutus"}>About Us</Link>
          <Link>Terms of Services</Link>
          <Link>Privacy Policy</Link>
        </div>
        <div className="footer-nav-menu">
          <Link>Tackgram Rules</Link>
          <Link>Verifications</Link>
          <Link>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
