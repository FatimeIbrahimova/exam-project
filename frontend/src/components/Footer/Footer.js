import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="category">
          <h2>Categories</h2>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
        </div>
        <div className="help">
          <h2>Help</h2>
          <ul>
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="touch" style={{ width: 300 }}>
          <h2>GET IN TOUCH</h2>
          <span style={{ color: "gray", width: 200 }}>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </span>
          <div className="icons" style={{ color: "gray", marrginTop: 10 }}>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest-p"></i>
          </div>
        </div>
        <div className="letter">
          <h2>NEWSLETTER</h2>
          <input placeholder="email@example.com" />
          <br />
          <button className="btn">Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="card">
          <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png" />
          <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png" />
          <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png" />
          <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png" />
          <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png" />
        </div>
        <p style={{ color: "white" }}>
          Copyright ©2023 All rights reserved | This template is made with{" "}
          <i class="fa-regular fa-heart"></i> by Colorlib
        </p>
      </div>
    </div>
  );
};

export default Footer;
