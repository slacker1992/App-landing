import React from "react";

export default function Footer() {
  return (
    <div>
      {/* <!--start footer--> */}
      <footer id="footer">
        <div class="container">
          <div className="footer-btn">
            <a href="#">
              <img src="assets/images/button.png" alt="" />
            </a>
          </div>
          <div class="footer-social-icons text-center">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="#">
                  <i class="icofont-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icofont-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icofont-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icofont-google-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* <!--end footer--> */}
    </div>
  );
}
